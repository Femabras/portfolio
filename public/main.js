/*
  Fernando Brás, portfolio. Progressive enhancement only: every section reads
  fine without this file. It adds the theme toggle, the scroll reveals below
  the hero, count-up stats, the card spotlight, the active-section marker in
  the header, the header's see-through state at the top, the looping terminal
  in the hero, and the current year in the footer.

  The theme is applied before first paint by the small inline script in each
  page's <head>, which also adds the .js class the hero's entrance needs.
*/
(() => {
  "use strict";

  const root = document.documentElement;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const systemDark = window.matchMedia("(prefers-color-scheme: dark)");
  const canObserve = "IntersectionObserver" in window;

  /* --------------------------------------------------------------- Year */

  // The build writes the year it ran in; this keeps the footer right on a
  // page nobody has rebuilt since New Year.
  const thisYear = String(new Date().getFullYear());
  document.querySelectorAll("[data-year]").forEach((el) => { el.textContent = thisYear; });

  /* -------------------------------------------------------------- Theme */

  // Storage can throw (private windows, blocked site data), so every access
  // sits in a try/catch and the page falls back to the system setting.
  const THEME_KEY = "theme";
  const toggle = document.querySelector("[data-theme-toggle]");

  const currentTheme = () => root.dataset.theme || (systemDark.matches ? "dark" : "light");

  const syncToggle = () => {
    if (!toggle) return;
    const current = currentTheme();
    toggle.dataset.current = current;
    toggle.setAttribute("aria-label", current === "dark" ? toggle.dataset.toLight : toggle.dataset.toDark);
  };

  if (toggle) {
    toggle.hidden = false;
    toggle.addEventListener("click", () => {
      const next = currentTheme() === "dark" ? "light" : "dark";
      root.dataset.theme = next;
      try { localStorage.setItem(THEME_KEY, next); } catch (error) { /* keep it for this visit only */ }
      syncToggle();
    });
    systemDark.addEventListener("change", syncToggle);
    syncToggle();
  }

  /* ------------------------------------------------------ Header state */

  // The header is solid unless this script says the page is at the very top,
  // so a failed script never leaves a see-through header over the content.
  const header = document.querySelector(".site-header");
  if (header) {
    const onScroll = () => header.classList.toggle("at-top", window.scrollY <= 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ------------------------------------------------------------ Reveals */

  // Only what starts below the fold is hidden, and only once this script is
  // running, so nothing on screen blinks and nothing stays hidden if the
  // script never loads. The hero has its own CSS entrance.
  const REVEAL_MS = 700; // matches the .reveal-in transition in main.css
  if (!reduceMotion.matches && canObserve) {
    const belowFold = [...document.querySelectorAll("[data-reveal]")].filter(
      (el) => !el.closest(".hero") && el.getBoundingClientRect().top > window.innerHeight,
    );
    const reveal = (el) => {
      el.classList.add("reveal-in");
      el.classList.remove("reveal-pending");
      const delay = parseFloat(getComputedStyle(el).getPropertyValue("--delay")) || 0;
      window.setTimeout(() => el.classList.remove("reveal-in"), REVEAL_MS + delay + 50);
    };
    const revealObserver = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        reveal(entry.target);
        revealObserver.unobserve(entry.target);
      }
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.12 });
    belowFold.forEach((el) => {
      el.classList.add("reveal-pending");
      revealObserver.observe(el);
    });
    // Printing a page that was never scrolled would otherwise print it blank.
    window.addEventListener("beforeprint", () => belowFold.forEach((el) => el.classList.remove("reveal-pending")));
  }

  /* ----------------------------------------------------------- Count-up */

  // The final number is already in the HTML, so visitors without the script
  // (and search engines) read the real figure. 1200 ms is long enough to
  // notice and short enough to be over before the eye moves on.
  const COUNT_MS = 1200;
  const countUp = (el) => {
    const target = Number(el.dataset.count);
    if (!Number.isFinite(target)) return;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min(1, (now - start) / COUNT_MS);
      el.textContent = String(Math.round(target * (1 - Math.pow(1 - t, 3))));
      if (t < 1) requestAnimationFrame(tick);
    };
    el.textContent = "0";
    requestAnimationFrame(tick);
  };

  if (canObserve && !reduceMotion.matches) {
    const countObserver = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        countUp(entry.target);
        countObserver.unobserve(entry.target);
      }
    }, { threshold: 0.6 });
    document.querySelectorAll("[data-count]").forEach((el) => countObserver.observe(el));
  }

  /* ----------------------------------------------------------- Spotlight */

  document.querySelectorAll(".spotlight").forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const box = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${event.clientX - box.left}px`);
      card.style.setProperty("--my", `${event.clientY - box.top}px`);
    });
  });

  /* ---------------------------------------------------------- Scrollspy */

  // A section counts as current while it crosses the middle of the viewport.
  const navLinks = [...document.querySelectorAll('.site-nav a[href^="#"]')];
  if (navLinks.length && canObserve) {
    const linkFor = new Map(navLinks.map((a) => [a.getAttribute("href").slice(1), a]));
    const spy = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        const link = linkFor.get(entry.target.id);
        if (!link) continue;
        if (entry.isIntersecting) {
          navLinks.forEach((a) => a.removeAttribute("aria-current"));
          link.setAttribute("aria-current", "location");
        } else if (link.hasAttribute("aria-current")) {
          link.removeAttribute("aria-current");
        }
      }
    }, { rootMargin: "-45% 0px -50% 0px" });
    linkFor.forEach((_, id) => {
      const section = document.getElementById(id);
      if (section) spy.observe(section);
    });
  }

  /* ------------------------------------------------------ Hero terminal */

  // Replays `make gate`: types the command, runs each check with a spinner for
  // the time set in content/site.mjs (data-ms), prints the result, holds it,
  // and starts again. It only runs while the terminal is on screen and the
  // tab is visible. Without the script, or with reduced motion, the terminal
  // keeps its finished state from the HTML.
  const TYPE_MS = 90; // per character of the command, a brisk typist
  const HOLD_MS = 4000; // the finished run stays up this long before the replay
  const gate = document.querySelector("[data-gate]");

  if (gate && !reduceMotion.matches) {
    const command = gate.querySelector(".t-cmd");
    const typed = gate.querySelector(".t-typed");
    const text = typed.dataset.text || typed.textContent;
    const steps = [...gate.querySelectorAll(".t-step")];
    const lines = [...gate.querySelectorAll(".t-line")];
    const finish = [...gate.querySelectorAll(".t-done")];
    let run = 0;
    let timer = 0;
    let onScreen = !canObserve;

    // Resolves only if this run is still the current one; a stopped run just
    // never wakes up again.
    const wait = (ms, id) => new Promise((resolve) => {
      timer = window.setTimeout(() => { if (id === run) resolve(); }, ms);
    });

    const play = async (id) => {
      lines.forEach((line) => { line.classList.add("is-hidden"); line.classList.remove("is-running"); });
      typed.textContent = "";
      command.classList.remove("is-hidden");
      command.classList.add("is-typing");
      await wait(600, id);
      for (const character of text) {
        typed.textContent += character;
        await wait(TYPE_MS, id);
      }
      await wait(400, id);
      command.classList.remove("is-typing");
      for (const step of steps) {
        step.classList.remove("is-hidden");
        step.classList.add("is-running");
        await wait(Number(step.dataset.ms) || 800, id);
        step.classList.remove("is-running");
      }
      finish.forEach((line) => line.classList.remove("is-hidden"));
      await wait(HOLD_MS, id);
      play(id);
    };

    const start = () => {
      if (!onScreen || document.hidden) return;
      run += 1;
      window.clearTimeout(timer);
      play(run);
    };
    const stop = () => {
      run += 1;
      window.clearTimeout(timer);
    };

    if (canObserve) {
      new IntersectionObserver(([entry]) => {
        onScreen = entry.isIntersecting;
        if (onScreen) start(); else stop();
      }, { threshold: 0.35 }).observe(gate);
    } else {
      start();
    }
    document.addEventListener("visibilitychange", () => { if (document.hidden) stop(); else start(); });
  }
})();

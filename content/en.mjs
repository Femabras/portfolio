/*
  English wording for index.html and its link-preview card. Values in {braces}
  come from site.mjs or are computed by scripts/build.mjs; an unknown {token}
  stops the build.
  pt.mjs must have the same keys, in the same shape: the build checks it.
*/
export default {
  lang: "en",
  htmlLang: "en",
  ogLocale: "en_US",
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  monthYear: "{month} {year}",
  decimal: ".",

  title: "{name} — Full-stack web engineer",
  description: "{name}, full-stack web engineer in {location}. Founder and only engineer of {productName}, built with Next.js, React, TypeScript and Go.",
  ogDescription: "Founder and only engineer of {productName}: Next.js, React, TypeScript and Go, from the first idea to production.",
  ogImageAlt: "{name}, full-stack web engineer",
  jobTitle: "Full-stack web engineer",
  // The link-preview card: social/og-card.html, captured to og-card.png.
  og: {
    eyebrow: "Full-stack web engineer · {location} · Remote",
    tagline: "Founder and engineer of {productName}, from brief to production.",
  },

  skip: "Skip to content",
  navLabel: "Sections",
  nav: { work: "Work", process: "Process", skills: "Skills", about: "About", contact: "Contact" },
  languageLabel: "Language",
  toDark: "Switch to dark theme",
  toLight: "Switch to light theme",
  cvShort: "CV",
  newTab: "(opens in a new tab)",
  live: "Live",
  pre: "Pre-release",

  hero: {
    badge: "Open to remote roles",
    hello: "Hi, I'm {name}",
    titleStart: "I build web products",
    titleEnd: "end to end.",
    sub: "Full-stack engineer working in React, Next.js, TypeScript and Go. I built and run {productName} on my own.",
    work: "See my work",
    cv: "Download CV",
    portraitAlt: "Portrait of {name}",
    live: "live",
    gatePassed: "gate passed",
  },

  // `value` names a number computed by the build (see scripts/build.mjs).
  stats: [
    { icon: "rocket", value: "weeksToLaunch", unit: " weeks", label: "first commit to production" },
    { icon: "trending", value: "releases", unit: " releases", label: "in the first {releaseWindowWeeks} weeks" },
    { icon: "globe", value: "languageCount", unit: " languages", label: "Portuguese, English, French" },
    { icon: "pen", value: "adrs", unit: "+ ADRs", label: "decisions written down first" },
  ],
  stackLabel: "Stack",

  work: {
    kicker: "Selected work",
    lede: "A trilingual web platform for Angola, live since {launchMonth}: football predictions, real-time games and a dashboard for tipsters. I'm the founder and the only engineer.",
    since: "{startMonthShort} to now",
    visit: "Visit {product}",
  },

  highlights: {
    chess: {
      title: "Real-time chess",
      text: "Invite a friend by link and play in the browser. Moves stream over Server-Sent Events, the server checks every one, and yours shows instantly.",
      ping: "move sent",
    },
    predictions: {
      title: "Predictions that answer to a backtest",
      text: "A Poisson model in Go. When the backtest showed league picks were overconfident, I switched them off.",
      leagues: "Leagues",
      tournaments: "Tournaments",
      switchedOff: "switched off",
      kept: "kept",
      predicted: "predicted",
      hit: "hit",
    },
    releases: {
      title: "Safe releases",
      text: "Every push to main runs the full gate and deploys to staging. Production gets the exact image that passed.",
    },
    languages: {
      title: "Three languages",
      text: "Portuguese, English and French. CI fails if the code uses a string that is missing in any of them.",
    },
    atmMap: {
      title: "A map with no maps bill",
      text: "The ATM finder draws Angola from my own vector tiles on Cloudflare R2, not from a paid maps API.",
    },
    sessions: {
      title: "Sessions that don't drop",
      text: "The Next.js proxy refreshes tokens before they expire, and parallel requests share a single refresh.",
    },
  },

  alsoTitle: "Also built",
  also: {
    tipsterDashboard: "Tipster dashboard with TanStack Query and Zustand",
    games: "Snake, Match-3 and Tic-Tac-Toe",
    compliance: "Cookie notice and versioned terms",
    ownerConsole: "Owner console with a strict CSP",
    music: "Private music streaming on R2",
    assistant: "Gemini assistant with daily caps",
    cvBuilder: "CV builder that never uploads drafts",
    designTokens: "Design tokens for type and motion",
  },

  debugging: {
    kicker: "Debugging",
    title: "A bug I tracked down",
    lede: "Google sign-in on {productName}, and why it only broke for some people.",
    step: "Step",
    steps: [
      { title: "Symptom", text: "Google sign-in worked for some visitors and failed for others, within the same hour." },
      { title: "Clue", text: "It only failed when /login was the first page loaded, never when you clicked through." },
      { title: "Cause", text: "Server rendering wrote our internal Docker address into the link. Browsers can't reach it." },
      { title: "Fix", text: "Links the browser follows now use a separate public URL." },
    ],
    lesson: "Lesson: test the first load of a page, not only the path you click through.",
  },

  process: {
    kicker: "Process",
    title: "How I work",
    principles: [
      { title: "Decide first", text: "Every big choice gets a written decision record. More than {adrs} so far." },
      { title: "One gate", text: "Lint, types, tests, a vulnerability scan and a production build before every commit." },
      { title: "Fix the cause", text: "I name the real cause. No patch that hides a defect." },
      { title: "AI-assisted", text: "Claude Code writes, I review every diff. Docs ship with the change." },
    ],
    architectureTitle: "How it fits together",
    nodes: [
      { name: "Browser", caption: "phone or desktop" },
      { name: "Cloudflare", caption: "DNS · TLS · R2" },
      { name: "Caddy", caption: "reverse proxy" },
      { name: "Next.js 16", caption: "SSR · i18n · proxy" },
      { name: "Go API", caption: "REST · SSE · jobs" },
      { name: "Postgres · Redis", caption: "data · queues" },
    ],
    pipelineLabel: "Delivery",
    pipeline: ["GitHub Actions", "GHCR", "Staging", "Production"],
  },

  skills: {
    kicker: "Skills",
    title: "Toolbox",
    groups: [
      { name: "Frontend", items: ["React 19", "Next.js 16", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS 4", "TanStack Query", "Zustand", "next-intl", "MapLibre GL", "Server-Sent Events"] },
      { name: "Backend and data", items: ["Go", "Gin", "GORM", "Asynq", "REST API design", "PostgreSQL", "Redis", "JWT sessions", "Google OAuth", "Rate limiting"] },
      { name: "Delivery", items: ["GitHub Actions", "Docker Compose", "GHCR", "Caddy", "Cloudflare", "R2", "Hetzner", "restic", "Backblaze B2"] },
      { name: "Practice", items: ["Accessibility", "i18n", "SEO", "node:test", "Go testing", "CI quality gates", "ADRs", "Claude Code", "Adobe Illustrator"] },
    ],
  },

  about: {
    kicker: "About",
    title: "About me",
    paragraphs: [
      "I studied Computer Science and Engineering at {school} in India and graduated in {gradYear}. I build from Luanda, mostly for people on phones and limited data.",
      "Outside code I produce music in Logic Pro X and design in Illustrator.",
    ],
    studioAlt: "{name} at his desk, producing music on a keyboard in front of a monitor",
    studioCaption: "My desk doubles as a music studio",
  },

  contact: {
    kicker: "Contact",
    title: "Let's talk",
    lede: "I'm looking for a remote web engineering role. Email is the fastest way to reach me.",
  },

  footer: {
    note: "Plain HTML, CSS and a little JavaScript. No trackers, no third-party requests.",
    otherLanguage: "Versão em português",
  },
};

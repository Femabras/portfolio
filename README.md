# Fernando Brás, portfolio

Personal portfolio and résumé, served by GitHub Pages at
<https://femabras.github.io/portfolio/>. Plain HTML and CSS: no framework, no
build step, no script, and no request to any third party.

## Layout

| Path | What it is |
| --- | --- |
| `index.html` | The English page |
| `public/portuguese-page.html` | The Portuguese page (pre-1990 Angolan spelling) |
| `public/main.css` | The one stylesheet both pages use |
| `assets/fonts/` | Inter and JetBrains Mono, self-hosted (SIL Open Font License, texts alongside) |
| `assets/images/` | Portrait, studio photo, favicon, and `og-card.png` for link previews |
| `assets/pdf/fernando-bras-resume.pdf` | The résumé the pages link to |
| `resume/resume.html` | The source of that PDF |
| `resume/fonts/` | Static Inter weights, used only by the résumé |

## Preview

Open `index.html` in a browser. Everything works from disk, offline.

```sh
xdg-open index.html
```

Light and dark follow the system setting.

## Publish

Push to `main`; GitHub Pages publishes the live site from it.

## Update the résumé

1. Edit `resume/resume.html`.
2. Open it in Chrome or Chromium and print (Ctrl+P).
3. Destination: Save as PDF. Paper size: Letter. Margins: Default. Tick
   Background graphics. The page size and margins come from the file itself.
4. Save over `assets/pdf/fernando-bras-resume.pdf`.

It is one US Letter page because it targets US roles. For A4, change
`size: Letter` in the `@page` rule and the `.page` width and height to 210mm by
297mm. Check the preview is still one page after any edit: the page box hides
overflow rather than spilling onto a second page.

The résumé uses static font weights, not the variable font the site uses:
Chromium writes a variable font into a PDF as Type 3 glyphs, which some
applicant-tracking systems parse badly. Section headings avoid letter-spacing
for the same reason.

## Rules this site keeps

- No external requests. Fonts are local; nothing loads from a CDN.
- No pure black or pure white. The palette is `#001514` ink on `#fbfffe` paper,
  with `#04706b` and `#2aba8a` as accents.
- Every colour pair passes WCAG AA contrast in both themes.
- Motion is limited to colour and shadow transitions and stops under
  `prefers-reduced-motion`.
- The English and Portuguese pages carry the same sections in the same order.
  A change to one is made to the other in the same commit.

## Facts that go stale

The case study quotes figures that will drift: the release count, the number of
ADRs, the status of each feature (Live or Pre-release), and the backtest strike
rates. When one changes, update it on both pages and in the résumé.

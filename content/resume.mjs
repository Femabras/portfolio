/*
  Wording for resume/resume.html, the source of the PDF. English only: the
  target roles are US-based. Contact details, dates and figures come from
  site.mjs through {tokens}, so they always match the portfolio.
*/
export default {
  role: "Full-stack web engineer · React, TypeScript, Next.js, Go",
  locationLine: "{location} ({timezone}), open to remote work",
  portfolioLabel: "Portfolio",
  linkedinLabel: "LinkedIn",
  productLabel: "Product",

  summaryTitle: "Summary",
  summary: "Full-stack web engineer, founder and only engineer of {productName}, a trilingual web platform for Angola on Next.js, React, TypeScript and Go. It went live {weeksToLaunch} weeks after its first commit and shipped {releases} production releases in its first {releaseWindowWeeks} weeks. I own features end to end, from the brief and API contract to the UI, tests, release and follow-up, and I write the tradeoffs down before I build.",

  skillsTitle: "Skills",
  skills: [
    { label: "Frontend", text: "React 19, Next.js 16 (App Router, server rendering), TypeScript, JavaScript, HTML, CSS, Tailwind CSS 4, TanStack Query, Zustand, next-intl, MapLibre GL, Server-Sent Events" },
    { label: "Backend", text: "Go (Gin, GORM, Asynq), REST API design, PostgreSQL, Redis, JWT sessions with refresh-token rotation, Google OAuth, rate limiting" },
    { label: "Delivery", text: "GitHub Actions, Docker Compose, GHCR, Caddy, Cloudflare (DNS, R2), Hetzner, restic backups to Backblaze B2" },
    { label: "Practice", text: "Responsive and accessible UI, i18n and SEO, automated tests (node:test, Go), CI quality gates, architecture decision records, AI-assisted development (Claude Code), Adobe Illustrator" },
  ],

  experienceTitle: "Experience",
  job: {
    title: "Founder & Full-Stack Engineer",
    company: "{productName}",
    dates: "{startMonthShort} – Present",
    meta: "{product} · {location}",
    lede: "Web platform for Angola in Portuguese, English and French: football predictions, four browser games including real-time chess, a dashboard for partner tipsters and an owner console.",
    points: [
      "Built real-time online chess: invite links, Server-Sent Events that push each move to both players and to spectators, server-side move validation, and optimistic moves in the React client that roll back if the server rejects them.",
      "Built the predictions engine in Go, a Poisson score model using team strengths for leagues and Elo ratings for tournaments, and a backtest that grades picks with the production code. Limited multi-leg picks to tournaments after league slips hit {leagueHit} against {leaguePredicted} predicted (tournaments: {tournamentHit} vs {tournamentPredicted}).",
      "Set up CI/CD in GitHub Actions: each push runs the gate, builds images to GHCR and deploys to a password-gated staging site; production promotes the exact image verified there, and a tag with no changelog entry is refused.",
      "Fixed a Google Sign-In failure that only hit visitors landing directly on sign-in or sign-up: server rendering wrote the API's internal Docker hostname into the link. Browser-facing URLs now use a separate public origin.",
      "Made missing translations fail the build with a check that every string the code uses exists in all three languages, added after untranslated keys reached the chess board in every locale.",
    ],
    // Printed with a bold "Built, pre-release:" label in front.
    preReleaseLabel: "Built, pre-release:",
    preRelease: "an ATM finder on MapLibre GL with a self-hosted, Angola-only vector map (PMTiles on Cloudflare R2); silent session refresh with rotating refresh tokens in the Next.js proxy; private audio streaming through presigned URLs; a Gemini assistant behind a rule-based router with daily caps.",
    process: "Record each significant decision in an architecture decision record ({adrs}+). Work AI-assisted: spec and ADR first, Claude Code implements in plan mode, every diff reviewed, and nothing committed until formatting, vet, tests, a vulnerability scan, the i18n check, lint and a production build pass.",
  },

  educationTitle: "Education",

  moreTitle: "Languages and interests",
  languagesLabel: "Languages:",
  languages: "Portuguese (native), English (professional working proficiency), French, Spanish and Hindi (basic)",
  interestsLabel: "Interests:",
  interests: "music production (Logic Pro X), graphic design, football, basketball, snooker",
};

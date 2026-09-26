/*
  Facts shared by the English page, the Portuguese page, the résumé and the
  link-preview cards. Each value lives here once. Change it, run
  `node scripts/build.mjs`, and every page that shows it is rewritten.
  Wording lives in en.mjs, pt.mjs and resume.mjs; those files point at these
  values with {tokens}.
*/
export default {
  name: "Fernando Brás",
  email: "suchel@femabras.com",
  phone: { display: "+244 943 073 091", tel: "+244943073091" },
  // countryCode is the ISO 3166 code search engines read from the page data.
  location: { city: "Luanda", country: "Angola", countryCode: "AO" },
  timezone: "UTC+1",

  links: {
    // Canonical address of the site, with the trailing slash. Every absolute
    // URL in the pages (canonical, hreflang, Open Graph) is built from it.
    site: "https://femabras.github.io/portfolio/",
    siteLabel: "femabras.github.io/portfolio",
    linkedin: "https://www.linkedin.com/in/suchel/",
    linkedinLabel: "linkedin.com/in/suchel",
    // The product link opens the matching language of femabras.com.
    product: "https://femabras.com",
    productLabel: "femabras.com",
  },

  // Paths from the repository root. The width and height the pages declare
  // for each image are read from the files at build time.
  files: {
    cv: "assets/pdf/fernando-bras-resume.pdf",
    cvDownloadName: "Fernando-Bras-Resume.pdf",
    portrait: "assets/images/fernando-bras-portrait.webp",
    studio: "assets/images/home-studio.webp",
    // Link-preview images, one per language. Each is a capture of the page
    // the build writes to social/ (README.md, "Update the link previews").
    ogImage: { en: "assets/images/og-card.png", pt: "assets/images/og-card-pt.png" },
    favicon: "assets/images/favicon.svg",
  },

  education: {
    degree: "B.Tech, Computer Science and Engineering",
    school: "GD Goenka University",
    place: "Gurugram, India",
    year: 2019,
  },

  femabras: {
    name: "Femabrás",
    // The stack pill in the case study.
    stack: ["Next.js", "Go", "PostgreSQL"],
    // Dates as YYYY-MM-DD. "Weeks to launch" and every "since" date on the
    // pages are computed from these two.
    firstCommit: "2026-03-24", // first commit on origin/main
    firstRelease: "2026-07-06", // v1.0.0, the first production release
    // Production releases in the first weeks after launch: v1.0.0 on 6 July
    // to v1.11.0 on 24 August 2026 is 16 tags in 7 weeks.
    releases: 16,
    releaseWindowWeeks: 7,
    // Shown as "50+": 53 records as of late September 2026.
    adrs: 50,
    locales: ["pt", "en", "fr"],
  },

  // The 2026-07-11 backtest behind the tournament-only rule (percentages).
  backtest: {
    leaguePredicted: [55, 67],
    leagueHit: [39, 45],
    tournamentPredicted: 56.7,
    tournamentHit: 59.8,
  },

  // "live" or "pre" (pre-release). Flip one when a feature ships and both
  // pages update. The wording for each id is in en.mjs and pt.mjs.
  status: {
    chess: "live",
    predictions: "live",
    releases: "live",
    languages: "live",
    atmMap: "pre",
    sessions: "pre",
    tipsterDashboard: "live",
    games: "live",
    compliance: "live",
    ownerConsole: "live",
    music: "pre",
    assistant: "pre",
    cvBuilder: "pre",
    designTokens: "pre",
  },

  // Technology chips under each case-study card.
  tags: {
    chess: ["React", "chess.js", "SSE", "Go"],
    predictions: ["Go", "PostgreSQL", "Backtesting"],
    releases: ["GitHub Actions", "Docker", "GHCR"],
    languages: ["next-intl", "SEO", "CI"],
    atmMap: ["MapLibre GL", "PMTiles", "R2"],
    sessions: ["Next.js", "JWT", "Go"],
  },

  // The ticker under the hero. The first five also go on the link-preview
  // cards.
  tools: [
    "React", "Next.js", "TypeScript", "Go", "PostgreSQL", "Redis", "Tailwind CSS", "Docker",
    "Cloudflare", "GitHub Actions", "MapLibre GL", "Server-Sent Events", "Asynq", "Caddy",
  ],

  // The hero terminal replays the Femabrás gate (`make gate`) in this order.
  // `ms` is how long each step shows its spinner in the animation.
  gate: {
    command: "make gate",
    steps: [
      { text: "gofmt · go build · go vet", ms: 700 },
      { text: "go test ./...", ms: 1200 },
      { text: "govulncheck", note: "no findings", ms: 900 },
      { text: "i18n:check", note: "en · pt · fr", ms: 600 },
      { text: "test · lint · build", ms: 1400 },
    ],
  },
};

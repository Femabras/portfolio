/*
  Texto em português para public/portuguese-page.html e o respectivo cartão
  de pré-visualização, na norma angolana anterior ao Acordo de 1990
  (projecto, arquitectura, correcção; meses com maiúscula). Os {tokens} vêm
  de site.mjs ou são calculados por scripts/build.mjs. Tem de ter as mesmas
  chaves que en.mjs: o build verifica.
*/
export default {
  lang: "pt",
  htmlLang: "pt-AO",
  ogLocale: "pt_PT",
  months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
  monthsShort: ["Jan.", "Fev.", "Mar.", "Abr.", "Maio", "Jun.", "Jul.", "Ago.", "Set.", "Out.", "Nov.", "Dez."],
  monthYear: "{month} de {year}",
  decimal: ",",

  title: "{name} — Engenheiro web full-stack",
  description: "{name}, engenheiro web full-stack em {location}. Fundador e único engenheiro da {productName}, feita com Next.js, React, TypeScript e Go.",
  ogDescription: "Fundador e único engenheiro da {productName}: Next.js, React, TypeScript e Go, da primeira ideia até à produção.",
  ogImageAlt: "{name}, engenheiro web full-stack",
  jobTitle: "Engenheiro web full-stack",
  // Cartão de pré-visualização: social/og-card-pt.html, capturado para og-card-pt.png.
  og: {
    eyebrow: "Engenheiro web full-stack · {location} · Remoto",
    tagline: "Fundador e engenheiro da {productName}, da ideia à produção.",
  },

  skip: "Saltar para o conteúdo",
  navLabel: "Secções",
  nav: { work: "Projecto", process: "Processo", skills: "Competências", about: "Sobre", contact: "Contacto" },
  languageLabel: "Língua",
  toDark: "Mudar para o tema escuro",
  toLight: "Mudar para o tema claro",
  cvShort: "CV",
  newTab: "(abre num novo separador)",
  live: "Em produção",
  pre: "Pré-lançamento",

  hero: {
    badge: "Aberto a vagas remotas",
    hello: "Olá, sou o {name}",
    titleStart: "Construo produtos web",
    titleEnd: "de ponta a ponta.",
    sub: "Engenheiro full-stack com React, Next.js, TypeScript e Go. Criei e mantenho a {productName} sozinho.",
    work: "Ver o meu trabalho",
    cv: "Descarregar CV",
    portraitAlt: "Retrato do {name}",
    live: "online",
    gatePassed: "verificação aprovada",
  },

  stats: [
    { icon: "rocket", value: "weeksToLaunch", unit: " semanas", label: "do primeiro commit à produção" },
    { icon: "trending", value: "releases", unit: " versões", label: "nas primeiras {releaseWindowWeeks} semanas" },
    { icon: "globe", value: "languageCount", unit: " línguas", label: "português, inglês, francês" },
    { icon: "pen", value: "adrs", unit: "+ ADR", label: "decisões escritas antes do código" },
  ],
  stackLabel: "Tecnologias",

  work: {
    kicker: "Projecto em destaque",
    lede: "Uma plataforma web trilingue para Angola, em produção desde {launchMonth}: dicas de futebol, jogos em tempo real e um painel para tipsters. Sou o fundador e o único engenheiro.",
    since: "{startMonth} até hoje",
    visit: "Visitar {product}",
  },

  highlights: {
    chess: {
      title: "Xadrez em tempo real",
      text: "Convide um amigo por link e jogue no navegador. As jogadas chegam por Server-Sent Events, o servidor valida cada uma, e a sua aparece de imediato.",
      ping: "jogada enviada",
    },
    predictions: {
      title: "Previsões que prestam contas a um backtest",
      text: "Um modelo de Poisson em Go. Quando o backtest mostrou que os palpites de liga eram confiantes de mais, desliguei-os.",
      leagues: "Ligas",
      tournaments: "Torneios",
      switchedOff: "desligados",
      kept: "mantidos",
      predicted: "previsto",
      hit: "acerto",
    },
    releases: {
      title: "Lançamentos seguros",
      text: "Cada push para a main corre todas as verificações e publica no ambiente de testes. A produção recebe exactamente a imagem aprovada.",
    },
    languages: {
      title: "Três línguas",
      text: "Português, inglês e francês. A integração contínua falha se o código usar um texto que falte em alguma delas.",
    },
    atmMap: {
      title: "Um mapa sem factura de mapas",
      text: "O localizador de ATM desenha Angola a partir dos meus próprios tiles vectoriais no Cloudflare R2, e não de uma API de mapas paga.",
    },
    sessions: {
      title: "Sessões que não caem",
      text: "O proxy do Next.js renova os tokens antes de expirarem, e pedidos em paralelo partilham uma única renovação.",
    },
  },

  alsoTitle: "Também construí",
  also: {
    tipsterDashboard: "Painel de tipsters com TanStack Query e Zustand",
    games: "Snake, Match-3 e Jogo do Galo",
    compliance: "Aviso de cookies e termos versionados",
    ownerConsole: "Consola de administração com CSP rigorosa",
    music: "Streaming de música privado no R2",
    assistant: "Assistente Gemini com limites diários",
    cvBuilder: "Criador de CV que nunca envia os rascunhos",
    designTokens: "Tokens de design para tipografia e movimento",
  },

  debugging: {
    kicker: "Depuração",
    title: "Um erro que eu localizei",
    lede: "O início de sessão com Google na {productName}, e porque só falhava para algumas pessoas.",
    step: "Passo",
    steps: [
      { title: "Sintoma", text: "O início de sessão com Google funcionava para uns visitantes e falhava para outros, na mesma hora." },
      { title: "Pista", text: "Só falhava quando /login era a primeira página aberta, nunca navegando pelo site." },
      { title: "Causa", text: "A renderização no servidor escrevia no link o endereço interno do Docker. Nenhum navegador o alcança." },
      { title: "Correcção", text: "Os links que o navegador segue passaram a usar um URL público próprio." },
    ],
    lesson: "Lição: testar o primeiro carregamento de uma página, e não só o caminho que se faz a clicar.",
  },

  process: {
    kicker: "Processo",
    title: "Como trabalho",
    principles: [
      { title: "Decidir primeiro", text: "Cada escolha importante tem um registo de decisão escrito. Já são mais de {adrs}." },
      { title: "Uma só verificação", text: "Lint, tipos, testes, análise de vulnerabilidades e build de produção antes de cada commit." },
      { title: "Corrigir a causa", text: "Nomeio a causa real. Nenhum remendo que esconda um defeito." },
      { title: "Com apoio de IA", text: "O Claude Code escreve, eu reviso cada diff. A documentação segue com a alteração." },
    ],
    architectureTitle: "Como tudo se liga",
    nodes: [
      { name: "Navegador", caption: "telemóvel ou computador" },
      { name: "Cloudflare", caption: "DNS · TLS · R2" },
      { name: "Caddy", caption: "proxy reverso" },
      { name: "Next.js 16", caption: "SSR · i18n · proxy" },
      { name: "API em Go", caption: "REST · SSE · tarefas" },
      { name: "Postgres · Redis", caption: "dados · filas" },
    ],
    pipelineLabel: "Entrega",
    pipeline: ["GitHub Actions", "GHCR", "Testes", "Produção"],
  },

  skills: {
    kicker: "Competências",
    title: "Ferramentas",
    groups: [
      { name: "Frontend", items: ["React 19", "Next.js 16", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS 4", "TanStack Query", "Zustand", "next-intl", "MapLibre GL", "Server-Sent Events"] },
      { name: "Backend e dados", items: ["Go", "Gin", "GORM", "Asynq", "Desenho de APIs REST", "PostgreSQL", "Redis", "Sessões JWT", "OAuth do Google", "Limites de pedidos"] },
      { name: "Entrega", items: ["GitHub Actions", "Docker Compose", "GHCR", "Caddy", "Cloudflare", "R2", "Hetzner", "restic", "Backblaze B2"] },
      { name: "Prática", items: ["Acessibilidade", "i18n", "SEO", "node:test", "Testes em Go", "Verificações na CI", "ADR", "Claude Code", "Adobe Illustrator"] },
    ],
  },

  about: {
    kicker: "Sobre",
    title: "Sobre mim",
    paragraphs: [
      "Estudei Ciência da Computação e Engenharia na {school}, na Índia, e formei-me em {gradYear}. Construo a partir de Luanda, sobretudo para quem usa o telemóvel com pacotes de dados limitados.",
      "Fora do código, produzo música no Logic Pro X e faço design no Illustrator.",
    ],
    studioAlt: "O {name} à secretária, a produzir música num teclado em frente a um monitor",
    studioCaption: "A minha secretária também é estúdio",
  },

  contact: {
    kicker: "Contacto",
    title: "Vamos conversar",
    lede: "Procuro uma vaga remota de engenharia web. O e-mail é a forma mais rápida de me contactar.",
  },

  footer: {
    note: "HTML, CSS e um pouco de JavaScript. Sem rastreadores, sem pedidos a terceiros.",
    otherLanguage: "English version",
  },
};

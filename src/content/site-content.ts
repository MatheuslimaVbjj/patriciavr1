export type ContentItem = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  readingTime: string;
  status: "rascunho-editorial" | "revisado";
};

export const themes = [
  {
    title: "Menopausa sem tabus",
    description:
      "Conversas claras para compreender essa fase sem medo, vergonha ou julgamentos.",
    href: "/menopausa",
  },
  {
    title: "Autoestima e identidade",
    description:
      "Reflexões sobre mudanças, autocuidado e a construção de uma relação mais livre consigo mesma.",
    href: "/conteudos",
  },
  {
    title: "Longevidade com protagonismo",
    description:
      "Conteúdos para viver a maturidade com presença, autonomia, curiosidade e novas possibilidades.",
    href: "/conteudos",
  },
  {
    title: "Etarismo e representação",
    description:
      "Debates sobre visibilidade, respeito e participação das mulheres maduras na sociedade.",
    href: "/conteudos",
  },
] as const;

export const contentItems: ContentItem[] = [
  {
    slug: "climaterio-e-menopausa-entenda-a-diferenca",
    category: "Comece por aqui",
    title: "Climatério e menopausa: por onde começar",
    excerpt:
      "Uma introdução editorial, em linguagem acessível, para organizar as principais dúvidas dessa fase.",
    readingTime: "5 min",
    status: "rascunho-editorial",
  },
  {
    slug: "autoestima-na-maturidade",
    category: "Autoestima",
    title: "Autoestima na maturidade: reconhecer mudanças sem perder a própria voz",
    excerpt:
      "Uma conversa sobre identidade, comparação e novos significados para o cuidado de si.",
    readingTime: "6 min",
    status: "rascunho-editorial",
  },
  {
    slug: "como-falar-sobre-menopausa",
    category: "Relacionamentos",
    title: "Como abrir uma conversa sobre menopausa com quem está por perto",
    excerpt:
      "Perguntas e pontos de partida para conversar com família, amizades e pessoas de confiança.",
    readingTime: "4 min",
    status: "rascunho-editorial",
  },
];

export const articleBodies: Record<string, { intro: string; sections: { title: string; text: string }[] }> = {
  "climaterio-e-menopausa-entenda-a-diferenca": {
    intro:
      "Compreender os termos é um primeiro passo para buscar informação de qualidade e conversar com profissionais de saúde de forma mais segura.",
    sections: [
      {
        title: "Um processo, não uma identidade",
        text:
          "A experiência da maturidade é ampla e não deve ser reduzida a sintomas ou a uma única narrativa. Cada mulher atravessa essa fase de maneira particular.",
      },
      {
        title: "Organize suas dúvidas",
        text:
          "Registrar mudanças percebidas e perguntas pode ajudar na conversa com um profissional qualificado. Este conteúdo não oferece diagnóstico nem indicação de tratamento.",
      },
      {
        title: "Procure fontes responsáveis",
        text:
          "Dê preferência a conteúdos revisados, com especialistas identificados e referências transparentes. Decisões individuais de saúde devem ser tomadas com acompanhamento profissional.",
      },
    ],
  },
  "autoestima-na-maturidade": {
    intro:
      "Autoestima não é uma obrigação de se sentir bem o tempo todo. É também aprender a reconhecer limites, necessidades e possibilidades com respeito.",
    sections: [
      {
        title: "Menos comparação, mais presença",
        text:
          "Padrões irreais podem transformar mudanças naturais em motivos de inadequação. Uma comunicação saudável evita promessas de juventude eterna e valoriza histórias reais.",
      },
      {
        title: "Cuidado que cabe na vida",
        text:
          "Autocuidado pode envolver descanso, vínculos, movimento, lazer e acompanhamento profissional quando necessário — sem fórmulas universais.",
      },
      {
        title: "A própria voz importa",
        text:
          "A maturidade pode abrir espaço para rever prioridades, nomear desejos e fazer escolhas mais coerentes com quem você é hoje.",
      },
    ],
  },
  "como-falar-sobre-menopausa": {
    intro:
      "Conversas honestas podem diminuir o isolamento e criar redes de apoio, desde que respeitem privacidade, limites e experiências individuais.",
    sections: [
      {
        title: "Comece pelo que você precisa",
        text:
          "Em vez de explicar tudo, diga qual tipo de apoio seria útil: escuta, companhia, flexibilidade ou ajuda para organizar uma consulta.",
      },
      {
        title: "Evite generalizações",
        text:
          "Nem todas as mulheres vivem as mesmas mudanças. Escutar sem corrigir ou minimizar costuma ser mais acolhedor do que oferecer soluções rápidas.",
      },
      {
        title: "Quando buscar ajuda",
        text:
          "Questões de saúde devem ser avaliadas por profissionais qualificados. Conteúdo online pode informar, mas não substitui cuidado individual.",
      },
    ],
  },
};

export const suggestedTalks = [
  "Menopausa sem tabus",
  "A força da mulher depois dos 50",
  "Longevidade com protagonismo",
  "Etarismo e representação feminina",
  "Autoestima e identidade na maturidade",
  "Como empresas podem acolher mulheres no climatério",
] as const;

export const contactReasons = [
  "Contratação de palestra",
  "Imprensa",
  "Parceria comercial",
  "Podcast",
  "Evento",
  "Dúvida geral",
] as const;

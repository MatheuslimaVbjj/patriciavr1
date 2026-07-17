export const siteConfig = {
  name: "Patrícia Garboni",
  projectName: "Cinquentei e Agora",
  description:
    "Informação, acolhimento e protagonismo para mulheres viverem a menopausa e a vida depois dos 50 com mais conhecimento, autoestima e liberdade.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://example.com",
  locale: "pt_BR",
  language: "pt-BR",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "[CONTATO A CONFIRMAR]",
  social: {
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "#",
    youtube: process.env.NEXT_PUBLIC_YOUTUBE_URL || "#",
    spotify: process.env.NEXT_PUBLIC_SPOTIFY_URL || "#",
  },
} as const;

export const mainNavigation = [
  { href: "/sobre", label: "Sobre" },
  { href: "/menopausa", label: "Menopausa" },
  { href: "/conteudos", label: "Conteúdos" },
  { href: "/podcast", label: "Podcast" },
  { href: "/palestras", label: "Palestras" },
  { href: "/contato", label: "Contato" },
] as const;

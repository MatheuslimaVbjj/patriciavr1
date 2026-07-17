export const siteConfig = {
  name: "Patrícia Garboni",
  projectName: "Cinquentei e Agora",
  description:
    "Menopausa sem tabus, saúde, autoestima e longevidade depois dos 50. Informação acolhedora para viver essa fase com mais leveza e protagonismo.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://example.com",
  portraitUrl:
    "https://assets.medicare.pt/f_auto%2Cq_auto%2Cw_900%2Ch_900%2Cc_fill%2Cg_face/mastercare/authors/patricia-garboni.webp",
  hotmartUrl:
    process.env.NEXT_PUBLIC_HOTMART_URL ||
    "https://pay.hotmart.com/CINQUENTEI-DEMO",
  locale: "pt_BR",
  language: "pt-BR",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "[CONTATO A CONFIRMAR]",
  social: {
    instagram:
      process.env.NEXT_PUBLIC_INSTAGRAM_URL ||
      "https://www.instagram.com/patriciagarboni/",
    youtube: process.env.NEXT_PUBLIC_YOUTUBE_URL || "#",
    spotify: process.env.NEXT_PUBLIC_SPOTIFY_URL || "#",
  },
} as const;

export const mainNavigation = [
  { href: "/#ebook", label: "O eBook" },
  { href: "/#sobre", label: "Patrícia" },
  { href: "/conteudos", label: "Conteúdos" },
  { href: "/podcast", label: "Podcast" },
  { href: "/palestras", label: "Palestras" },
] as const;

export const siteConfig = {
  name: "Patrícia Garboni",
  projectName: "Cinquentei e Agora",
  description: "Menopausa sem tabus, autoestima, longevidade e novos começos depois dos 50. Um espaço de conversa, informação e protagonismo feminino.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://patriciavr1.vercel.app",
  portraitUrl: "/images/patricia-garboni-portrait.jpg",
  hotmartUrl: process.env.NEXT_PUBLIC_HOTMART_URL || "https://pay.hotmart.com/CINQUENTEI-DEMO",
  locale: "pt_BR",
  language: "pt-BR",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "[CONTATO A CONFIRMAR]",
  social: {
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://www.instagram.com/patriciagarboni/",
    youtube: process.env.NEXT_PUBLIC_YOUTUBE_URL || "#",
    spotify: process.env.NEXT_PUBLIC_SPOTIFY_URL || "#",
  },
} as const;

export const mainNavigation = [
  { href: "/#assuntos", label: "Assuntos" },
  { href: "/#podcast", label: "Podcast" },
  { href: "/#ebook", label: "eBook" },
  { href: "/#historias", label: "Histórias" },
  { href: "/#sobre", label: "Patrícia" },
  { href: "/#marcas", label: "Marcas e eventos" },
] as const;

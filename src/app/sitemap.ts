import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { contentItems } from "@/content/site-content";
const routes = ["", "/sobre", "/menopausa", "/conteudos", "/podcast", "/palestras", "/projetos", "/imprensa", "/newsletter", "/contato", "/privacidade", "/cookies", "/termos", "/politica-editorial"];
export default function sitemap(): MetadataRoute.Sitemap { const now = new Date(); return [...routes.map((path) => ({ url: `${siteConfig.url}${path}`, lastModified: now, changeFrequency: path === "/conteudos" ? "weekly" as const : "monthly" as const, priority: path === "" ? 1 : 0.7 })), ...contentItems.map((item) => ({ url: `${siteConfig.url}/conteudos/${item.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.65 }))]; }

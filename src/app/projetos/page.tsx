import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({ title: "Projetos e eventos", description: "Estrutura preparada para workshops, cursos, eventos, comunidade e projetos especiais.", path: "/projetos" });

export default function ProjectsPage() {
  const items = ["Workshops", "Cursos e programas", "Encontros e eventos", "Comunidade", "Produtos digitais", "Projetos com especialistas", "Projetos patrocinados"];
  return <section className="py-16 sm:py-24"><Container><p className="eyebrow">Projetos</p><h1 className="mt-4 max-w-5xl text-balance font-serif text-5xl leading-tight sm:text-6xl">Uma arquitetura pronta para novas experiências.</h1><p className="mt-7 max-w-3xl text-lg leading-8 text-muted">Nenhuma oferta abaixo deve ser tratada como ativa até confirmação. A estrutura existe para facilitar expansão futura sem reconstruir o site.</p><div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{items.map((item) => <article key={item} className="rounded-[2rem] border border-dashed border-ink/20 bg-paper/60 p-7"><h2 className="font-serif text-2xl">{item}</h2><p className="mt-4 leading-7 text-muted">Status, proposta, datas e condições: [INFORMAÇÃO A CONFIRMAR].</p></article>)}</div></Container></section>;
}

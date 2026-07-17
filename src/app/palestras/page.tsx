import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button-link";
import { suggestedTalks } from "@/content/site-content";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({ title: "Palestras", description: "Palestras sobre menopausa, longevidade, autoestima, etarismo e protagonismo feminino.", path: "/palestras" });

export default function TalksPage() {
  return (
    <>
      <section className="py-16 sm:py-24"><Container><p className="eyebrow">Palestras e eventos</p><h1 className="mt-4 max-w-5xl text-balance font-serif text-5xl leading-tight sm:text-6xl">Conversas relevantes para empresas, eventos e comunidades.</h1><p className="mt-7 max-w-3xl text-lg leading-8 text-muted">A página comercial está preparada, mas temas, formatos, duração, valores e agenda só devem ser apresentados como oficiais após confirmação de Patrícia.</p><div className="mt-9"><ButtonLink href="/contato">Solicitar informações</ButtonLink></div></Container></section>
      <section className="pb-20 sm:pb-28"><Container>
        <h2 className="font-serif text-4xl">Temas sugeridos — a confirmar</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{suggestedTalks.map((talk) => <article key={talk} className="rounded-[1.7rem] border border-ink/10 bg-paper p-6"><h3 className="font-serif text-2xl">{talk}</h3><p className="mt-3 text-sm leading-6 text-muted">Disponibilidade oficial, conteúdo, formato e duração: [INFORMAÇÃO A CONFIRMAR].</p></article>)}</div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">{["Público recomendado", "Formatos", "Provas de autoridade"].map((title) => <div key={title} className="rounded-3xl bg-sand/60 p-7"><h3 className="font-serif text-2xl">{title}</h3><p className="mt-3 leading-7 text-muted">[INFORMAÇÃO A CONFIRMAR]</p></div>)}</div>
      </Container></section>
    </>
  );
}

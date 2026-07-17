import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { ContentCard } from "@/components/content/content-card";
import { contentItems } from "@/content/site-content";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Conteúdos",
  description: "Artigos, entrevistas, guias e conversas sobre menopausa, autoestima, longevidade e vida depois dos 50.",
  path: "/conteudos",
});

export default function ContentLibraryPage() {
  return (
    <section className="py-16 sm:py-24"><Container>
      <p className="eyebrow">Biblioteca de conteúdos</p>
      <h1 className="mt-4 max-w-5xl text-balance font-serif text-5xl leading-tight sm:text-6xl">Informação acessível para diferentes momentos da jornada.</h1>
      <p className="mt-7 max-w-3xl text-lg leading-8 text-muted">A primeira versão utiliza arquivos estruturados. Filtros por formato, tema e nível poderão ser ampliados quando o acervo crescer ou o Sanity for integrado.</p>
      <div className="mt-12 flex flex-wrap gap-2" aria-label="Categorias previstas">
        {["Comece por aqui", "Menopausa", "Autoestima", "Longevidade", "Histórias reais", "Especialistas"].map((item) => <span key={item} className="rounded-full border border-ink/10 bg-paper px-4 py-2 text-sm text-muted">{item}</span>)}
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-3">{contentItems.map((item) => <ContentCard key={item.slug} item={item} />)}</div>
    </Container></section>
  );
}

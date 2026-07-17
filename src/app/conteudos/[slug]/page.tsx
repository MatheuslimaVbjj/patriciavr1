import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { articleBodies, contentItems } from "@/content/site-content";
import { createMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return contentItems.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = contentItems.find((entry) => entry.slug === slug);
  if (!item) return {};
  return createMetadata({ title: item.title, description: item.excerpt, path: `/conteudos/${slug}` });
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = contentItems.find((entry) => entry.slug === slug);
  const body = articleBodies[slug];
  if (!item || !body) notFound();

  return (
    <article className="py-16 sm:py-24"><Container className="max-w-4xl">
      <Link href="/conteudos" className="text-sm font-semibold text-brand underline underline-offset-4">← Voltar aos conteúdos</Link>
      <p className="eyebrow mt-10">{item.category} • {item.readingTime}</p>
      <h1 className="mt-4 text-balance font-serif text-4xl leading-tight sm:text-6xl">{item.title}</h1>
      <p className="mt-7 text-xl leading-9 text-muted">{body.intro}</p>
      <div className="mt-9 rounded-3xl border border-amber-700/20 bg-amber-50 p-5 text-sm leading-6 text-amber-950">
        Rascunho editorial. Revisão técnica, referências e especialista responsável: [INFORMAÇÃO A CONFIRMAR].
      </div>
      <div className="prose-article mt-10">
        {body.sections.map((section) => <section key={section.title}><h2>{section.title}</h2><p>{section.text}</p></section>)}
      </div>
      <div className="mt-12 rounded-3xl bg-sand/70 p-6 sm:p-8">
        <p className="font-serif text-2xl">Conteúdo informativo</p>
        <p className="mt-3 leading-7 text-muted">Este material não substitui atendimento individual. Para dúvidas sobre sua saúde, procure um profissional qualificado.</p>
      </div>
    </Container></article>
  );
}

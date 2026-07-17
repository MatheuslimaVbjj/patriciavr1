import Link from "next/link";
import type { ContentItem } from "@/content/site-content";

export function ContentCard({ item }: { item: ContentItem }) {
  return (
    <article className="group flex h-full flex-col rounded-[2rem] border border-ink/10 bg-white p-6 shadow-[0_18px_60px_rgba(57,44,39,0.06)] transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(57,44,39,0.1)] sm:p-7">
      <div className="flex items-center justify-between gap-4 text-xs font-bold uppercase tracking-[0.15em] text-brand">
        <span>{item.category}</span>
        <span className="text-muted">{item.readingTime}</span>
      </div>
      <h3 className="mt-5 font-serif text-2xl leading-snug text-ink group-hover:text-brand">{item.title}</h3>
      <p className="mt-4 flex-1 leading-7 text-muted">{item.excerpt}</p>
      <Link
        href={`/conteudos/${item.slug}`}
        className="mt-6 inline-flex min-h-11 items-center font-semibold text-brand underline decoration-brand/25 underline-offset-4 hover:decoration-brand"
      >
        Ler conteúdo
      </Link>
    </article>
  );
}

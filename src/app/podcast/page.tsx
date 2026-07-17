import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button-link";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({ title: "Podcast Cinquentei e Agora", description: "Conversas sobre a vida feminina depois dos 50.", path: "/podcast" });

export default function PodcastPage() {
  return (
    <>
      <section className="bg-ink py-16 text-white sm:py-24"><Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div><p className="text-xs font-bold uppercase tracking-[0.2em] text-clay">Podcast</p><h1 className="mt-4 font-serif text-6xl leading-none sm:text-7xl">Cinquentei<br />e Agora</h1><p className="mt-7 max-w-xl text-lg leading-8 text-white/70">Conversas sobre a vida feminina depois dos 50. Relação jurídica e de marca com Patrícia Garboni: [INFORMAÇÃO A CONFIRMAR].</p></div>
        <div className="aspect-square rounded-[3rem] bg-[radial-gradient(circle_at_25%_25%,#d7a88d,transparent_35%),linear-gradient(145deg,#8a4f42,#2d2927)] p-8"><div className="flex h-full items-end rounded-[2.4rem] border border-white/20 p-7"><p className="text-white/75">[CAPA OFICIAL DO PODCAST A CONFIRMAR]</p></div></div>
      </Container></section>
      <section className="py-20 sm:py-28"><Container>
        <div className="grid gap-8 lg:grid-cols-3">
          {["Episódios recentes", "Convidadas", "Temas e plataformas"].map((title) => <article key={title} className="rounded-[2rem] border border-ink/10 bg-paper p-7"><h2 className="font-serif text-3xl">{title}</h2><p className="mt-4 leading-7 text-muted">[INFORMAÇÃO A CONFIRMAR]</p></article>)}
        </div>
        <div className="mt-12 flex flex-wrap gap-3"><ButtonLink href="/contato">Sugerir tema ou convidada</ButtonLink><ButtonLink href="/contato" variant="secondary">Propor patrocínio ou parceria</ButtonLink></div>
      </Container></section>
    </>
  );
}

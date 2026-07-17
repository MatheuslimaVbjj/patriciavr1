import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button-link";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({ title: "Imprensa e parcerias", description: "Informações institucionais, temas, materiais e contato para imprensa e parcerias.", path: "/imprensa" });

export default function PressPage() {
  return <section className="py-16 sm:py-24"><Container><p className="eyebrow">Imprensa e parcerias</p><h1 className="mt-4 max-w-5xl text-balance font-serif text-5xl leading-tight sm:text-6xl">Materiais e informações para entrevistas, eventos e projetos de marca.</h1><div className="mt-12 grid gap-6 lg:grid-cols-2">{[["Biografia curta e completa", "[INFORMAÇÃO A CONFIRMAR]"],["Temas para entrevistas", "Menopausa, vida depois dos 50, autoestima, longevidade, etarismo e protagonismo feminino — confirmar escopo."],["Fotografias oficiais", "[ARQUIVOS A CONFIRMAR]"],["Audiência, veículos e parceiros", "[DADOS CONFIRMADOS A INSERIR — não inventar métricas ou marcas.]"],["Kit de mídia", "[DOCUMENTO A PRODUZIR APÓS VALIDAÇÃO DOS DADOS]"],["Contato comercial e imprensa", "[CONTATOS A CONFIRMAR]"]].map(([title,text]) => <article key={title} className="rounded-[2rem] border border-ink/10 bg-paper p-7"><h2 className="font-serif text-3xl">{title}</h2><p className="mt-4 leading-7 text-muted">{text}</p></article>)}</div><div className="mt-10"><ButtonLink href="/contato">Falar sobre imprensa ou parceria</ButtonLink></div></Container></section>;
}

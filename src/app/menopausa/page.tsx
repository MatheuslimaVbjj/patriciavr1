import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button-link";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Menopausa sem tabus",
  description: "Conteúdo educacional sobre climatério, menopausa, autoestima, bem-estar e longevidade.",
  path: "/menopausa",
});

const categories = ["O que é climatério", "O que é menopausa", "Mudanças mais comuns", "Saúde física", "Saúde emocional", "Sono", "Alimentação", "Movimento", "Autoestima", "Sexualidade e relacionamentos", "Longevidade", "Perguntas frequentes"];

export default function MenopausePage() {
  return (
    <>
      <section className="py-16 sm:py-24"><Container>
        <p className="eyebrow">Menopausa</p>
        <h1 className="mt-4 max-w-5xl text-balance font-serif text-5xl leading-tight sm:text-6xl">Informação para compreender a fase — sem medo, promessas ou fórmulas universais.</h1>
        <p className="mt-7 max-w-3xl text-lg leading-8 text-muted">Esta área organiza conteúdos introdutórios e conversas revisadas por especialistas. Todo material de saúde deve passar por revisão profissional antes da publicação.</p>
      </Container></section>

      <section className="pb-20 sm:pb-28"><Container>
        <div className="rounded-3xl border border-brand/20 bg-brand/7 p-6 sm:p-8">
          <p className="font-semibold text-ink">Aviso importante</p>
          <p className="mt-2 leading-7 text-muted">Os conteúdos possuem finalidade informativa e educacional. Não substituem consulta, diagnóstico ou tratamento realizado por profissionais de saúde qualificados.</p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <article key={category} className="rounded-[1.7rem] border border-ink/10 bg-paper p-6">
              <span className="text-xs font-bold tracking-[0.18em] text-brand">{String(index + 1).padStart(2, "0")}</span>
              <h2 className="mt-4 font-serif text-2xl">{category}</h2>
              <p className="mt-3 text-sm leading-6 text-muted">Conteúdo editorial e especialista responsável: [INFORMAÇÃO A CONFIRMAR].</p>
            </article>
          ))}
        </div>
        <div className="mt-12"><ButtonLink href="/conteudos">Acessar conteúdos introdutórios</ButtonLink></div>
      </Container></section>
    </>
  );
}

import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button-link";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Sobre Patrícia",
  description: "Conheça o posicionamento, a missão e a trajetória de Patrícia Garboni.",
  path: "/sobre",
});

export default function AboutPage() {
  return (
    <>
      <section className="py-16 sm:py-24"><Container>
        <p className="eyebrow">Sobre Patrícia</p>
        <h1 className="mt-4 max-w-5xl text-balance font-serif text-5xl leading-tight sm:text-6xl">Uma comunicadora dedicada a ampliar a voz e a representação da mulher madura.</h1>
        <p className="mt-7 max-w-3xl text-lg leading-8 text-muted">Esta página foi estruturada sem inventar formações, números, premiações ou participações. Os dados institucionais abaixo precisam ser validados com Patrícia.</p>
      </Container></section>

      <section className="pb-20 sm:pb-28"><Container className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="min-h-[560px] rounded-[2.5rem] bg-[linear-gradient(160deg,#d7a88d,#8a4f42_65%,#2d2927)] p-8 text-white">
          <div className="flex h-full flex-col justify-between rounded-[2rem] border border-white/25 p-7">
            <p className="text-xs font-bold uppercase tracking-[0.2em]">Retrato institucional</p>
            <p className="max-w-xs leading-7 text-white/75">[FOTOGRAFIA PROFISSIONAL A CONFIRMAR]</p>
          </div>
        </div>
        <div className="space-y-10">
          {[
            ["História e trajetória", "[INFORMAÇÃO A CONFIRMAR: história pessoal, trajetória profissional, origem do projeto e experiências relevantes.]"],
            ["Relação com o tema", "[INFORMAÇÃO A CONFIRMAR: como as conversas sobre menopausa, maturidade e protagonismo entraram em sua vida e trabalho.]"],
            ["Missão", "Criar espaços de informação, acolhimento e representação para que mulheres atravessem a maturidade com mais conhecimento, autonomia e liberdade."],
            ["Valores", "Respeito à experiência individual, informação responsável, escuta, diversidade, transparência, autonomia e combate ao etarismo."],
            ["Formação e experiências", "[INFORMAÇÃO A CONFIRMAR: formação, cursos, projetos, palestras, eventos, entrevistas, veículos e reconhecimentos.]"],
          ].map(([title, text]) => (
            <article key={title} className="border-b border-ink/10 pb-8">
              <h2 className="font-serif text-3xl">{title}</h2><p className="mt-4 leading-8 text-muted">{text}</p>
            </article>
          ))}
          <ButtonLink href="/contato">Entre em contato</ButtonLink>
        </div>
      </Container></section>
    </>
  );
}

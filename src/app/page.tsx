import Image from "next/image";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { EbookCover } from "@/components/ebook-cover";
import { siteConfig } from "@/config/site";

const benefits = [
  ["Entender as mudanças", "Climatério e menopausa explicados de forma clara e acolhedora."],
  ["Cuidar de si", "Sono, movimento, bem-estar e hábitos para observar com mais consciência."],
  ["Fortalecer a autoestima", "Imagem, cabelo, corpo e identidade sem padrões impossíveis de juventude."],
  ["Viver com protagonismo", "Escolhas, relações e novos projetos para a vida depois dos 50."],
];

const chapters = [
  "Entender o que está mudando",
  "Corpo, energia e bem-estar",
  "Autoestima e identidade",
  "Memória, emoções e presença",
  "Relacionamentos e sexualidade",
  "Longevidade com protagonismo",
];

export default function HomePage() {
  return (
    <>
      <section className="hero-pink overflow-hidden border-b border-brand/10">
        <Container className="grid min-h-[760px] items-center gap-12 py-16 lg:grid-cols-[1.05fr_.95fr] lg:py-24">
          <div>
            <p className="eyebrow">Menopausa 50+ • autoestima • longevidade</p>
            <h1 className="mt-5 max-w-4xl text-balance font-serif text-5xl leading-[1.02] tracking-[-.04em] sm:text-6xl lg:text-7xl">Cinquentei. E agora começa uma nova fase.</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-muted sm:text-xl">Um guia acolhedor para viver a menopausa com mais informação, confiança, leveza e protagonismo.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink href={siteConfig.hotmartUrl}>Quero conhecer o eBook</ButtonLink>
              <ButtonLink href="#ebook" variant="secondary">Ver o que vou aprender</ButtonLink>
            </div>
            <p className="mt-6 text-sm text-muted">Por Patrícia Garboni • Criadora de conteúdo sobre menopausa e vida depois dos 50</p>
          </div>
          <div className="grid items-end gap-5 sm:grid-cols-[1fr_.72fr]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border-[8px] border-white shadow-[0_30px_75px_rgba(89,12,47,.2)]">
              <Image src={siteConfig.portraitUrl} alt="Patrícia Garboni sorrindo" fill priority className="object-cover object-top" sizes="(max-width: 1024px) 65vw, 34vw" />
            </div>
            <div className="sm:-ml-12 sm:mb-8"><EbookCover /></div>
          </div>
        </Container>
      </section>

      <section id="ebook" className="bg-white py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Cinquentei — O eBook</p>
            <h2 className="mt-4 text-balance font-serif text-4xl leading-tight sm:text-6xl">Informação que acolhe. Orientação que devolve confiança.</h2>
            <p className="mt-6 text-lg leading-8 text-muted">Criado para mulheres que querem compreender essa fase sem medo, culpa ou promessas irreais.</p>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map(([title, text], index) => (
              <article key={title} className="rounded-[2rem] border border-brand/10 bg-canvas p-7">
                <span className="flex size-11 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">0{index + 1}</span>
                <h3 className="mt-6 font-serif text-2xl">{title}</h3>
                <p className="mt-4 leading-7 text-muted">{text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-soft-pink py-20 sm:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-[.72fr_1.28fr]">
          <div className="mx-auto w-full max-w-sm"><EbookCover /></div>
          <div>
            <p className="eyebrow">O que você encontrará</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-6xl">Seis conversas essenciais para viver melhor depois dos 50.</h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {chapters.map((chapter, index) => (
                <div key={chapter} className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-brand/10">
                  <p className="text-xs font-extrabold uppercase tracking-[.16em] text-brand">Capítulo {index + 1}</p>
                  <h3 className="mt-3 font-serif text-xl">{chapter}</h3>
                </div>
              ))}
            </div>
            <div className="mt-9"><ButtonLink href={siteConfig.hotmartUrl}>Quero acessar o eBook</ButtonLink></div>
          </div>
        </Container>
      </section>

      <section id="sobre" className="py-20 sm:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-[.9fr_1.1fr]">
          <div className="relative aspect-square overflow-hidden rounded-[2.5rem] border-[9px] border-white shadow-[0_28px_70px_rgba(89,12,47,.18)]">
            <Image src={siteConfig.portraitUrl} alt="Patrícia Garboni" fill className="object-cover object-top" sizes="(max-width: 1024px) 88vw, 40vw" />
          </div>
          <div>
            <p className="eyebrow">Patrícia Garboni | Menopausa 50+</p>
            <h2 className="mt-4 text-balance font-serif text-4xl leading-tight sm:text-6xl">Menopausa sem tabus. Vida depois dos 50 com leveza.</h2>
            <p className="mt-7 text-lg leading-8 text-muted">Criadora de conteúdo, comunicadora e fundadora do projeto Cinquentei e Agora, Patrícia fala sobre saúde, autoestima, longevidade e protagonismo feminino com uma linguagem próxima e humana.</p>
            <p className="mt-5 leading-8 text-muted">Sua comunicação mistura experiências reais, informação, entrevistas e eventos para mostrar que a maturidade também pode ser uma fase de liberdade e novas escolhas.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/sobre">Conheça Patrícia</ButtonLink>
              <ButtonLink href={siteConfig.social.instagram} variant="secondary">Ver Instagram</ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <Container className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-[2.5rem] bg-wine p-8 text-white sm:p-12">
            <p className="text-xs font-extrabold uppercase tracking-[.2em] text-white/65">Cinquentei e Agora</p>
            <h2 className="mt-5 font-serif text-5xl leading-none">Conversas que representam a mulher madura.</h2>
            <p className="mt-7 leading-8 text-white/75">Podcast, entrevistas e encontros sobre menopausa, relações, saúde e escolhas.</p>
            <div className="mt-8"><ButtonLink href="/podcast" variant="secondary">Conheça o podcast</ButtonLink></div>
          </article>
          <article className="rounded-[2.5rem] border border-brand/12 bg-canvas p-8 sm:p-12">
            <p className="eyebrow">Palestras e eventos</p>
            <h2 className="mt-5 font-serif text-4xl leading-tight">Leve essa conversa para sua empresa ou evento.</h2>
            <p className="mt-6 leading-8 text-muted">Temas, formatos, agenda e propostas comerciais serão apresentados conforme confirmação.</p>
            <div className="mt-8"><ButtonLink href="/palestras">Conheça as possibilidades</ButtonLink></div>
          </article>
        </Container>
      </section>

      <section id="comprar" className="cta-pink py-20 text-white sm:py-28">
        <Container className="text-center">
          <p className="text-xs font-extrabold uppercase tracking-[.2em] text-white/70">Cinquentei — O eBook</p>
          <h2 className="mx-auto mt-5 max-w-4xl text-balance font-serif text-4xl leading-tight sm:text-7xl">Depois dos 50, você não precisa voltar a ser quem era.</h2>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/80">Descubra caminhos para viver a menopausa com mais clareza, confiança e protagonismo.</p>
          <div className="mt-9"><ButtonLink href={siteConfig.hotmartUrl} variant="secondary">Quero conhecer o eBook</ButtonLink></div>
          <p className="mt-5 text-xs text-white/60">Checkout provisório. Produto, preço e condições ainda serão confirmados.</p>
        </Container>
      </section>

      <section className="border-b border-ink/8 bg-paper py-8">
        <Container><p className="mx-auto max-w-5xl text-center text-sm leading-7 text-muted">Os conteúdos deste site possuem finalidade informativa e educacional. Eles não substituem consulta, diagnóstico ou tratamento realizado por profissionais de saúde qualificados.</p></Container>
      </section>
    </>
  );
}

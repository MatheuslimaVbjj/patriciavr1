import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";

const interests = [
  ["Menopausa sem tabus", "Mudanças, dúvidas e conversas para atravessar essa fase com mais clareza.", "/menopausa"],
  ["Autoestima e imagem", "Corpo, cabelo, beleza e identidade sem a obrigação de parecer mais jovem.", "/conteudos"],
  ["Saúde e longevidade", "Informação educativa para organizar perguntas e cuidar melhor da rotina.", "/conteudos"],
  ["Relacionamentos", "Desejo, intimidade, família, limites e novas formas de se relacionar.", "/conteudos"],
  ["Novos começos", "Carreira, projetos, liberdade e escolhas para a vida depois dos 50.", "/projetos"],
  ["Histórias reais", "Mulheres que transformaram mudanças em coragem e novas possibilidades.", "/conteudos"],
] as const;

const conversations = [
  ["Menopausa", "O que ninguém contou sobre essa fase", "Uma conversa de abertura para acolher dúvidas, experiências e diferentes caminhos."],
  ["Autoestima", "Quando a imagem muda, quem você escolhe ser?", "Reflexões sobre corpo, cabelo, identidade e liberdade na maturidade."],
  ["Vida real", "Recomeçar não tem idade", "Histórias de mulheres que decidiram criar novos projetos depois dos 50."],
] as const;

export default function HomePage() {
  return (
    <>
      <section className="hero-editorial relative overflow-hidden border-b border-brand/10">
        <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
        <div className="hero-orbit hero-orbit-two" aria-hidden="true" />
        <Container className="relative grid min-h-[700px] items-center gap-10 py-12 sm:py-16 lg:grid-cols-[1.05fr_.95fr] lg:py-20">
          <div className="max-w-3xl">
            <p className="eyebrow">Menopausa sem tabus • autoestima • novos começos</p>
            <h1 className="mt-5 text-balance font-serif text-[2.7rem] leading-[.98] tracking-[-.045em] sm:text-6xl lg:text-[5.3rem]">Cinquentei. E agora começa uma fase que também pode ser sua.</h1>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-muted sm:text-xl">Um espaço de conversa para mulheres que desejam viver a menopausa e a maturidade com mais informação, autoestima, liberdade e protagonismo.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink href={siteConfig.hotmartUrl} external>Conhecer o eBook</ButtonLink>
              <ButtonLink href="#assuntos" variant="secondary">Explorar conversas</ButtonLink>
            </div>
            <p className="mt-5 text-sm leading-6 text-muted">Por Patrícia Garboni • comunicadora e criadora do projeto Cinquentei e Agora</p>
          </div>
          <div className="relative mx-auto w-full max-w-[620px] pb-10">
            <div className="relative ml-auto aspect-[4/5] w-[82%] overflow-hidden rounded-[2.75rem] border-[9px] border-white shadow-[0_35px_90px_rgba(91,23,52,.22)] sm:w-[74%]">
              <Image src={siteConfig.portraitUrl} alt="Patrícia Garboni sorrindo" fill priority className="object-cover object-top" sizes="(max-width:1024px) 78vw,36vw" />
            </div>
            <div className="absolute bottom-0 left-0 max-w-[260px] rounded-[1.6rem] border border-brand/12 bg-white/95 p-5 shadow-[0_22px_55px_rgba(91,23,52,.18)] backdrop-blur">
              <p className="text-xs font-extrabold uppercase tracking-[.16em] text-brand">Manifesto</p>
              <p className="mt-3 font-serif text-xl leading-tight">Você não precisa voltar a ser quem era. Pode escolher quem será agora.</p>
            </div>
          </div>
        </Container>
      </section>

      <section id="assuntos" className="border-b border-ink/8 bg-white py-16 sm:py-20">
        <Container>
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl"><p className="eyebrow">Comece por onde faz sentido</p><h2 className="mt-4 text-balance font-serif text-4xl leading-tight sm:text-5xl">Sobre o que você precisa conversar hoje?</h2></div>
            <p className="max-w-lg leading-7 text-muted">Escolha um tema e encontre conteúdos, entrevistas e reflexões organizados de forma simples.</p>
          </div>
          <div className="interest-rail mt-10 flex snap-x gap-4 overflow-x-auto pb-3 lg:grid lg:grid-cols-3 lg:overflow-visible">
            {interests.map(([title, text, href], index) => (
              <Link key={title} href={href} className="interest-card group min-w-[84%] snap-start rounded-[2rem] border border-brand/10 bg-canvas p-6 transition hover:-translate-y-1 hover:border-brand/35 sm:min-w-[48%] lg:min-w-0">
                <div className="flex items-center justify-between"><span className="flex size-10 items-center justify-center rounded-full bg-soft-pink text-sm font-extrabold text-brand">0{index + 1}</span><span className="text-xl text-brand transition group-hover:translate-x-1">→</span></div>
                <h3 className="mt-6 font-serif text-2xl leading-tight">{title}</h3><p className="mt-4 leading-7 text-muted">{text}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="manifesto-panel py-20 text-white sm:py-28">
        <Container className="grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:items-end">
          <p className="text-xs font-extrabold uppercase tracking-[.22em] text-white/65">Cinquentei e Agora</p>
          <div><h2 className="text-balance font-serif text-4xl leading-[1.02] sm:text-6xl">A mulher não desaparece depois dos 50. Ela ganha repertório, voz e novas escolhas.</h2><p className="mt-7 max-w-2xl text-lg leading-8 text-white/75">O projeto retira a menopausa do silêncio e amplia a conversa para autoestima, relações, trabalho, sonhos e identidade.</p></div>
        </Container>
      </section>

      <section id="podcast" className="py-20 sm:py-28">
        <Container className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div className="rounded-[2.5rem] bg-wine p-8 text-white shadow-[0_28px_70px_rgba(91,23,52,.2)] sm:p-12">
            <p className="text-xs font-extrabold uppercase tracking-[.2em] text-white/60">Podcast • entrevistas • encontros</p>
            <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">Conversas que representam a mulher madura.</h2>
            <p className="mt-6 leading-8 text-white/72">Patrícia recebe mulheres e profissionais para falar de experiências reais com proximidade, respeito e informação.</p>
            <div className="mt-8"><ButtonLink href="/podcast" variant="light">Conhecer o podcast</ButtonLink></div>
          </div>
          <div className="grid gap-4">
            {conversations.map(([tag, title, text], index) => (
              <article key={title} className="group grid gap-4 rounded-[2rem] border border-brand/10 bg-white p-6 shadow-sm transition hover:border-brand/30 sm:grid-cols-[auto_1fr_auto] sm:items-center">
                <span className="flex size-12 items-center justify-center rounded-full bg-soft-pink font-serif text-lg text-brand">{index + 1}</span>
                <div><p className="text-xs font-extrabold uppercase tracking-[.15em] text-brand">{tag}</p><h3 className="mt-2 font-serif text-2xl">{title}</h3><p className="mt-2 leading-7 text-muted">{text}</p></div>
                <span className="text-2xl text-brand transition group-hover:translate-x-1">→</span>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="ebook" className="bg-soft-pink py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-[.78fr_1.22fr] lg:items-center">
          <div className="relative mx-auto w-full max-w-sm"><div className="absolute inset-8 rounded-full bg-brand/15 blur-3xl" aria-hidden="true" /><Image src="/images/cinquentei-ebook-cover.webp" alt="Capa provisória do eBook Cinquentei" width={1055} height={1491} className="relative h-auto w-full rotate-[-2deg] rounded-xl shadow-[0_35px_85px_rgba(91,23,52,.28)]" /></div>
          <div><p className="eyebrow">Primeiro produto do ecossistema</p><h2 className="mt-4 text-balance font-serif text-4xl leading-tight sm:text-6xl">Um guia acolhedor para organizar dúvidas e atravessar essa fase com mais clareza.</h2><p className="mt-7 max-w-2xl text-lg leading-8 text-muted">Reflexões sobre menopausa, corpo, autoestima, emoções, relacionamentos e longevidade. Conteúdo educativo, sem substituir orientação profissional.</p><div className="mt-8 grid gap-3 sm:grid-cols-2">{["Linguagem próxima e acessível","Reflexões ligadas à vida real","Perguntas para levar a profissionais","Conteúdo digital pela Hotmart"].map((item)=><div key={item} className="flex gap-3 rounded-2xl bg-white p-4 text-sm font-semibold"><span className="text-brand">✓</span>{item}</div>)}</div><div className="mt-9"><ButtonLink href={siteConfig.hotmartUrl} external>Conhecer o eBook</ButtonLink></div><p className="mt-4 text-xs leading-5 text-muted">Produto, preço, bônus e checkout final ainda precisam de confirmação.</p></div>
        </Container>
      </section>

      <section id="historias" className="bg-white py-20 sm:py-28">
        <Container><div className="mx-auto max-w-3xl text-center"><p className="eyebrow">Conteúdo, participação e pertencimento</p><h2 className="mt-4 text-balance font-serif text-4xl leading-tight sm:text-6xl">O site deixa de ser apenas uma vitrine e começa a construir comunidade.</h2></div><div className="mt-12 grid gap-5 lg:grid-cols-3">{[["Histórias de quem cinquentou","Mulheres reais, mudanças reais e novos começos."],["Conversas com especialistas","Patrícia conduz a conversa e aproxima informação qualificada da vida cotidiana."],["Encontros e comunidade","Rodas de conversa e experiências para transformar audiência em pertencimento."]].map(([title,text])=><article key={title} className="rounded-[2.25rem] border border-brand/10 bg-canvas p-7"><p className="text-xs font-extrabold uppercase tracking-[.16em] text-brand">Em preparação</p><h3 className="mt-5 font-serif text-3xl leading-tight">{title}</h3><p className="mt-5 leading-7 text-muted">{text}</p></article>)}</div></Container>
      </section>

      <section id="sobre" className="py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-[.88fr_1.12fr] lg:items-center">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.75rem] border-[9px] border-white shadow-[0_28px_70px_rgba(91,23,52,.18)]"><Image src={siteConfig.portraitUrl} alt="Patrícia Garboni" fill className="object-cover object-top" sizes="(max-width:1024px) 90vw,40vw" /></div>
          <div><p className="eyebrow">Patrícia Garboni • comunicadora 50+</p><h2 className="mt-4 text-balance font-serif text-4xl leading-tight sm:text-6xl">Ela não fala de cima. Fala de dentro da experiência.</h2><p className="mt-7 text-lg leading-8 text-muted">Patrícia cria conteúdo sobre menopausa, autoestima, saúde, longevidade e vida depois dos 50 com uma linguagem próxima e humana.</p><p className="mt-5 leading-8 text-muted">Seu papel é abrir conversas, compartilhar experiências e aproximar o público de histórias e profissionais qualificados — sem se apresentar como médica.</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><ButtonLink href="/sobre">Conhecer Patrícia</ButtonLink><ButtonLink href={siteConfig.social.instagram} variant="secondary" external>Ver Instagram</ButtonLink></div></div>
        </Container>
      </section>

      <section id="marcas" className="border-y border-ink/8 bg-white py-20 sm:py-24">
        <Container className="grid gap-8 lg:grid-cols-[1.15fr_.85fr] lg:items-center"><div><p className="eyebrow">Palestras, eventos e projetos com marcas</p><h2 className="mt-4 text-balance font-serif text-4xl leading-tight sm:text-5xl">Leve essa conversa para empresas, eventos e comunidades.</h2><p className="mt-6 max-w-2xl leading-8 text-muted">Palestras, mediação de conversas, campanhas, conteúdo patrocinado identificado e projetos especiais. Formatos, agenda e valores permanecem a confirmar.</p></div><div className="rounded-[2rem] bg-canvas p-7 ring-1 ring-brand/10"><p className="font-semibold">Possibilidades iniciais</p><ul className="mt-5 space-y-3 text-sm leading-6 text-muted"><li>• Palestras e rodas de conversa</li><li>• Mediação de entrevistas e eventos</li><li>• Projetos editoriais com marcas</li><li>• Campanhas de conscientização</li></ul><div className="mt-7"><ButtonLink href="/palestras">Conhecer possibilidades</ButtonLink></div></div></Container>
      </section>

      <section className="newsletter-editorial py-20 text-white sm:py-24"><Container className="grid gap-8 lg:grid-cols-[1.1fr_.9fr] lg:items-center"><div><p className="text-xs font-extrabold uppercase tracking-[.2em] text-white/60">A Carta de Quem Cinquentou</p><h2 className="mt-4 text-balance font-serif text-4xl leading-tight sm:text-6xl">Uma conversa mais íntima, direto no seu e-mail.</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">Reflexões, conteúdos, episódios e novidades do projeto. Frequência e formato serão confirmados antes do lançamento.</p></div><div className="rounded-[2rem] border border-white/12 bg-white/8 p-6 backdrop-blur sm:p-8"><ButtonLink href="/newsletter" variant="light">Assinar a newsletter</ButtonLink><p className="mt-4 text-xs leading-5 text-white/55">Sem promessas de frequência até a definição do calendário editorial.</p></div></Container></section>

      <section className="border-b border-ink/8 bg-paper py-8"><Container><p className="mx-auto max-w-5xl text-center text-sm leading-7 text-muted">Os conteúdos deste site possuem finalidade informativa e educacional. Eles não substituem consulta, diagnóstico ou tratamento realizado por profissionais de saúde qualificados.</p></Container></section>
    </>
  );
}

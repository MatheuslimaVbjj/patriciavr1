import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ContentCard } from "@/components/content/content-card";
import { NewsletterSection } from "@/components/sections/newsletter-section";
import { contentItems, themes } from "@/content/site-content";
import { siteConfig } from "@/config/site";

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    jobTitle: "Comunicadora e palestrante",
    sameAs: Object.values(siteConfig.social).filter((url) => url !== "#"),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />

      <section className="relative overflow-hidden border-b border-ink/8">
        <div className="absolute -right-36 -top-36 size-[34rem] rounded-full bg-clay/30 blur-3xl" aria-hidden="true" />
        <div className="absolute -bottom-60 left-1/3 size-[32rem] rounded-full bg-sage/25 blur-3xl" aria-hidden="true" />
        <Container className="relative grid min-h-[760px] items-center gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
          <div className="max-w-3xl">
            <p className="eyebrow">Menopausa • longevidade • protagonismo</p>
            <h1 className="mt-5 text-balance font-serif text-5xl leading-[1.02] tracking-[-0.03em] text-ink sm:text-6xl lg:text-7xl">
              Menopausa sem tabus. Vida depois dos 50 com mais saúde, autoestima e protagonismo.
            </h1>
            <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-muted sm:text-xl">
              Informação acessível, experiências reais e conversas com especialistas para viver essa fase com mais conhecimento, confiança e leveza.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink href="/menopausa">Comece por aqui</ButtonLink>
              <ButtonLink href="/podcast" variant="secondary">Ouça o podcast</ButtonLink>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg" aria-label="Área reservada para fotografia profissional de Patrícia Garboni">
            <div className="aspect-[4/5] overflow-hidden rounded-[3rem] border border-white/70 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.85),transparent_28%),linear-gradient(145deg,#d8b5a0,#8a4f42_60%,#3b302d)] p-6 shadow-[0_35px_90px_rgba(70,45,37,0.2)]">
              <div className="flex h-full flex-col justify-between rounded-[2.3rem] border border-white/25 bg-white/8 p-7 text-white backdrop-blur-sm">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/75">Fotografia principal</p>
                <div>
                  <p className="font-serif text-4xl">Patrícia Garboni</p>
                  <p className="mt-3 max-w-sm leading-7 text-white/75">[FOTOGRAFIA PROFISSIONAL A CONFIRMAR]</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-7 -left-5 max-w-xs rounded-3xl border border-ink/10 bg-white p-5 shadow-xl sm:-left-12">
              <p className="text-sm font-bold text-brand">Cinquentei e Agora</p>
              <p className="mt-2 text-sm leading-6 text-muted">Conversas sobre a vida feminina depois dos 50.</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Um espaço para você"
            title="Informação que acolhe. Conversas que representam."
            description="O site foi pensado para organizar conteúdos, experiências e encontros sem reduzir a mulher madura a uma fase ou a um diagnóstico."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {themes.map((theme, index) => (
              <article key={theme.title} className="rounded-[2rem] border border-ink/10 bg-paper p-6">
                <span className="flex size-10 items-center justify-center rounded-full bg-sand text-sm font-bold text-brand">0{index + 1}</span>
                <h3 className="mt-6 font-serif text-2xl text-ink">{theme.title}</h3>
                <p className="mt-4 leading-7 text-muted">{theme.description}</p>
                <div className="mt-5"><ButtonLink href={theme.href} variant="text">Explorar tema</ButtonLink></div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-paper py-20 sm:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="min-h-[480px] rounded-[2.5rem] bg-[linear-gradient(135deg,#a8b4a0,#ede2d4_50%,#d7a88d)] p-7">
              <div className="flex h-full min-h-[426px] items-end rounded-[2rem] border border-white/55 bg-white/20 p-7 backdrop-blur-sm">
                <p className="max-w-sm rounded-2xl bg-white/85 p-5 text-sm leading-6 text-muted shadow-lg">[FOTOGRAFIA DE TRAJETÓRIA A CONFIRMAR]</p>
              </div>
            </div>
            <div>
              <p className="eyebrow">Sobre Patrícia</p>
              <h2 className="mt-3 text-balance font-serif text-4xl leading-tight sm:text-5xl">Uma voz para conversas que ainda precisam ganhar espaço.</h2>
              <p className="mt-6 text-lg leading-8 text-muted">
                Patrícia Garboni é apresentada como comunicadora, criadora de conteúdo e palestrante ligada às conversas sobre menopausa, longevidade, autoestima e protagonismo feminino depois dos 50.
              </p>
              <p className="mt-4 leading-7 text-muted">Trajetória, formação, experiências, eventos e participações: [INFORMAÇÃO A CONFIRMAR].</p>
              <div className="mt-8"><ButtonLink href="/sobre">Conheça a trajetória</ButtonLink></div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading eyebrow="Conteúdos" title="Comece por uma conversa que faça sentido para você." />
            <ButtonLink href="/conteudos" variant="secondary">Ver todos os conteúdos</ButtonLink>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {contentItems.map((item) => <ContentCard key={item.slug} item={item} />)}
          </div>
        </Container>
      </section>

      <section className="bg-sand/55 py-20 sm:py-28">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="rounded-[2.5rem] bg-brand p-8 text-white sm:p-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-clay">Podcast</p>
            <p className="mt-5 font-serif text-5xl leading-none">Cinquentei<br />e Agora</p>
            <p className="mt-7 leading-7 text-white/75">Episódios, convidadas, plataformas e identidade visual: [INFORMAÇÃO A CONFIRMAR].</p>
          </div>
          <div>
            <h2 className="text-balance font-serif text-4xl leading-tight sm:text-5xl">Experiências reais e conversas com especialistas.</h2>
            <p className="mt-6 text-lg leading-8 text-muted">
              Uma área preparada para apresentar a proposta do podcast, episódios recentes, temas, convidadas e oportunidades de parceria.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/podcast">Conheça o podcast</ButtonLink>
              <ButtonLink href="/contato" variant="secondary">Sugerir tema ou convidada</ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="rounded-[2.5rem] border border-ink/10 bg-paper p-7 sm:p-12 lg:flex lg:items-center lg:justify-between lg:gap-14">
            <div className="max-w-3xl">
              <p className="eyebrow">Palestras</p>
              <h2 className="mt-3 text-balance font-serif text-4xl leading-tight sm:text-5xl">Leve essa conversa para empresas, eventos e comunidades.</h2>
              <p className="mt-5 text-lg leading-8 text-muted">Temas, formatos, duração, agenda, depoimentos e registros anteriores devem ser confirmados antes da publicação.</p>
            </div>
            <div className="mt-8 shrink-0 lg:mt-0"><ButtonLink href="/palestras">Conheça as possibilidades</ButtonLink></div>
          </div>
        </Container>
      </section>

      <NewsletterSection />
    </>
  );
}

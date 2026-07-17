import { Container } from "@/components/ui/container";
import { NewsletterForm } from "@/components/forms/newsletter-form";

export function NewsletterSection() {
  return (
    <section className="py-16 sm:py-24" aria-labelledby="newsletter-title">
      <Container>
        <div className="overflow-hidden rounded-[2.5rem] bg-ink px-6 py-10 text-white sm:px-10 sm:py-14 lg:grid lg:grid-cols-[0.85fr_1.15fr] lg:gap-14 lg:px-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-clay">Newsletter</p>
            <h2 id="newsletter-title" className="mt-4 text-balance font-serif text-3xl leading-tight sm:text-4xl">
              Uma conversa sobre menopausa, saúde, autoestima e vida depois dos 50.
            </h2>
            <p className="mt-5 leading-7 text-white/70">
              Receba novos conteúdos, episódios e convites. Frequência e material gratuito: [INFORMAÇÃO A CONFIRMAR].
            </p>
          </div>
          <div className="mt-9 rounded-3xl bg-canvas p-5 text-ink sm:p-7 lg:mt-0">
            <NewsletterForm compact />
          </div>
        </div>
      </Container>
    </section>
  );
}

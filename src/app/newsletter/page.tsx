import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { NewsletterForm } from "@/components/forms/newsletter-form";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({ title: "Newsletter", description: "Assine uma conversa sobre menopausa, autoestima, saúde e vida depois dos 50.", path: "/newsletter" });

export default function NewsletterPage() {
  return <section className="py-16 sm:py-24"><Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start"><div><p className="eyebrow">Newsletter</p><h1 className="mt-4 text-balance font-serif text-5xl leading-tight sm:text-6xl">Uma conversa para acompanhar no seu tempo.</h1><p className="mt-7 text-lg leading-8 text-muted">Receba conteúdos, novos episódios e convites. Frequência de envio e material gratuito: [INFORMAÇÃO A CONFIRMAR].</p><ul className="mt-8 space-y-3 text-muted"><li>• Conteúdos selecionados</li><li>• Conversas com especialistas</li><li>• Novidades do podcast e eventos</li><li>• Cancelamento da inscrição a qualquer momento</li></ul></div><div className="rounded-[2.5rem] border border-ink/10 bg-paper p-6 shadow-xl sm:p-10"><NewsletterForm /></div></Container></section>;
}

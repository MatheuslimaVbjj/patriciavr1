import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { ContactForm } from "@/components/forms/contact-form";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({ title: "Contato", description: "Contato para palestras, imprensa, parcerias, podcast, eventos e dúvidas gerais.", path: "/contato" });

export default function ContactPage() {
  return <section className="py-16 sm:py-24"><Container className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start"><div><p className="eyebrow">Contato</p><h1 className="mt-4 text-balance font-serif text-5xl leading-tight sm:text-6xl">Conte qual conversa você quer iniciar.</h1><p className="mt-7 text-lg leading-8 text-muted">Selecione o assunto para direcionar sua mensagem. Prazos de resposta e contatos alternativos: [INFORMAÇÃO A CONFIRMAR].</p><div className="mt-8 rounded-3xl bg-sand/65 p-6"><p className="font-semibold">Não envie dados sensíveis de saúde.</p><p className="mt-2 text-sm leading-6 text-muted">Este canal não oferece atendimento médico, diagnóstico, orientação individual ou suporte de emergência.</p></div></div><div className="rounded-[2.5rem] border border-ink/10 bg-paper p-6 shadow-xl sm:p-10"><ContactForm /></div></Container></section>;
}

import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button-link";
export default function NotFound() { return <section className="py-24 sm:py-36"><Container className="text-center"><p className="eyebrow">Erro 404</p><h1 className="mt-4 font-serif text-5xl sm:text-7xl">Esta página não foi encontrada.</h1><p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted">O endereço pode ter mudado ou o conteúdo ainda não está disponível.</p><div className="mt-9"><ButtonLink href="/">Voltar para o início</ButtonLink></div></Container></section>; }

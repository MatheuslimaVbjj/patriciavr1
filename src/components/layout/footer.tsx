import Link from "next/link";
import { Container } from "@/components/ui/container";
import { mainNavigation, siteConfig } from "@/config/site";

const legalLinks = [
  { href: "/privacidade", label: "Privacidade" },
  { href: "/cookies", label: "Cookies" },
  { href: "/termos", label: "Termos de uso" },
  { href: "/politica-editorial", label: "Política editorial" },
];

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-ink text-white">
      <Container className="py-14 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr_0.8fr]">
          <div className="max-w-xl">
            <p className="font-serif text-3xl">Patrícia Garboni</p>
            <p className="mt-4 max-w-lg leading-7 text-white/70">
              Informação, acolhimento e protagonismo para mulheres viverem a menopausa e a maturidade com mais conhecimento e liberdade.
            </p>
            <p className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-6 text-white/65">
              Os conteúdos possuem finalidade informativa e educacional. Não substituem consulta, diagnóstico ou tratamento realizado por profissionais de saúde qualificados.
            </p>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-clay">Navegação</p>
            <ul className="mt-5 space-y-3">
              {mainNavigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/72 hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-clay">Confiança</p>
            <ul className="mt-5 space-y-3">
              {legalLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/72 hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-7 text-sm text-white/55">Contato: {siteConfig.email}</p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-7 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Patrícia Garboni. Todos os direitos reservados.</p>
          <p>Conteúdo e informações institucionais sujeitos à confirmação.</p>
        </div>
      </Container>
    </footer>
  );
}

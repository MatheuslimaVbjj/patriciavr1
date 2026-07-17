import Link from "next/link";
import { Container } from "@/components/ui/container";
import { mainNavigation, siteConfig } from "@/config/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink/8 bg-canvas/92 backdrop-blur-xl">
      <Container className="flex min-h-20 items-center justify-between gap-5">
        <Link href="/" className="group leading-none" aria-label={`${siteConfig.name} — página inicial`}>
          <span className="block font-serif text-xl text-ink transition group-hover:text-brand sm:text-2xl">
            Patrícia Garboni
          </span>
          <span className="mt-1 block text-[0.65rem] font-bold uppercase tracking-[0.2em] text-brand">
            Cinquentei e Agora
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Navegação principal">
          {mainNavigation.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-muted transition hover:text-brand">
              {item.label}
            </Link>
          ))}
          <Link
            href="/newsletter"
            className="rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-strong focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
          >
            Assine a newsletter
          </Link>
        </nav>

        <details className="relative lg:hidden">
          <summary className="cursor-pointer list-none rounded-full border border-ink/15 bg-white px-4 py-2 text-sm font-semibold text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand">
            Menu
          </summary>
          <nav
            className="absolute right-0 top-14 w-72 rounded-3xl border border-ink/10 bg-white p-3 shadow-2xl"
            aria-label="Navegação móvel"
          >
            {mainNavigation.map((item) => (
              <Link key={item.href} href={item.href} className="block rounded-2xl px-4 py-3 text-sm font-medium text-ink hover:bg-sand">
                {item.label}
              </Link>
            ))}
            <Link href="/newsletter" className="mt-2 block rounded-2xl bg-brand px-4 py-3 text-center text-sm font-semibold text-white">
              Assine a newsletter
            </Link>
          </nav>
        </details>
      </Container>
    </header>
  );
}

import Link from "next/link";
import { Container } from "@/components/ui/container";
import { mainNavigation, siteConfig } from "@/config/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink/8 bg-canvas/94 backdrop-blur-xl">
      <Container className="flex min-h-[4.6rem] items-center justify-between gap-4 py-2">
        <Link href="/" className="group shrink-0" aria-label={`${siteConfig.projectName} — página inicial`}>
          <img
            src="/images/cinquentei-logo.svg"
            alt="Cinquentei e Agora, por Patrícia Garboni"
            width="600"
            height="238"
            className="h-auto w-[150px] sm:w-[188px]"
          />
        </Link>

        <nav className="hidden items-center gap-5 xl:flex" aria-label="Navegação principal">
          {mainNavigation.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-muted transition hover:text-brand">
              {item.label}
            </Link>
          ))}
          <Link
            href={siteConfig.hotmartUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-strong focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
          >
            Conhecer o eBook
          </Link>
        </nav>

        <details className="relative xl:hidden">
          <summary className="cursor-pointer list-none rounded-full border border-ink/15 bg-white px-4 py-2 text-sm font-semibold text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand">
            Menu
          </summary>
          <nav
            className="absolute right-0 top-14 w-[min(19rem,calc(100vw-2rem))] rounded-3xl border border-ink/10 bg-white p-3 shadow-2xl"
            aria-label="Navegação móvel"
          >
            {mainNavigation.map((item) => (
              <Link key={item.href} href={item.href} className="block rounded-2xl px-4 py-3 text-sm font-medium text-ink hover:bg-sand">
                {item.label}
              </Link>
            ))}
            <Link
              href={siteConfig.hotmartUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-2 block rounded-2xl bg-brand px-4 py-3 text-center text-sm font-semibold text-white"
            >
              Conhecer o eBook
            </Link>
          </nav>
        </details>
      </Container>
    </header>
  );
}

import Link from "next/link";
import type { ReactNode } from "react";

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external = false,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "light" | "text";
  external?: boolean;
}) {
  const variants = {
    primary:
      "bg-brand text-white shadow-[0_12px_32px_rgba(119,66,53,0.22)] hover:bg-brand-strong",
    secondary:
      "border border-ink/15 bg-white/75 text-ink hover:border-brand/45 hover:bg-white",
    light:
      "border border-white/25 bg-white text-wine hover:bg-soft-pink",
    text: "text-brand underline decoration-brand/30 underline-offset-4 hover:decoration-brand",
  } as const;

  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`inline-flex min-h-11 items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand ${variants[variant]}`}
    >
      {children}
    </Link>
  );
}

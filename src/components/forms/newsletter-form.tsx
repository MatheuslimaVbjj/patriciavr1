"use client";

import { useActionState } from "react";
import { initialFormState, subscribeNewsletter } from "@/app/actions";
import { FieldError } from "@/components/forms/field-error";

export function NewsletterForm({ compact = false }: { compact?: boolean }) {
  const [state, action, pending] = useActionState(subscribeNewsletter, initialFormState);

  return (
    <form action={action} className={compact ? "grid gap-4" : "grid gap-5"} noValidate>
      <div className={compact ? "grid gap-4 sm:grid-cols-2" : "grid gap-5 sm:grid-cols-2"}>
        <label className="block text-sm font-semibold text-ink">
          Nome
          <input
            name="name"
            autoComplete="name"
            className="form-field mt-2"
            placeholder="Como podemos chamar você?"
            aria-invalid={Boolean(state.errors?.name)}
          />
          <FieldError messages={state.errors?.name} />
        </label>
        <label className="block text-sm font-semibold text-ink">
          E-mail
          <input
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            className="form-field mt-2"
            placeholder="voce@exemplo.com"
            aria-invalid={Boolean(state.errors?.email)}
          />
          <FieldError messages={state.errors?.email} />
        </label>
      </div>

      <div className="hidden" aria-hidden="true">
        <label>
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <label className="flex items-start gap-3 text-sm leading-6 text-muted">
        <input name="consent" type="checkbox" className="mt-1 size-4 accent-brand" />
        <span>Concordo com o uso dos meus dados para receber a newsletter, conforme a política de privacidade.</span>
      </label>
      <FieldError messages={state.errors?.consent} />

      <button
        type="submit"
        disabled={pending}
        className="min-h-12 rounded-full bg-brand px-6 py-3 font-semibold text-white transition hover:bg-brand-strong disabled:cursor-wait disabled:opacity-65 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
      >
        {pending ? "Enviando..." : "Quero receber a newsletter"}
      </button>

      <p
        role="status"
        aria-live="polite"
        className={`min-h-6 text-sm ${state.status === "error" ? "text-red-700" : "text-emerald-800"}`}
      >
        {state.message}
      </p>
    </form>
  );
}

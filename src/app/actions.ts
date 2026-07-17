"use server";

import { contactSchema, newsletterSchema } from "@/lib/schemas";
import { sendToWebhook } from "@/lib/webhook";

export type FormState = {
  status: "idle" | "success" | "error";
  message: string;
  errors?: Record<string, string[]>;
};

export const initialFormState: FormState = { status: "idle", message: "" };

function validationError(error: { flatten: () => { fieldErrors: Record<string, string[]> } }): FormState {
  return {
    status: "error",
    message: "Revise os campos indicados.",
    errors: error.flatten().fieldErrors,
  };
}

export async function subscribeNewsletter(
  _previousState: FormState,
  formData: FormData,
): Promise<FormState> {
  const parsed = newsletterSchema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) return validationError(parsed.error);

  try {
    const result = await sendToWebhook(process.env.NEWSLETTER_WEBHOOK_URL, {
      type: "newsletter",
      name: parsed.data.name,
      email: parsed.data.email,
      submittedAt: new Date().toISOString(),
    });

    return {
      status: "success",
      message: result.developmentOnly
        ? "Validação concluída no ambiente de desenvolvimento. Configure NEWSLETTER_WEBHOOK_URL antes da publicação."
        : "Inscrição recebida. Verifique seu e-mail para confirmar o cadastro.",
    };
  } catch {
    return {
      status: "error",
      message: "A inscrição está temporariamente indisponível. Tente novamente mais tarde.",
    };
  }
}

export async function submitContact(
  _previousState: FormState,
  formData: FormData,
): Promise<FormState> {
  const parsed = contactSchema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) return validationError(parsed.error);

  try {
    const result = await sendToWebhook(process.env.CONTACT_WEBHOOK_URL, {
      type: "contact",
      name: parsed.data.name,
      email: parsed.data.email,
      reason: parsed.data.reason,
      message: parsed.data.message,
      submittedAt: new Date().toISOString(),
    });

    return {
      status: "success",
      message: result.developmentOnly
        ? "Validação concluída no ambiente de desenvolvimento. Configure CONTACT_WEBHOOK_URL antes da publicação."
        : "Mensagem enviada. A equipe responderá pelo e-mail informado.",
    };
  } catch {
    return {
      status: "error",
      message: "O envio está temporariamente indisponível. Tente novamente mais tarde.",
    };
  }
}

import { z } from "zod";

const consentMessage = "É necessário aceitar a política de privacidade.";

export const newsletterSchema = z.object({
  name: z.string().trim().min(2, "Informe seu nome."),
  email: z.email("Informe um e-mail válido."),
  consent: z.literal("on", { error: consentMessage }),
  website: z.string().max(0, "Envio inválido.").optional(),
});

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Informe seu nome."),
  email: z.email("Informe um e-mail válido."),
  reason: z.string().trim().min(2, "Selecione o assunto."),
  message: z.string().trim().min(20, "Escreva uma mensagem com pelo menos 20 caracteres."),
  consent: z.literal("on", { error: consentMessage }),
  website: z.string().max(0, "Envio inválido.").optional(),
});

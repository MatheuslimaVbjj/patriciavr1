type WebhookPayload = Record<string, string>;

export async function sendToWebhook(url: string | undefined, payload: WebhookPayload) {
  if (!url) {
    if (process.env.NODE_ENV === "production") {
      throw new Error("Integração não configurada.");
    }

    return { developmentOnly: true };
  }

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Não foi possível concluir o envio.");
  }

  return { developmentOnly: false };
}

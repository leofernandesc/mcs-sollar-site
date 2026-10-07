import { business } from "../data/business";

export type WhatsAppIntent = "contact" | "quote";

export function getWhatsAppUrl(intent: WhatsAppIntent): string {
  const baseUrl = `https://wa.me/${business.whatsapp.number}`;

  if (intent === "contact") {
    return baseUrl;
  }

  const encodedMessage = encodeURIComponent(business.whatsapp.quotationMessage);
  return `${baseUrl}?text=${encodedMessage}`;
}

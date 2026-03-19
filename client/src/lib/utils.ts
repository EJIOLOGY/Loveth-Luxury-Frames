import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Format price in NGN
export function formatPrice(amount: number): string {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
  }).format(amount);
}

// Build WhatsApp order message from cart
export function buildWhatsAppMessage(
  items: { name: string; quantity: number; price: number }[],
  phone: string,
): string {
  const lines = items.map(
    (item) =>
      `• ${item.name} x${item.quantity} — ${formatPrice(item.price * item.quantity)}`,
  );
  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const message = [
    "Hello Loveth Luxury Frames! 👋",
    "I'd like to place an order:",
    "",
    ...lines,
    "",
    `*Total: ${formatPrice(total)}*`,
    "",
    "Please confirm availability. Thank you!",
  ].join("\n");

  return `https://wa.me/${phone.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;
}

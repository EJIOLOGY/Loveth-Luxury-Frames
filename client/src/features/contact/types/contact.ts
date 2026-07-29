export type ContactCardIcon = "phone" | "whatsapp" | "email" | "location";

export type ContactCard = {
  icon: ContactCardIcon;
  label: string;
  description: string;
  value: string;
  href: string;
  external?: boolean;
};

export type FaqItem = {
  question: string;
  answer: string;
};

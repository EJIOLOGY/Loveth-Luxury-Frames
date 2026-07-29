import type { ContactCard, FaqItem } from "../types/contact";

export const CONTACT_DETAILS = {
  phone: "+234 704 496 5784",
  phoneHref: "tel:+2347044965784",
  whatsappHref: "https://wa.me/2347044965784",
  email: "hello@lovethluxuryframes.com",
  emailHref: "mailto:hello@lovethluxuryframes.com",
};

export const CONTACT_CARDS: ContactCard[] = [
  {
    icon: "phone",
    label: "Call Us",
    description: "Speak directly with our studio team, Monday to Saturday.",
    value: CONTACT_DETAILS.phone,
    href: CONTACT_DETAILS.phoneHref,
  },
  {
    icon: "whatsapp",
    label: "WhatsApp",
    description: "The fastest way to reach us for quotes and quick questions.",
    value: "Message our studio",
    href: CONTACT_DETAILS.whatsappHref,
    external: true,
  },
  {
    icon: "email",
    label: "Email",
    description: "For detailed enquiries, quotes and corporate orders.",
    value: CONTACT_DETAILS.email,
    href: CONTACT_DETAILS.emailHref,
  },
  {
    icon: "location",
    label: "Showroom",
    description: "Lagos, Nigeria — private viewings by appointment.",
    value: "Get directions",
    href: "#showroom",
  },
];

export const CONTACT_FAQS: FaqItem[] = [
  {
    question: "How long does a custom frame take to complete?",
    answer:
      "Most pieces are completed within 7–14 working days, depending on materials and finish. Rush timelines can sometimes be accommodated — just let us know when you reach out.",
  },
  {
    question: "Do you deliver outside Lagos?",
    answer:
      "Yes. We deliver nationwide across Nigeria with careful, insured packaging, and can advise on international shipping for select pieces.",
  },
  {
    question: "Can I bring in my own artwork or photograph?",
    answer:
      "Absolutely. Whether it's a photograph, certificate, painting or textile, we'll guide you to the best framing approach for its size, material and long-term preservation.",
  },
  {
    question: "Do you offer custom sizes?",
    answer:
      "Every frame we make is bespoke — measured and cut specifically for your piece. There are no fixed, off-the-shelf sizes.",
  },
  {
    question: "Is the showroom open to walk-ins?",
    answer:
      "Our Lagos showroom is available by appointment, so we can give your visit our full attention. Reach out on WhatsApp or through the form below to schedule a time.",
  },
];

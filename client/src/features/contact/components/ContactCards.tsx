"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { RiWhatsappFill } from "react-icons/ri";
import { motion, useReducedMotion } from "framer-motion";

import { CONTACT_CARDS } from "../data/contact";

const ICONS = {
  phone: Phone,
  whatsapp: RiWhatsappFill,
  email: Mail,
  location: MapPin,
} as const;

export function ContactCards() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-label="Ways to reach Loveth Luxury Frames"
      className="bg-white py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CONTACT_CARDS.map((card, index) => {
            const Icon = ICONS[card.icon];

            return (
              <motion.a
                className="group block h-full rounded-3xl border border-(--rich-black)/10 p-7 transition-colors duration-300 hover:border-(--luxury-gold)/50"
                href={card.href}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                key={card.label}
                rel={card.external ? "noreferrer" : undefined}
                target={card.external ? "_blank" : undefined}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.6,
                  delay: shouldReduceMotion ? 0 : index * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true, amount: 0.4 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <span className="inline-flex size-11 items-center justify-center rounded-full bg-(--llf-green)/8 text-(--llf-green)">
                  <Icon
                    aria-hidden="true"
                    className="size-5"
                    strokeWidth={1.5}
                  />
                </span>
                <h3 className="mt-6 font-serif text-xl text-(--rich-black)">
                  {card.label}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-(--rich-black)/65">
                  {card.description}
                </p>
                <span className="mt-4 inline-block text-sm font-semibold text-(--llf-green) underline-offset-4 group-hover:underline">
                  {card.value}
                </span>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

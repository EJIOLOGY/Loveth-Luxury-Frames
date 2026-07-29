import { ArrowUpRight, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CONTACT_DETAILS } from "../data/contact";

export function ContactCTA() {
  return (
    <section
      aria-labelledby="contact-cta-heading"
      className="px-6 py-20 lg:px-10 lg:py-32"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-8 overflow-hidden rounded-4xl bg-(--llf-green-dark) px-7 py-14 text-white shadow-2xl sm:px-12 lg:flex-row lg:items-end lg:justify-between lg:px-16 lg:py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.25em] text-(--luxury-gold) uppercase">
            Start the Conversation
          </p>
          <h2
            id="contact-cta-heading"
            className="mt-5 font-serif text-4xl sm:text-5xl"
          >
            Ready to Create Something Timeless?
          </h2>
          <p className="mt-5 leading-7 text-white/70">
            Tell us about your piece, and our studio will guide you from first
            idea to finished frame.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button
            asChild
            className="bg-(--luxury-gold) text-(--rich-black) hover:bg-(--luxury-gold)/85"
            size="xl"
          >
            <a href="#contact-form">
              Start Your Project <ArrowUpRight />
            </a>
          </Button>
          <Button
            asChild
            className="border-white/30 text-white hover:border-white hover:bg-white/10"
            size="xl"
            variant="outline"
          >
            <a
              href={CONTACT_DETAILS.whatsappHref}
              rel="noreferrer"
              target="_blank"
            >
              <MessageCircle /> WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

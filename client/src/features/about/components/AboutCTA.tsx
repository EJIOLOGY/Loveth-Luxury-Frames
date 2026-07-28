import { ArrowUpRight } from "lucide-react";
import { RiWhatsappFill } from "react-icons/ri";

import { Button } from "@/components/ui/button";

export function AboutCTA() {
  return (
    <section
      aria-labelledby="about-cta-heading"
      className="px-6 py-20 lg:px-10 lg:py-32"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-8 overflow-hidden rounded-4xl bg-(--llf-green-dark) px-7 py-14 text-white shadow-2xl sm:px-12 lg:flex-row lg:items-end lg:justify-between lg:px-16 lg:py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.25em] text-(--luxury-gold) uppercase">
            Begin Your Story
          </p>
          <h2
            id="about-cta-heading"
            className="mt-5 font-serif text-4xl sm:text-5xl"
          >
            Let&apos;s Preserve Your Next Story.
          </h2>
          <p className="mt-5 leading-7 text-white/70">
            Whichever moment you&apos;re ready to frame, our studio is here to
            guide you from first idea to finished piece.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button
            asChild
            className="bg-(--luxury-gold) text-(--rich-black) hover:bg-(--luxury-gold)/85"
            size="xl"
          >
            <a href="mailto:hello@lovethluxuryframes.com?subject=Request%20a%20quote">
              Request a Quote <ArrowUpRight />
            </a>
          </Button>
          <Button
            asChild
            className="border-white/30 text-white hover:border-white hover:bg-white/10"
            size="xl"
            variant="outline"
          >
            <a
              href="https://wa.me/2347044965784"
              rel="noreferrer"
              target="_blank"
            >
              <RiWhatsappFill className="size-5" /> WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

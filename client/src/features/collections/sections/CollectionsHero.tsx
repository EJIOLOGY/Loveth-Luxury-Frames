import Link from "next/link";
import { ArrowDownRight, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";

export function CollectionsHero() {
  return (
    <section
      className="relative overflow-hidden px-6 pb-20 pt-36 sm:pt-44 lg:px-10 lg:pb-32"
      aria-labelledby="collections-heading"
    >
      <div className="absolute inset-x-0 top-0 -z-10 h-full bg-[radial-gradient(circle_at_82%_23%,oklch(73%_0.14_82/0.13),transparent_20rem),radial-gradient(circle_at_15%_72%,oklch(43%_0.14_154/0.12),transparent_22rem)]" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="max-w-xl">
          <p className="text-xs font-semibold tracking-[0.26em] text-(--luxury-gold) uppercase">
            The LLF Collections
          </p>
          <h1
            id="collections-heading"
            className="mt-6 font-serif text-5xl leading-[0.98] text-foreground sm:text-6xl lg:text-7xl"
          >
            Frame the moments that shape your story.
          </h1>
          <p className="mt-7 max-w-lg text-base leading-8 text-muted-foreground sm:text-lg">
            A considered collection of inspirations for the celebrations, people
            and spaces that deserve more than a passing glance.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild size="xl" variant="luxury">
              <Link href="#showcase">
                Explore the collections <ArrowDownRight />
              </Link>
            </Button>
            <Button asChild size="xl" variant="outline">
              <a
                href="https://wa.me/2347044965784"
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle /> Speak with our studio
              </a>
            </Button>
          </div>
        </div>
        <div className="relative aspect-4/3 overflow-hidden rounded-4xl border border-white/55 bg-[linear-gradient(135deg,oklch(30%_0.035_95),oklch(48%_0.045_75)_45%,oklch(73%_0.14_82)_145%)] shadow-[0_32px_90px_rgba(31,28,24,0.22)] dark:border-white/10">
          <div className="absolute inset-5 rounded-3xl border border-white/25" />
          <div className="absolute inset-x-[17%] bottom-0 h-[72%] rounded-t-full border-x border-t border-white/25 bg-[linear-gradient(145deg,rgba(255,255,255,.16),rgba(255,255,255,.02))]" />
          <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between text-white">
            <span className="font-serif text-2xl">Made to be lived with.</span>
            <span className="text-[0.65rem] font-semibold tracking-[0.22em] uppercase text-white/70">
              LLF / 01
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

import { ArrowDownRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function GalleryHero() {
  return (
    <section
      className="relative overflow-hidden px-6 pb-20 pt-36 sm:pt-44 lg:px-10 lg:pb-32"
      aria-labelledby="gallery-heading"
    >
      <div className="absolute inset-x-0 top-0 -z-10 h-full bg-[radial-gradient(circle_at_12%_22%,oklch(73%_0.14_82/0.13),transparent_20rem),radial-gradient(circle_at_84%_70%,oklch(43%_0.14_154/0.12),transparent_24rem)]" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
        <div className="max-w-xl">
          <p className="text-xs font-semibold tracking-[.26em] text-(--luxury-gold) uppercase">
            The LLF Gallery
          </p>
          <h1
            id="gallery-heading"
            className="mt-6 font-serif text-5xl leading-[.98] sm:text-6xl lg:text-7xl"
          >
            Stories, beautifully held.
          </h1>
          <p className="mt-7 text-base leading-8 text-muted-foreground sm:text-lg">
            A closer look at the celebrations, spaces and people we’ve had the
            privilege to frame.
          </p>
          <Button asChild size="xl" variant="luxury" className="mt-9">
            <a href="#projects">
              Browse Projects <ArrowDownRight aria-hidden="true" />
            </a>
          </Button>
        </div>
        <div className="relative aspect-4/3 overflow-hidden rounded-4xl border border-white/50 bg-[linear-gradient(135deg,oklch(27%_.04_154),oklch(48%_.08_154)_44%,oklch(77%_.1_82)_150%)] shadow-[0_32px_90px_rgba(31,28,24,.22)] dark:border-white/10">
          <div className="absolute inset-7 rounded-3xl border border-white/25" />
          <div className="absolute inset-[16%] rounded-t-full border border-white/25 bg-[linear-gradient(145deg,rgba(255,255,255,.24),rgba(255,255,255,.02))]" />
          <span className="absolute bottom-8 left-8 font-serif text-2xl text-white">
            A record of beautiful living.
          </span>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";

export function FinalCta() {
  return (
    <section aria-labelledby="final-cta-heading" className="mt-28 border-t border-(--rich-black)/10 pt-20 text-center lg:mt-36 lg:pt-28">
      <p className="text-xs font-semibold tracking-[0.25em] text-(--luxury-gold) uppercase">Begin Your Story</p>
      <h2 id="final-cta-heading" className="mx-auto mt-5 max-w-3xl font-serif text-4xl leading-[1.06] text-(--rich-black) sm:text-5xl md:text-6xl">Every Great Story Deserves a Beautiful Frame.</h2>
      <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-(--rich-black)/65 md:text-lg">Whether you&apos;re preserving a cherished photograph or transforming your interior, we&apos;re ready to help you create something timeless.</p>
      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <Link className={buttonVariants({ variant: "luxury", className: "h-12 rounded-none px-6 text-xs font-semibold tracking-[0.14em] uppercase" })} href="/custom-order">Start Your Project<ArrowRight aria-hidden="true" strokeWidth={1.5} /></Link>
        <Link className={buttonVariants({ variant: "outline", className: "h-12 rounded-none px-6 text-xs font-semibold tracking-[0.14em] uppercase" })} href="/collections">Browse Collections</Link>
      </div>
    </section>
  );
}

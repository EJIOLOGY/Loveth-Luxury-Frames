import { ArrowUpRight } from "lucide-react";
import { RiWhatsappFill } from "react-icons/ri";

import { Button } from "@/components/ui/button";

export function CollectionsCTA() {
  return (
    <section className="px-6 py-20 lg:px-10 lg:py-32" aria-labelledby="collections-cta-heading">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-(--llf-green-dark) px-7 py-14 text-white shadow-2xl sm:px-12 lg:flex lg:items-end lg:justify-between lg:px-16 lg:py-20">
        <div className="max-w-2xl"><p className="text-xs font-semibold tracking-[0.25em] text-(--luxury-gold) uppercase">Your story, considered</p><h2 id="collections-cta-heading" className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">Ready to Preserve Your Story?</h2><p className="mt-5 max-w-xl leading-7 text-white/70">Tell us about the memory or space you have in mind. We’ll guide you to a finish that feels completely yours.</p></div>
        <div className="mt-8 flex flex-wrap gap-3 lg:mt-0"><Button asChild size="xl" className="bg-(--luxury-gold) text-(--rich-black) hover:bg-(--luxury-gold)/85"><a href="mailto:hello@lovethluxuryframes.com?subject=Request%20a%20quote">Request a Quote <ArrowUpRight /></a></Button><Button asChild size="xl" variant="outline" className="border-white/30 text-white hover:border-white hover:bg-white/10"><a href="https://wa.me/2347044965784" target="_blank" rel="noreferrer"><RiWhatsappFill className="size-5" /> WhatsApp</a></Button></div>
      </div>
    </section>
  );
}

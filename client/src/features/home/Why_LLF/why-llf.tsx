"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { buttonVariants } from "@/components/ui/button";
import { ValuePillars } from "./value-pillars";

export default function WhyLLF() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section aria-labelledby="why-llf-heading" className="bg-white py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.header
          className="max-w-2xl"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs font-semibold tracking-[0.25em] text-(--llf-green) uppercase">Why LLF</p>
          <h2 id="why-llf-heading" className="mt-5 font-serif text-4xl leading-[1.06] text-(--rich-black) sm:text-5xl md:text-6xl">
            Crafted for the Moments<br className="hidden sm:block" /> That Matter Most.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-(--rich-black)/65 md:text-lg">
            Every frame we create is thoughtfully designed to preserve life&apos;s most meaningful moments with exceptional craftsmanship, premium materials and timeless elegance.
          </p>
        </motion.header>

        <motion.div
          className="group relative mt-16 aspect-[16/9] overflow-hidden rounded-[2.5rem] bg-stone-200 lg:mt-20"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            alt="Loveth Luxury Frames artisan working with care on a luxury frame"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
            fill
            loading="lazy"
            sizes="(max-width: 1280px) calc(100vw - 3rem), 1152px"
            src="/images/Slide 6.png"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-black/10" />
        </motion.div>

        <ValuePillars />

        <motion.div
          className="mt-16 border-t border-(--rich-black)/10 pt-14 text-center lg:mt-24 lg:pt-20"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h3 className="mx-auto max-w-2xl font-serif text-3xl leading-tight text-(--rich-black) sm:text-4xl">Exceptional craftsmanship deserves exceptional memories.</h3>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-(--rich-black)/65">Discover how thoughtful design and meticulous craftsmanship come together to create frames that become part of your story.</p>
          <Link className={buttonVariants({ variant: "luxury", className: "mt-7 h-12 rounded-none px-6 text-xs font-semibold tracking-[0.14em] uppercase" })} href="/custom-order">
              Explore Our Craftsmanship
              <ArrowRight aria-hidden="true" strokeWidth={1.5} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

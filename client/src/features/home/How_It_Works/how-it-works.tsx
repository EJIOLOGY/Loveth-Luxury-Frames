"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { buttonVariants } from "@/components/ui/button";
import { PROCESS_STEPS } from "./process-data";
import { ProcessStep } from "./process-step";

export default function HowItWorks() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="how-it-works-heading"
      className="bg-[#F8F7F4] py-8 lg:pt-10 lg:pb-20"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.header
          className="max-w-2xl"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <p className="text-xs font-semibold tracking-[0.25em] text-(--luxury-gold) uppercase">
            How It Works
          </p>
          <h2
            id="how-it-works-heading"
            className="mt-5 font-serif text-4xl leading-[1.06] text-(--rich-black) sm:text-5xl md:text-6xl"
          >
            From Memory to Masterpiece.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-(--rich-black)/65 md:text-lg">
            Every meaningful photograph, certificate, artwork and treasured
            memory deserves to be preserved with exceptional care, thoughtful
            design and timeless craftsmanship.
          </p>
        </motion.header>

        <div className="mt-20 space-y-24 lg:mt-28 lg:space-y-32">
          {PROCESS_STEPS.map((step, index) => (
            <ProcessStep index={index} key={step.number} step={step} />
          ))}
        </div>

        <motion.div
          className="mt-24 border-t border-(--rich-black)/10 pt-14 text-center lg:mt-32 lg:pt-20"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <h3 className="font-serif text-3xl text-(--rich-black) sm:text-4xl">
            Ready to Preserve Your Story?
          </h3>
          <Link
            className={buttonVariants({ variant: "luxury", className: "mt-7 h-12 rounded-none px-6 text-xs font-semibold tracking-[0.14em] uppercase" })}
            href="/custom-order"
          >
              Start Your Project
              <ArrowRight aria-hidden="true" strokeWidth={1.5} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

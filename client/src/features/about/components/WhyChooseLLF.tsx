"use client";

import { motion, useReducedMotion } from "framer-motion";

import { ABOUT_PILLARS } from "../data/about";

export function WhyChooseLLF() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="why-choose-heading"
      className="bg-white py-20 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.header
          className="max-w-2xl"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true, amount: 0.5 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <p className="text-xs font-semibold tracking-[0.25em] text-(--luxury-gold) uppercase">
            Why Choose LLF
          </p>
          <h2
            id="why-choose-heading"
            className="mt-5 font-serif text-4xl leading-[1.06] text-(--rich-black) sm:text-5xl"
          >
            The Details That Set Us Apart.
          </h2>
        </motion.header>

        <div
          className="mt-16 grid gap-x-20 sm:grid-cols-2 lg:mt-20"
          aria-label="Reasons to choose Loveth Luxury Frames"
        >
          {ABOUT_PILLARS.map((pillar, index) => (
            <motion.article
              className="relative isolate border-t border-(--rich-black)/10 py-10 first:pt-8 lg:py-12"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
              key={pillar.number}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.7,
                delay: shouldReduceMotion ? 0 : index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true, amount: 0.35 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -top-7 -left-1 -z-10 font-serif text-[8rem] leading-none font-bold text-(--rich-black)/5 sm:text-[10rem]"
              >
                {pillar.number}
              </span>
              <p className="text-xs font-semibold tracking-[0.25em] text-(--llf-green) uppercase">
                {pillar.number}
              </p>
              <h3 className="mt-5 font-serif text-3xl leading-tight text-(--rich-black) sm:text-4xl">
                {pillar.title}
              </h3>
              <p className="mt-4 max-w-md text-base leading-relaxed text-(--rich-black)/65">
                {pillar.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

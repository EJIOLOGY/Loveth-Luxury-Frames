"use client";

import { motion, useReducedMotion } from "framer-motion";

import { ABOUT_PROCESS_STEPS } from "../data/about";

export function AboutProcess() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="process-heading"
      className="bg-[#F8F7F4] py-20 lg:py-32"
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
            Our Process
          </p>
          <h2
            id="process-heading"
            className="mt-5 font-serif text-4xl leading-[1.06] text-(--rich-black) sm:text-5xl"
          >
            From First Conversation to Final Reveal.
          </h2>
        </motion.header>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-6">
          {ABOUT_PROCESS_STEPS.map((step, index) => (
            <motion.div
              className="border-t border-(--rich-black)/10 pt-6"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
              key={step.number}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.7,
                delay: shouldReduceMotion ? 0 : index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true, amount: 0.4 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <p className="text-xs font-semibold tracking-[0.25em] text-(--luxury-gold) uppercase">
                {step.number}
              </p>
              <h3 className="mt-4 font-serif text-xl text-(--rich-black)">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-(--rich-black)/65">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

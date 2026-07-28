"use client";

import { motion, useReducedMotion } from "framer-motion";

import { ABOUT_PHILOSOPHY } from "../data/about";

export function BrandPhilosophy() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="philosophy-heading"
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
            Brand Philosophy
          </p>
          <h2
            id="philosophy-heading"
            className="mt-5 font-serif text-4xl leading-[1.06] text-(--rich-black) sm:text-5xl"
          >
            Reverence, in Every Detail.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-(--rich-black)/65 md:text-lg">
            We treat every commission — a family portrait, a certificate, a
            gallery wall — as a small act of preservation. Three principles
            guide how we approach each one.
          </p>
        </motion.header>

        <div className="mt-14 grid divide-y divide-(--rich-black)/10 border-y border-(--rich-black)/10 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
          {ABOUT_PHILOSOPHY.map((item, index) => (
            <motion.div
              className="py-10 lg:px-10 lg:py-12 first:lg:pl-0 last:lg:pr-0"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
              key={item.title}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.7,
                delay: shouldReduceMotion ? 0 : index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true, amount: 0.35 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <h3 className="font-serif text-2xl text-(--rich-black)">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-(--rich-black)/65">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion, useReducedMotion } from "framer-motion";

import { ABOUT_STATS } from "../data/about";

export function AboutStats() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-label="Loveth Luxury Frames in numbers"
      className="px-6 py-20 lg:px-10 lg:py-32"
    >
      <motion.div
        className="mx-auto grid max-w-7xl grid-cols-2 divide-y divide-white/10 overflow-hidden rounded-4xl bg-(--llf-green-dark) text-white sm:divide-y-0 sm:divide-x lg:grid-cols-4"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
        transition={{
          duration: shouldReduceMotion ? 0 : 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        viewport={{ once: true, amount: 0.3 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        {ABOUT_STATS.map((stat) => (
          <div className="px-8 py-12 text-center sm:py-16" key={stat.label}>
            <p className="font-serif text-4xl text-(--luxury-gold) sm:text-5xl">
              {stat.value}
            </p>
            <p className="mt-3 text-xs font-semibold tracking-[0.2em] text-white/70 uppercase">
              {stat.label}
            </p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

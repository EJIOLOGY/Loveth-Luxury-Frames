"use client";

import { motion, useReducedMotion } from "framer-motion";

import type { ValuePillar } from "./types";

type PillarCardProps = {
  pillar: ValuePillar;
  index: number;
};

export function PillarCard({ pillar, index }: PillarCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      className="relative isolate border-t border-(--rich-black)/10 py-10 first:pt-8 lg:py-12"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.7,
        delay: shouldReduceMotion ? 0 : index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <span aria-hidden="true" className="pointer-events-none absolute -top-7 -left-1 -z-10 font-serif text-[8rem] leading-none font-bold text-(--rich-black)/[0.05] sm:text-[10rem]">
        {pillar.number}
      </span>
      <p className="text-xs font-semibold tracking-[0.25em] text-(--llf-green) uppercase">{pillar.number}</p>
      <h3 className="mt-5 font-serif text-3xl leading-tight text-(--rich-black) sm:text-4xl">{pillar.title}</h3>
      <p className="mt-4 max-w-md text-base leading-relaxed text-(--rich-black)/65">{pillar.description}</p>
    </motion.article>
  );
}

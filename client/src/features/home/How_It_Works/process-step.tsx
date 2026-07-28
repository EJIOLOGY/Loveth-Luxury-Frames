"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export type ProcessStepData = {
  number: string;
  title: string;
  description: string;
  image: string;
  alt: string;
};

type ProcessStepProps = {
  step: ProcessStepData;
  index: number;
};

export function ProcessStep({ step, index }: ProcessStepProps) {
  const shouldReduceMotion = useReducedMotion();
  const textFirst = index % 2 === 1;

  return (
    <motion.article
      className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className={textFirst ? "lg:order-2" : undefined}>
        <div className="group relative aspect-4/3 overflow-hidden rounded-3xl bg-stone-200">
          <Image
            alt={step.alt}
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
            fill
            loading="lazy"
            sizes="(max-width: 1024px) calc(100vw - 3rem), 50vw"
            src={step.image}
          />
          <div aria-hidden="true" className="absolute inset-0 bg-black/5" />
        </div>
      </div>

      <motion.div
        className={textFirst ? "lg:order-1" : undefined}
        initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.45 }}
        transition={{
          duration: shouldReduceMotion ? 0 : 0.65,
          delay: shouldReduceMotion ? 0 : 0.12,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div className="relative isolate max-w-lg py-5 lg:py-10">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -top-9 -left-1 -z-10 font-serif text-[8rem] leading-none text-(--rich-black)/5.5 sm:text-[10rem]"
          >
            {step.number}
          </span>
          <p className="text-xs font-semibold tracking-[0.25em] text-(--luxury-gold) uppercase">
            {step.number} — The Process
          </p>
          <h3 className="mt-5 font-serif text-4xl leading-[1.06] text-(--rich-black) sm:text-5xl">
            {step.title}
          </h3>
          <p className="mt-5 max-w-md text-base leading-relaxed text-(--rich-black)/65 md:text-lg">
            {step.description}
          </p>
        </div>
      </motion.div>
    </motion.article>
  );
}

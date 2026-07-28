"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export function OurStory() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="our-story-heading"
      className="bg-white py-20 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
          <motion.div
            className="group relative aspect-4/3 overflow-hidden rounded-3xl bg-stone-200"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true, amount: 0.25 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <Image
              alt="A Loveth Luxury Frames artisan carefully hand-finishing a frame"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
              fill
              loading="lazy"
              sizes="(max-width: 1024px) calc(100vw - 3rem), 50vw"
              src="/images/Slide 6.png"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-black/10" />
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.8,
              delay: shouldReduceMotion ? 0 : 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true, amount: 0.35 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <p className="text-xs font-semibold tracking-[0.25em] text-(--luxury-gold) uppercase">
              How We Began
            </p>
            <h2
              id="our-story-heading"
              className="mt-5 font-serif text-4xl leading-[1.06] text-(--rich-black) sm:text-5xl"
            >
              A Craft Born from Care.
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-(--rich-black)/65 md:text-lg">
              Loveth Luxury Frames began with a simple belief: that the moments
              Nigerian families and businesses hold dearest deserve more than a
              passing frame from a shelf. What started as a small studio
              dedicated to a handful of treasured pieces has grown into a
              considered practice — one still rooted in the same patience and
              attention it began with.
            </p>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-(--rich-black)/65 md:text-lg">
              Today, every piece that leaves our Lagos studio carries that same
              founding intention: to give your story a home worthy of it.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

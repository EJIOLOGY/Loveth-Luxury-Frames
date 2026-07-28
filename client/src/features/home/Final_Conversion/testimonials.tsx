"use client";

import { Star } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { TESTIMONIALS } from "./data";

export function Testimonials() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section aria-labelledby="client-stories-heading">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold tracking-[0.25em] text-(--luxury-gold) uppercase">Client Stories</p>
        <h2 id="client-stories-heading" className="mt-5 font-serif text-4xl leading-[1.06] text-(--rich-black) sm:text-5xl">
          Trusted with Life&apos;s Most Meaningful Moments.
        </h2>
      </div>
      <div className="mt-14 grid divide-y divide-(--rich-black)/10 border-y border-(--rich-black)/10 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
        {TESTIMONIALS.map((testimonial, index) => (
          <motion.figure
            className="py-10 lg:px-10 lg:py-12 first:lg:pl-0 last:lg:pr-0"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.7, delay: shouldReduceMotion ? 0 : index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            key={testimonial.name}
          >
            <div aria-label="5 out of 5 stars" className="flex gap-1 text-(--luxury-gold)">
              {Array.from({ length: 5 }, (_, starIndex) => (
                <Star aria-hidden="true" className="size-3.5 fill-current" key={starIndex} strokeWidth={1.5} />
              ))}
            </div>
            <blockquote className="mt-6 font-serif text-2xl leading-snug text-(--rich-black)">“{testimonial.quote}”</blockquote>
            <figcaption className="mt-7 text-sm leading-relaxed text-(--rich-black)/65">
              <span className="font-semibold text-(--rich-black)">{testimonial.name}</span>
              <span className="mx-2 text-(--luxury-gold)">/</span>
              {testimonial.project}
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}

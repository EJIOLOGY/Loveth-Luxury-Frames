"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, MessageCircle } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { buttonVariants } from "@/components/ui/button";
import { CONTACT_DETAILS } from "./data";

export function Showroom() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section aria-labelledby="showroom-heading" className="mt-28 lg:mt-36">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
        <motion.div
          className="group relative aspect-[4/3] overflow-hidden rounded-3xl bg-stone-200"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image alt="A refined Loveth Luxury Frames display in a warm interior" className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100" fill loading="lazy" sizes="(max-width: 1024px) calc(100vw - 3rem), 50vw" src="/images/Slide 5.png" />
          <div aria-hidden="true" className="absolute inset-0 bg-black/10" />
        </motion.div>
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: shouldReduceMotion ? 0 : 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs font-semibold tracking-[0.25em] text-(--luxury-gold) uppercase">Visit Our Showroom</p>
          <h2 id="showroom-heading" className="mt-5 font-serif text-4xl leading-[1.06] text-(--rich-black) sm:text-5xl">See the Detail in Person.</h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-(--rich-black)/65 md:text-lg">Step into a considered space where materials, finishes and the art of framing can be experienced up close.</p>
          <dl className="mt-9 space-y-4 border-y border-(--rich-black)/10 py-6 text-sm leading-relaxed text-(--rich-black)/70">
            <div className="flex justify-between gap-6"><dt className="font-semibold text-(--rich-black)">Showroom</dt><dd className="text-right">Lagos, Nigeria</dd></div>
            <div className="flex justify-between gap-6"><dt className="font-semibold text-(--rich-black)">Opening hours</dt><dd className="text-right">By appointment</dd></div>
            <div className="flex justify-between gap-6"><dt className="font-semibold text-(--rich-black)">Phone</dt><dd><a className="underline-offset-4 hover:underline" href={CONTACT_DETAILS.phoneHref}>{CONTACT_DETAILS.phone}</a></dd></div>
            <div className="flex justify-between gap-6"><dt className="font-semibold text-(--rich-black)">Email</dt><dd><Link className="underline-offset-4 hover:underline" href="/contact">Contact our studio</Link></dd></div>
          </dl>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link className={buttonVariants({ variant: "outline", className: "h-12 rounded-none px-5 text-xs font-semibold tracking-[0.14em] uppercase" })} href="/contact"><MapPin aria-hidden="true" strokeWidth={1.5} />Get Directions</Link>
            <a className={buttonVariants({ variant: "luxury", className: "h-12 rounded-none px-5 text-xs font-semibold tracking-[0.14em] uppercase" })} href={CONTACT_DETAILS.whatsappHref} rel="noreferrer" target="_blank"><MessageCircle aria-hidden="true" strokeWidth={1.5} />Chat on WhatsApp</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

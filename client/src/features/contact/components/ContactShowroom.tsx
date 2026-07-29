"use client";

import Image from "next/image";
import { MapPin, MessageCircle } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { CONTACT_DETAILS } from "../data/contact";

export function ContactShowroom() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section aria-labelledby="showroom-heading" className="bg-white py-20 lg:py-32" id="showroom">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
          <motion.div
            className="group relative aspect-4/3 overflow-hidden rounded-3xl bg-stone-200 lg:order-2"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.25 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <Image
              alt="The Loveth Luxury Frames showroom in Lagos"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
              fill
              loading="lazy"
              sizes="(max-width: 1024px) calc(100vw - 3rem), 50vw"
              src="/images/Slide 5.png"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-black/10" />
          </motion.div>

          <motion.div
            className="lg:order-1"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: shouldReduceMotion ? 0 : 0.1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.35 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <p className="text-xs font-semibold tracking-[0.25em] text-(--luxury-gold) uppercase">
              Visit Our Showroom
            </p>
            <h2 id="showroom-heading" className="mt-5 font-serif text-4xl leading-[1.06] text-(--rich-black) sm:text-5xl">
              See the Detail in Person.
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-(--rich-black)/65 md:text-lg">
              Step into a considered space where materials, finishes and
              the art of framing can be experienced up close, guided by
              our studio team.
            </p>
            <dl className="mt-9 space-y-4 border-y border-(--rich-black)/10 py-6 text-sm leading-relaxed text-(--rich-black)/70">
              <div className="flex justify-between gap-6">
                <dt className="font-semibold text-(--rich-black)">Showroom</dt>
                <dd className="text-right">Lagos, Nigeria</dd>
              </div>
              <div className="flex justify-between gap-6">
                <dt className="font-semibold text-(--rich-black)">Opening hours</dt>
                <dd className="text-right">By appointment</dd>
              </div>
              <div className="flex justify-between gap-6">
                <dt className="font-semibold text-(--rich-black)">Phone</dt>
                <dd>
                  <a className="underline-offset-4 hover:underline" href={CONTACT_DETAILS.phoneHref}>
                    {CONTACT_DETAILS.phone}
                  </a>
                </dd>
              </div>
              <div className="flex justify-between gap-6">
                <dt className="font-semibold text-(--rich-black)">Email</dt>
                <dd>
                  <a className="underline-offset-4 hover:underline" href={CONTACT_DETAILS.emailHref}>
                    {CONTACT_DETAILS.email}
                  </a>
                </dd>
              </div>
            </dl>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="xl" variant="outline">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Loveth Luxury Frames, Lagos, Nigeria")}`}
                  rel="noreferrer"
                  target="_blank"
                >
                  <MapPin /> Get Directions
                </a>
              </Button>
              <Button asChild size="xl" variant="luxury">
                <a href={CONTACT_DETAILS.whatsappHref} rel="noreferrer" target="_blank">
                  <MessageCircle /> Chat on WhatsApp
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
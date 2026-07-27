"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Frame } from "lucide-react";

import { Button } from "@/components/ui/button";
import { heroSlides } from "@/features/home/Hero/hero-slides";

const AUTOPLAY_MS = 7000;
const blurDataURL =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9JzAgMCA4MCA1Mic+PGZpbHRlciBpZD0nYic+PGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0nMTInLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPScjMjQ0ODNlJy8+PHJlY3Qgd2lkdGg9JzEwMCUnIGhlaWdodD0nMTAwJScgZmlsbD0nI2M4OWI0YScgZmlsdGVyPSd1cmwoI2IpJyBvcGFjaXR5PScuNTUnLz48L3N2Zz4=";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);
  const totalSlides = heroSlides.length;
  const activeSlide = heroSlides[activeIndex];

  const selectSlide = React.useCallback(
    (direction: 1 | -1) => {
      setActiveIndex(
        (index) => (index + direction + totalSlides) % totalSlides,
      );
    },
    [totalSlides],
  );

  React.useEffect(() => {
    if (shouldReduceMotion || isPaused) return;

    const timer = window.setInterval(() => selectSlide(1), AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, [isPaused, selectSlide, shouldReduceMotion]);

  React.useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") selectSlide(-1);
      if (event.key === "ArrowRight") selectSlide(1);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectSlide]);

  return (
    <section
      aria-label="Featured Loveth Luxury Frames collections"
      aria-roledescription="carousel"
      className="relative mx-3 my-8 md:mx-5 md:my-5 lg:m-8 isolate min-h-[calc(100svh-20rem)] overflow-hidden md:min-h-screen"
      onBlurCapture={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      style={{ background: "var(--background-gradient)" }}
    >
      <AnimatePresence initial={false} mode="sync">
        <motion.div
          key={activeSlide.image}
          aria-label={`Slide ${activeIndex + 1} of ${totalSlides}`}
          className="absolute inset-0"
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 1.025 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={
            shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 1.012 }
          }
          transition={{
            duration: shouldReduceMotion ? 0 : 0.85,
            ease: [0.22, 0.61, 0.36, 1],
          }}
        >
          <Image
            alt={activeSlide.alt}
            blurDataURL={blurDataURL}
            className="object-cover"
            fill
            placeholder="blur"
            priority={activeIndex === 0}
            sizes="100vw"
            src={activeSlide.image}
          />
        </motion.div>
      </AnimatePresence>

      <div className="pointer-events-none absolute inset-0 bg-black/10" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[58%] bg-[linear-gradient(to_top,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.55)_20%,rgba(0,0,0,0.32)_40%,rgba(0,0,0,0.14)_60%,rgba(0,0,0,0.04)_80%,transparent_100%)] dark:bg-[linear-gradient(to_top,rgba(0,0,0,0.65)_0%,rgba(0,0,0,0.48)_20%,rgba(0,0,0,0.28)_40%,rgba(0,0,0,0.12)_60%,rgba(0,0,0,0.03)_80%,transparent_100%)]" />

      <div className="absolute top-0 right-0 left-0 z-10 flex items-center justify-between px-5 pt-6 font-sans text-[0.65rem] font-semibold tracking-[0.18em] text-white sm:px-8 md:px-16 md:pt-8">
        <div
          aria-live="polite"
          className="flex items-center gap-3 rounded-sm bg-black/20 px-2 py-1.5 shadow-[0_1px_3px_rgba(0,0,0,0.6)] backdrop-blur-[2px]"
        >
          <span>
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(totalSlides).padStart(2, "0")}
          </span>
          <div
            aria-hidden="true"
            className="h-px w-16 overflow-hidden bg-white/35 sm:w-24"
          >
            <motion.div
              key={activeIndex}
              className="h-full origin-left bg-(--luxury-gold)"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: shouldReduceMotion ? 0 : AUTOPLAY_MS / 1000,
                ease: "linear",
              }}
              style={{ animationPlayState: isPaused ? "paused" : "running" }}
            />
          </div>
        </div>

        <div className="flex gap-2">
          <Button
            aria-label="Previous slide"
            className="size-9 rounded-2xl bg-black/25 text-white hover:bg-black/45 hover:text-white"
            onClick={() => selectSlide(-1)}
            size="icon"
            variant="ghost"
          >
            <ChevronLeft aria-hidden="true" strokeWidth={1.5} />
          </Button>
          <Button
            aria-label="Next slide"
            className="size-9 rounded-2xl bg-black/25 text-white hover:bg-black/45 hover:text-white"
            onClick={() => selectSlide(1)}
            size="icon"
            variant="ghost"
          >
            <ChevronRight aria-hidden="true" strokeWidth={1.5} />
          </Button>
        </div>
      </div>

      <div className="absolute right-0 bottom-0 left-0 z-10 flex flex-col items-start gap-5 px-4 pb-4 sm:px-5 md:flex-row md:items-end md:justify-between md:px-8 md:pb-7">
        <div className="max-w-lg font-sans text-white">
          <p
            className="mb-2 text-[0.65rem] font-semibold tracking-[0.22em] text-white/95 uppercase"
            style={{ textShadow: "0 1px 3px rgba(0,0,0,0.6)" }}
          >
            {activeSlide.kicker}
          </p>
          <h1
            className="text-3xl leading-[1.05] font-medium text-balance sm:text-4xl md:text-5xl"
            style={{ fontFamily: "var(--font-heading), serif" }}
          >
            {activeSlide.headline}
          </h1>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-white/75 md:text-base">
            {activeSlide.description}
          </p>
        </div>

        <div className="flex w-full flex-col gap-3 md:w-auto md:items-end">
          <Button
            asChild
            className="h-12 w-full rounded-none px-5 text-xs font-semibold tracking-[0.14em] uppercase md:w-auto"
            style={{
              backgroundColor: "var(--luxury-gold)",
              color: "var(--rich-black)",
            }}
          >
            <Link href={activeSlide.primaryAction.href}>
              <Frame aria-hidden="true" strokeWidth={1.5} />
              {activeSlide.primaryAction.label}
            </Link>
          </Button>
          <Button
            asChild
            className="h-12 w-full rounded-none border-white/35 bg-black/40 px-5 text-xs font-semibold tracking-[0.14em] text-white uppercase hover:border-white/60 hover:bg-black/55 hover:text-white md:w-auto"
            variant="outline"
          >
            <Link href={activeSlide.secondaryAction.href}>
              <ArrowRight aria-hidden="true" strokeWidth={1.5} />
              {activeSlide.secondaryAction.label}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

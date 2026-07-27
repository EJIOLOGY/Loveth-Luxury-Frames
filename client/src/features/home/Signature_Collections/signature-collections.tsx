"use client";

import { motion } from "framer-motion";
import { COLLECTIONS } from "./collection-data";
import CollectionCard from "./collection-card";
import CarouselControls from "./carousel-controls";
import { useCarousel } from "./use-carousel";

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const gridVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

export default function SignatureCollections() {
  const {
    emblaRef,
    scrollPrev,
    scrollNext,
    scrollTo,
    canScrollPrev,
    canScrollNext,
    selectedIndex,
    scrollSnaps,
  } = useCarousel();

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={sectionVariants}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="bg-(--warm-ivory) py-28 lg:py-36"
      aria-labelledby="signature-collections-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-155">
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-(--luxury-gold)">
            Signature Collection
          </span>
          <h2
            id="signature-collections-heading"
            className="mt-5 font-serif text-4xl leading-tight text-(--rich-black) md:text-5xl"
          >
            What kinds of memories can we preserve?
          </h2>
          <p className="mt-5 font-sans text-base leading-relaxed text-(--rich-black)/60 md:text-lg">
            From vows exchanged to milestones earned, each collection is a
            distinct approach to framing—matched to the moment it holds.
          </p>
        </div>

        {/* Spacer */}
        <div className="h-4 lg:h-8" aria-hidden />

        {/* Carousel */}
        <div
          ref={emblaRef}
          className="overflow-hidden"
          role="region"
          aria-roledescription="carousel"
          aria-label="Signature collections"
        >
          <motion.div
            variants={gridVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex touch-pan-y -ml-4"
          >
            {COLLECTIONS.map((collection) => (
              <CollectionCard key={collection.id} collection={collection} />
            ))}
          </motion.div>
        </div>

        <CarouselControls
          onPrev={scrollPrev}
          onNext={scrollNext}
          onDotClick={scrollTo}
          canScrollPrev={canScrollPrev}
          canScrollNext={canScrollNext}
          selectedIndex={selectedIndex}
          scrollSnaps={scrollSnaps}
        />
      </div>
    </motion.section>
  );
}

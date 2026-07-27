"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import type { Collection } from "./collection-data";

interface CollectionCardProps {
  collection: Collection;
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function CollectionCard({ collection }: CollectionCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="min-w-0 shrink-0 grow-0 basis-full pl-4 sm:basis-1/2 lg:basis-1/3"
    >
      <Link
        href={collection.href}
        className="group relative block aspect-3/4 w-full max-w-105 overflow-hidden rounded-xl rounded-tl-none rounded-br-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--luxury-gold)"
        aria-label={`Explore ${collection.title} collection`}
      >
        <Image
          src={collection.image}
          alt={collection.alt}
          fill
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
          loading="lazy"
          className="object-cover transition-transform duration-600 ease-out group-hover:scale-[1.05] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />

        {/* Bottom gradient overlay only */}
        <div
          aria-hidden
          className="absolute inset-0 bg-linear-to-t from-black/75 via-black/10 to-transparent transition-opacity duration-600 ease-out group-hover:from-black/85"
        />

        <div className="absolute inset-x-0 bottom-0 p-7">
          <h3 className="font-serif text-xl text-(--warm-ivory) transition-transform duration-600 ease-out group-hover:-translate-y-1 md:text-2xl">
            {collection.title}
          </h3>

          <p className="mt-2 max-w-[85%] text-sm leading-relaxed text-(--warm-ivory)/0 opacity-0 transition-all duration-600 ease-out group-hover:text-(--warm-ivory)/75 group-hover:opacity-100">
            {collection.description}
          </p>

          <div className="mt-4 flex translate-y-2 items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-(--luxury-gold) opacity-0 transition-all duration-600 ease-out group-hover:translate-y-0 group-hover:opacity-100">
            Explore Collection
            <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

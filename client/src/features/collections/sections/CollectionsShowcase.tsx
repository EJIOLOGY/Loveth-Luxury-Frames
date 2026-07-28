"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown, MessageCircle, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { collections } from "../data/collections";
import type { Collection, CollectionAccent } from "../types";

const accentStyles: Record<CollectionAccent, { surface: string; orb: string; label: string }> = {
  gold: { surface: "from-stone-900 via-stone-700 to-amber-200", orb: "bg-amber-200/35", label: "text-amber-700 dark:text-amber-300" },
  green: { surface: "from-emerald-950 via-emerald-800 to-emerald-200", orb: "bg-emerald-200/30", label: "text-emerald-800 dark:text-emerald-300" },
  plum: { surface: "from-stone-900 via-rose-950 to-rose-200", orb: "bg-rose-200/30", label: "text-rose-800 dark:text-rose-300" },
  stone: { surface: "from-zinc-900 via-stone-600 to-stone-200", orb: "bg-stone-100/30", label: "text-stone-700 dark:text-stone-300" },
};

function ArtPlaceholder({ collection, label, gallery = false }: { collection: Collection; label: string; gallery?: boolean }) {
  const style = accentStyles[collection.accent];
  return (
    <div className={`group relative isolate h-full w-full overflow-hidden bg-gradient-to-br ${style.surface}`} aria-label={`${label} placeholder`} role="img">
      <div className={`absolute -right-10 -top-10 size-[65%] rounded-full blur-2xl ${style.orb}`} />
      <div className="absolute inset-[10%] rounded-[45%_45%_20%_20%] border border-white/20 bg-white/5 transition-transform duration-700 ease-out group-hover:scale-105" />
      <div className="absolute inset-[19%] rounded-t-full border border-white/20 bg-[linear-gradient(155deg,rgba(255,255,255,.22),rgba(255,255,255,.01))]" />
      {!gallery && <><div className="absolute bottom-[16%] left-[10%] h-px w-[42%] bg-white/50" /><div className="absolute bottom-[10%] left-[10%] h-px w-[25%] bg-white/30" /></>}
      <span className="absolute bottom-4 left-5 text-[0.58rem] font-medium tracking-[0.22em] text-white/70 uppercase">{label}</span>
    </div>
  );
}

function CollectionPanel({ collection, expanded, onToggle, index }: { collection: Collection; expanded: boolean; onToggle: () => void; index: number }) {
  const prefersReducedMotion = useReducedMotion();
  const panelId = useId();
  const styles = accentStyles[collection.accent];
  const imageFirst = index % 2 === 0;
  const image = <motion.div initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} className="aspect-[4/3] overflow-hidden rounded-[1.5rem] border border-white/45 shadow-[0_24px_55px_rgba(30,25,20,0.14)] dark:border-white/10"><ArtPlaceholder collection={collection} label={collection.title} /></motion.div>;
  const copy = <div className="flex flex-col items-start justify-center"><p className={`text-xs font-semibold tracking-[0.24em] uppercase ${styles.label}`}>{collection.tagline}</p><h3 className="mt-4 font-serif text-4xl leading-tight text-foreground sm:text-5xl">{collection.title}</h3><p className="mt-5 max-w-xl text-base leading-8 text-muted-foreground">{collection.description}</p><Button type="button" onClick={onToggle} aria-expanded={expanded} aria-controls={panelId} size="lg" variant={expanded ? "secondary" : "outline"} className="mt-8 h-11 px-5 text-sm">{expanded ? "Close collection" : "Explore Collection"}<ChevronDown className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""}`} /></Button></div>;
  return (
    <article className="border-t border-border/70 py-14 first:border-t-0 first:pt-0 sm:py-20">
      <div className="grid items-center gap-9 lg:grid-cols-2 lg:gap-18">{imageFirst ? <>{image}{copy}</> : <>{copy}{image}</>}</div>
      <AnimatePresence initial={false}>
        {expanded && <motion.div id={panelId} role="region" aria-label={`${collection.title} details`} initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, height: 0, y: -10 }} animate={{ opacity: 1, height: "auto", y: 0 }} exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, height: 0, y: -10 }} transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden"><div className="mt-10 border-t border-border/70 pt-10"><div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">{collection.gallery.map((item, galleryIndex) => <motion.div key={item} initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: galleryIndex * 0.035, duration: 0.35 }} className={`aspect-[4/3] overflow-hidden rounded-xl border border-white/45 shadow-sm dark:border-white/10 ${galleryIndex === 0 ? "col-span-2 sm:col-span-1" : ""}`}><ArtPlaceholder collection={collection} label={item} gallery /></motion.div>)}</div><div className="mt-10 flex flex-col justify-between gap-7 rounded-2xl bg-card/70 p-6 ring-1 ring-border/60 sm:flex-row sm:items-center"><div><p className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-(--luxury-gold) uppercase"><Sparkles className="size-3.5" /> Popular frame styles</p><ul className="mt-4 flex flex-wrap gap-2">{collection.frameStyles.map((style) => <li key={style} className="rounded-full border border-border bg-background px-3 py-1.5 text-xs text-muted-foreground">{style}</li>)}</ul></div><Button asChild variant="luxury" size="lg" className="h-11 px-5"><a href={`mailto:hello@lovethluxuryframes.com?subject=${encodeURIComponent(`${collection.title} quote request`)}`}>Request a Quote <MessageCircle /></a></Button></div></div></motion.div>}
      </AnimatePresence>
    </article>
  );
}

export function CollectionsShowcase() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  return <section id="showcase" className="scroll-mt-24 px-6 py-20 lg:px-10 lg:py-32" aria-labelledby="showcase-heading"><div className="mx-auto max-w-7xl"><div className="max-w-2xl pb-14 sm:pb-20"><p className="text-xs font-semibold tracking-[0.26em] text-(--luxury-gold) uppercase">Find your inspiration</p><h2 id="showcase-heading" className="mt-5 font-serif text-4xl leading-tight text-foreground sm:text-5xl">A collection for every meaningful chapter.</h2></div>{collections.map((collection, index) => <CollectionPanel key={collection.id} collection={collection} index={index} expanded={expandedId === collection.id} onToggle={() => setExpandedId((current) => current === collection.id ? null : collection.id)} />)}</div></section>;
}

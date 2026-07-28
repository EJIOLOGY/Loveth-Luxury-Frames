"use client";
import { motion } from "framer-motion";
import { galleryCategories, type GalleryCategory } from "../types";

export function GalleryFilter({ active, onChange }: { active: GalleryCategory; onChange: (category: GalleryCategory) => void }) {
  return <div className="-mx-6 overflow-x-auto px-6 pb-3 lg:mx-0 lg:px-0" aria-label="Filter gallery projects"><div className="flex w-max gap-2">{galleryCategories.map((category) => <button key={category} type="button" onClick={() => onChange(category)} aria-pressed={active === category} className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${active === category ? "text-primary-foreground" : "border border-border bg-card text-muted-foreground hover:text-foreground"}`}>{active === category && <motion.span layoutId="active-gallery-filter" className="absolute inset-0 -z-10 rounded-full bg-(--llf-green)" transition={{ type: "spring", stiffness: 380, damping: 30 }} />}{category}</button>)}</div></div>;
}

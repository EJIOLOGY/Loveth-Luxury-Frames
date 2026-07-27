export interface Collection {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
  alt: string;
}

export const COLLECTIONS: Collection[] = [
  {
    id: "wedding-memories",
    title: "Wedding Memories",
    description:
      "Vows, first dances, and the quiet moments in between, preserved in frames worthy of the day.",
    image: "/LLF/Frame-3.png",
    href: "/collections/wedding-memories",
    alt: "Elegant wedding portrait displayed in a luxury frame within a bright interior",
  },
  {
    id: "family-portraits",
    title: "Family Portraits",
    description:
      "Generations, gathered. Framed as heirlooms meant to be passed down, not just hung up.",
    image: "/LLF/Slide 5.png",
    href: "/collections/family-portraits",
    alt: "Family portrait in a premium frame above a living room console",
  },
  {
    id: "graduation-moments",
    title: "Graduation Moments",
    description:
      "A milestone earned. Framed with the same care that went into every year that led to it.",
    image: "/images/collections/graduation.jpg",
    href: "/collections/graduation-moments",
    alt: "Graduation photograph framed and displayed in a study",
  },
  {
    id: "executive-spaces",
    title: "Executive Spaces",
    description:
      "Boardrooms and corner offices, elevated. Framing that speaks before you do.",
    image: "/images/collections/executive.jpg",
    href: "/collections/executive-spaces",
    alt: "Framed artwork in a modern executive office",
  },
  {
    id: "art-interiors",
    title: "Art & Interiors",
    description:
      "Curated arrangements for walls that deserve more than an afterthought.",
    image: "/images/collections/art-interiors.jpg",
    href: "/collections/art-interiors",
    alt: "Gallery wall arrangement in a luxury interior",
  },
  {
    id: "bespoke-creations",
    title: "Bespoke Creations",
    description:
      "Commissioned, fitted, certificates and signed—framing built entirely around your vision.",
    image: "/images/collections/bespoke.jpg",
    href: "/collections/bespoke-creations",
    alt: "Custom bespoke frame displayed in a premium home setting",
  },
];

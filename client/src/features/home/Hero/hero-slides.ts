export type HeroSlide = {
  alt: string;
  description: string;
  headline: string;
  image: string;
  kicker: string;
  primaryAction: { href: string; label: string };
  secondaryAction: { href: string; label: string };
};

export const heroSlides: HeroSlide[] = [
  {
    image: "/images/Slide 1.png",
    alt: "A thoughtfully framed artwork in a refined interior",
    kicker: "Handcrafted in Lagos",
    headline: "Frames Worthy of the Art",
    description: "Elevate every piece with a frame made to belong.",
    primaryAction: { href: "/collections", label: "Shop collection" },
    secondaryAction: { href: "/custom-order", label: "Custom order" },
  },
  {
    image: "/images/Slide 2.png",
    alt: "Luxury framed art displayed in a warm living space",
    kicker: "Made for your space",
    headline: "Art Deserves a Presence",
    description: "Discover considered finishes for the rooms you love.",
    primaryAction: { href: "/collections", label: "Explore frames" },
    secondaryAction: { href: "/custom-order", label: "Create your own" },
  },
  {
    image: "/images/Slide 3.png",
    alt: "A close view of a premium picture frame and artwork",
    kicker: "Precision in every detail",
    headline: "The Finishing Touch",
    description: "Each frame is tailored to honour what it holds.",
    primaryAction: { href: "/collections", label: "View collection" },
    secondaryAction: { href: "/custom-order", label: "Start an order" },
  },
  {
    image: "/images/Slide 4.png",
    alt: "Framed artwork creating a statement in an elegant home",
    kicker: "Curated for living",
    headline: "Make Every Wall Matter",
    description: "Bring gallery-level intention to your everyday spaces.",
    primaryAction: { href: "/collections", label: "Find your frame" },
    secondaryAction: { href: "/custom-order", label: "Custom order" },
  },
  {
    image: "/images/Slide 5.png",
    alt: "Luxury Frames artwork",
    kicker: "Premium Frames Curated Just for You",
    headline: "Crafted Around Your Story",
    description:
      "Premium framing, thoughtfully designed for your unique style.",
    primaryAction: { href: "/custom-order", label: "Begin a custom order" },
    secondaryAction: { href: "/collections", label: "Browse collection" },
  },
  {
    image: "/images/Slide 6.png",
    alt: "Loveth Luxury Frames artisan framing an artwork",
    kicker: "The LLF atelier",
    headline: "Crafted Around Your Story",
    description:
      "Personal framing, beautifully made from consultation to delivery.",
    primaryAction: { href: "/custom-order", label: "Begin a custom order" },
    secondaryAction: { href: "/collections", label: "Browse collection" },
  },
];

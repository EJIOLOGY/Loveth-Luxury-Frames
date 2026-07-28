export type CollectionAccent = "gold" | "green" | "plum" | "stone";

export type Collection = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  accent: CollectionAccent;
  frameStyles: string[];
  gallery: string[];
};

export const galleryCategories = ["All", "Wedding", "Graduation", "Family", "Corporate", "Interior", "Fine Art", "Church", "Hospitality", "Memorial"] as const;

export type GalleryCategory = (typeof galleryCategories)[number];
export type GalleryAccent = "gold" | "green" | "plum" | "stone";

export type GalleryProject = {
  id: string;
  title: string;
  category: Exclude<GalleryCategory, "All">;
  frameStyle: string;
  description: string;
  location?: string;
  accent: GalleryAccent;
  ratio: "portrait" | "landscape" | "square";
  featured?: boolean;
};

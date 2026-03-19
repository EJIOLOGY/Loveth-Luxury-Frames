export interface Service {
  name: string;
  description: string;
  image: string;
  priceRange: string;
  whatsappTemplate: string;
  active: boolean;
}

export interface Gallery {
  title: string;
  category: string;
  image: string;
  featured: boolean;
}

export interface Testimonial {
  name: string;
  message: string;
  rating: number;
  image?: string;
}

export interface Content {
  key: string; // e.g hero_text, about_us, etc.
  value: string;
}

export interface Settings {
  whatsappNumber: string;
  email: string;
  instagram: string;
  deliveryZones: string;
}

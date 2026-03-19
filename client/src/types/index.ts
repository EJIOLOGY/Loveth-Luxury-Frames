export interface Product {
  _id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  category: string;
  images: string[];
  inStock: boolean;
  featured: boolean;
  tags: string[];
  createdAt: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Testimonial {
  _id: string;
  name: string;
  review: string;
  rating: number;
  image?: string;
  createdAt: string;
}

export interface NewsletterSubscriber {
  _id: string;
  email: string;
  createdAt: string;
}

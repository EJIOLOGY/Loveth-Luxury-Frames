import { Navbar } from "@/components/layout/navbar";
import { HeroSection } from "@/components/layout/heroSection";
import { ProductCard } from "@/components/layout/productCard";
import { Footer } from "@/components/layout/footer";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />

      <section className="py-12 px-6 grid grid-cols-1 md:grid-cols-3 gap-6 ">
        {/* Example product showcase */}

        {/* <ProductCard title="Classic Frame" type="Framed" price={5000} /> */}
        {/* <ProductCard title="Modern Frame" type="Framed" price={7000} /> */}
        {/* <ProductCard title="Canvas Print" type="Frameless" price={4500} /> */}
      </section>

      <Footer />
    </main>
  );
}

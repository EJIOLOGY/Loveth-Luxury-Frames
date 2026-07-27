import { Navbar } from "@/components/layout";
import Hero from "@/features/home/Hero/hero";
import { SignatureCollections } from "@/features/home/Signature_Collections";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-18 md:pt-20">
        <Hero />
        <SignatureCollections />
      </main>
    </>
  );
}

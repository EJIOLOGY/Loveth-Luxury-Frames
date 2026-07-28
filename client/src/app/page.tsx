import { Footer, Navbar } from "@/components/layout";
import { FinalConversion } from "@/features/home/Final_Conversion";
import Hero from "@/features/home/Hero/hero";
import { HowItWorks } from "@/features/home/How_It_Works";
import { SignatureCollections } from "@/features/home/Signature_Collections";
import { WhyLLF } from "@/features/home/Why_LLF";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-18 md:pt-20">
        <Hero />
        <SignatureCollections />
        <HowItWorks />
        <WhyLLF />
        <FinalConversion />
      </main>
      <Footer />
    </>
  );
}

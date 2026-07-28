import { Suspense } from "react";
import dynamic from "next/dynamic";
import { Footer, Navbar } from "@/components/layout";
import Hero from "@/features/home/Hero/hero";

const SignatureCollections = dynamic(
  () =>
    import("@/features/home/Signature_Collections").then((mod) => ({
      default: mod.SignatureCollections,
    })),
  { loading: () => <div className="h-96 animate-pulse bg-muted" /> },
);

const HowItWorks = dynamic(
  () =>
    import("@/features/home/How_It_Works").then((mod) => ({
      default: mod.HowItWorks,
    })),
  { loading: () => <div className="h-96 animate-pulse bg-muted" /> },
);

const WhyLLF = dynamic(
  () =>
    import("@/features/home/Why_LLF").then((mod) => ({ default: mod.WhyLLF })),
  { loading: () => <div className="h-96 animate-pulse bg-muted" /> },
);

const FinalConversion = dynamic(
  () =>
    import("@/features/home/Final_Conversion").then((mod) => ({
      default: mod.FinalConversion,
    })),
  { loading: () => <div className="h-96 animate-pulse bg-muted" /> },
);

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-18 md:pt-20">
        <Hero />
        <Suspense fallback={<div className="h-96 animate-pulse bg-muted" />}>
          <SignatureCollections />
        </Suspense>
        <Suspense fallback={<div className="h-96 animate-pulse bg-muted" />}>
          <HowItWorks />
        </Suspense>
        <Suspense fallback={<div className="h-96 animate-pulse bg-muted" />}>
          <WhyLLF />
        </Suspense>
        <Suspense fallback={<div className="h-96 animate-pulse bg-muted" />}>
          <FinalConversion />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

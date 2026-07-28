import { Footer, Navbar } from "@/components/layout";
import { AboutCTA, AboutContent, AboutHero } from "./components";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutHero />
        <AboutContent />
        <AboutCTA />
      </main>
      <Footer />
    </>
  );
}

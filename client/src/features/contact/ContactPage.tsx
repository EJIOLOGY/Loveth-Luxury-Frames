import { Footer, Navbar } from "@/components/layout";
import { ContactCTA, ContactContent, ContactHero } from "./components";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <ContactHero />
        <ContactContent />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}

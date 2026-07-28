import {
  CollectionsHero,
  CollectionsShowcase,
  CollectionsCTA,
} from "./sections";
import { Footer, Navbar } from "@/components/layout";

export default function CollectionsPage() {
  return (
    <>
      <Navbar />
      <main>
        <CollectionsHero />
        <CollectionsShowcase />
        <CollectionsCTA />
      </main>
      <Footer />
    </>
  );
}

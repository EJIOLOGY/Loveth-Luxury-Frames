import { AboutProcess } from "./AboutProcess";
import { AboutStats } from "./AboutStats";
import { BrandPhilosophy } from "./BrandPhilosophy";
import { OurStory } from "./OurStory";
import { WhyChooseLLF } from "./WhyChooseLLF";

export function AboutContent() {
  return (
    <>
      <OurStory />
      <BrandPhilosophy />
      <WhyChooseLLF />
      <AboutProcess />
      <AboutStats />
    </>
  );
}

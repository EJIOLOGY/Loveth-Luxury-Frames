import { VALUE_PILLARS } from "./why-llf-data";
import { PillarCard } from "./pillar-card";

export function ValuePillars() {
  return (
    <div className="mt-20 grid gap-x-20 sm:grid-cols-2 lg:mt-28" aria-label="Our values">
      {VALUE_PILLARS.map((pillar, index) => (
        <PillarCard index={index} key={pillar.number} pillar={pillar} />
      ))}
    </div>
  );
}

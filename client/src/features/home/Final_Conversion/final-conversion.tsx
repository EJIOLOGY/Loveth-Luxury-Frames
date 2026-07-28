import { FinalCta } from "./final-cta";
import { Showroom } from "./showroom";
import { Testimonials } from "./testimonials";

export default function FinalConversion() {
  return <section className="bg-[#F8F7F4] py-32 lg:py-40"><div className="mx-auto max-w-7xl px-6 lg:px-10"><Testimonials /><Showroom /><FinalCta /></div></section>;
}

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { CONTACT_FAQS } from "../data/contact";

export function ContactFAQ() {
  return (
    <section
      aria-labelledby="faq-heading"
      className="bg-[#F8F7F4] py-20 lg:py-32"
    >
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <div className="text-center">
          <p className="text-xs font-semibold tracking-[0.25em] text-(--luxury-gold) uppercase">
            Frequently Asked
          </p>
          <h2
            id="faq-heading"
            className="mt-5 font-serif text-4xl leading-[1.06] text-(--rich-black) sm:text-5xl"
          >
            Questions, Answered.
          </h2>
        </div>

        <Accordion
          type="single"
          collapsible
          className="mt-14 border-t border-(--rich-black)/10"
        >
          {CONTACT_FAQS.map((faq, index) => (
            <AccordionItem key={faq.question} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

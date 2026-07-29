import { ContactCards } from "./ContactCards";
import { ContactFAQ } from "./ContactFAQ";
import { ContactForm } from "./ContactForm";
import { ContactShowroom } from "./ContactShowroom";

export function ContactContent() {
  return (
    <>
      <ContactCards />
      <ContactForm />
      <ContactShowroom />
      <ContactFAQ />
    </>
  );
}

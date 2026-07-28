import { Navbar, Footer } from "@/components/layout";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-18 md:pt-20">
        <section className="px-6 py-24 text-center lg:px-10 lg:py-32">
          <h1 className="font-serif text-4xl sm:text-5xl">Get in Touch</h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            We'd love to hear from you. Send us a message and we'll respond as
            soon as possible.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}

"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CONTACT_DETAILS } from "../data/contact";

const contactFormSchema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().optional(),
  projectType: z.string().min(1, "Please select a project type."),
  message: z.string().min(10, "Tell us a little more about your project."),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const PROJECT_TYPES = [
  "Portrait or Photograph",
  "Artwork or Print",
  "Certificate or Award",
  "Gallery Wall",
  "Something Else",
];

export function ContactForm() {
  const shouldReduceMotion = useReducedMotion();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      projectType: "",
      message: "",
    },
  });

  function onSubmit(values: ContactFormValues) {
    const subject = `New enquiry — ${values.projectType}`;
    const bodyLines = [
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      values.phone ? `Phone: ${values.phone}` : undefined,
      `Project type: ${values.projectType}`,
      "",
      values.message,
    ].filter(Boolean);

    const mailtoUrl = `${CONTACT_DETAILS.emailHref}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

    window.location.href = mailtoUrl;
    setIsSubmitted(true);
    reset();
  }

  return (
    <section
      aria-labelledby="contact-form-heading"
      className="bg-[#F8F7F4] py-20 lg:py-32"
      id="contact-form"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="max-w-md">
            <p className="text-xs font-semibold tracking-[0.25em] text-(--luxury-gold) uppercase">
              Get in Touch
            </p>
            <h2
              id="contact-form-heading"
              className="mt-5 font-serif text-4xl leading-[1.06] text-(--rich-black) sm:text-5xl"
            >
              Tell Us About Your Piece.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-(--rich-black)/65 md:text-lg">
              Share a few details about what you&apos;d like framed. Sending
              this form opens your email app with everything pre-filled, so your
              message reaches our studio directly.
            </p>
          </div>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true, amount: 0.3 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            {isSubmitted ? (
              <div className="flex flex-col items-start gap-4 rounded-3xl border border-(--rich-black)/10 bg-white p-10">
                <CheckCircle2
                  className="size-8 text-(--llf-green)"
                  strokeWidth={1.5}
                />
                <h3 className="font-serif text-2xl text-(--rich-black)">
                  Almost There.
                </h3>
                <p className="text-sm leading-relaxed text-(--rich-black)/65">
                  Your email app should now be open with your message pre-filled
                  — just hit send from there to reach our studio directly.
                </p>
                <Button onClick={() => setIsSubmitted(false)} variant="outline">
                  Send another message
                </Button>
              </div>
            ) : (
              <form
                className="rounded-3xl border border-(--rich-black)/10 bg-white p-8 sm:p-10"
                noValidate
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      aria-invalid={!!errors.name}
                      id="name"
                      placeholder="Your name"
                      {...register("name")}
                    />
                    {errors.name && (
                      <p className="text-xs text-destructive">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      aria-invalid={!!errors.email}
                      id="email"
                      placeholder="you@email.com"
                      type="email"
                      {...register("email")}
                    />
                    {errors.email && (
                      <p className="text-xs text-destructive">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="phone">Phone (optional)</Label>
                    <Input
                      id="phone"
                      placeholder="+234"
                      type="tel"
                      {...register("phone")}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="projectType">Project Type</Label>
                    <select
                      aria-invalid={!!errors.projectType}
                      className="h-12 w-full rounded-xl border border-border bg-transparent px-4 text-sm text-foreground shadow-sm outline-none focus-visible:border-ring focus-visible:ring-1 focus-visible:ring-ring/50"
                      defaultValue=""
                      id="projectType"
                      {...register("projectType")}
                    >
                      <option disabled value="">
                        Select an option
                      </option>
                      {PROJECT_TYPES.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                    {errors.projectType && (
                      <p className="text-xs text-destructive">
                        {errors.projectType.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-2">
                  <Label htmlFor="message">Tell us about your project</Label>
                  <Textarea
                    aria-invalid={!!errors.message}
                    id="message"
                    placeholder="Share the piece, dimensions, and the feeling you'd like it to carry..."
                    rows={5}
                    {...register("message")}
                  />
                  {errors.message && (
                    <p className="text-xs text-destructive">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <Button
                  className="mt-8 w-full sm:w-auto"
                  size="xl"
                  type="submit"
                  variant="luxury"
                >
                  Send Message <ArrowRight />
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";

import { CONTACT_DETAILS } from "@/features/home/Final_Conversion/data";

const footerLinks = [
  {
    title: "Quick Links",
    links: [
      ["Home", "/"],
      ["Collections", "/collections"],
      ["Gallery", "/gallery"],
      ["About", "/about"],
      ["Contact", "/contact"],
    ],
  },
  {
    title: "Services",
    links: [
      ["Wedding Portraits", "/collections/wedding-memories"],
      ["Certificates", "/custom-order"],
      ["Artwork", "/collections/art-interiors"],
      ["Corporate Displays", "/custom-order"],
      ["Interior Framing", "/custom-order"],
    ],
  },
] as const;

export function Footer() {
  return (
    <footer
      className="bg-(--llf-green-dark) text-white"
      aria-label="Site footer"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24 justify-center">
        <div className="grid gap-14 grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.15fr] lg:gap-10">
          <div className="max-w-xs">
            <Link
              aria-label="Loveth Luxury Frames home"
              className="inline-flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--luxury-gold)"
              href="/"
            >
              <Image
                alt="Loveth Luxury Frames"
                className="h-11 w-auto"
                height={100}
                src="/icon1.svg"
                width={320}
              />
              <span className="text-xs font-semibold tracking-[0.16em] uppercase">
                Loveth Luxury Frames
              </span>
            </Link>
            <p className="mt-6 font-serif text-2xl text-white/90">
              Preserve. Elevate. Forever.
            </p>
          </div>
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h2 className="text-xs font-semibold tracking-[0.2em] text-(--luxury-gold) uppercase">
                {group.title}
              </h2>
              <ul className="mt-6 space-y-3">
                {group.links.map(([label, href]) => (
                  <li key={label}>
                    <Link
                      className="text-sm text-white/70 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--luxury-gold)"
                      href={href}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h2 className="text-xs font-semibold tracking-[0.2em] text-(--luxury-gold) uppercase">
              Contact
            </h2>
            <address className="mt-6 space-y-3 text-sm leading-relaxed not-italic text-white/70">
              <p>
                <a
                  className="transition-colors hover:text-white"
                  href={CONTACT_DETAILS.phoneHref}
                >
                  {CONTACT_DETAILS.phone}
                </a>
              </p>
              <p>
                <a
                  className="transition-colors hover:text-white"
                  href={CONTACT_DETAILS.whatsappHref}
                  rel="noreferrer"
                  target="_blank"
                >
                  Chat on WhatsApp
                </a>
              </p>
              <p>
                <Link
                  className="transition-colors hover:text-white"
                  href="/contact"
                >
                  Contact our studio
                </Link>
              </p>
              <p>
                Lagos, Nigeria
                <br />
                By appointment
              </p>
            </address>
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-4 border-t border-white/15 pt-6 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Loveth Luxury Frames. All rights reserved.</p>
          <div className="flex gap-6">
            <Link
              className="transition-colors hover:text-white"
              href="/privacy"
            >
              Privacy Policy
            </Link>
            <Link className="transition-colors hover:text-white" href="/terms">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

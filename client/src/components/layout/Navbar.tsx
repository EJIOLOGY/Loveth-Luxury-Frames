"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { MoonIcon, SunIcon } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { RiWhatsappFill } from "react-icons/ri";

import Container from "@/components/common/Container/container";
import { MobileNav } from "@/components/layout/MobileNav";
import { NavLinks } from "@/components/layout/NavLinks";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? resolvedTheme === "dark" : false;

  return (
    <Button
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      size="icon"
      variant="ghost"
      className={cn(
        "h-9.5 w-9.5 hover:-translate-y-0.5 bg-card/70 backdrop-blur-md border",
      )}
    >
      <SunIcon
        aria-hidden="true"
        className={cn(
          "absolute size-4 transition-all duration-200",
          mounted && isDark
            ? "rotate-90 scale-0 opacity-0"
            : "rotate-0 scale-100 opacity-100",
        )}
      />
      <MoonIcon
        aria-hidden="true"
        className={cn(
          "absolute size-4 transition-all duration-200",
          mounted && isDark
            ? "rotate-0 scale-100 opacity-100"
            : "-rotate-90 scale-0 opacity-0",
        )}
      />
    </Button>
  );
}

export function Navbar() {
  const [hasScrolled, setHasScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setHasScrolled(window.scrollY > 20);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.35,
        ease: [0.22, 0.61, 0.36, 1],
      }}
      className={cn(
        "fixed top-5 left-1/2 z-50 w-[96%] max-w-7xl -translate-x-1/2 rounded-full transition-all duration-300",
        hasScrolled
          ? "border border-border/10 bg-background/30 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
          : "border border-border/40 bg-background/60 backdrop-blur-lg",
      )}
    >
      <Container className="px-6 lg:px-8">
        <div className="flex h-19 items-center justify-between gap-10">
          <Link
            aria-label="Loveth Luxury Frames home"
            className="group flex shrink-0 items-center gap-3 focus-visible:outline-none"
            href="/"
          >
            <Image
              src="/icon1.svg"
              alt="Loveth Luxury Frames"
              className="h-10 w-auto object-contain"
              height={100}
              priority
              width={320}
            />

            <span className="hidden border-l border-border pl-3 font-sans text-[0.65rem] tracking-[0.18em] text-muted-foreground uppercase sm:block">
              Loveth Luxury Frames
            </span>
          </Link>

          <nav aria-label="Primary navigation" className="hidden lg:block">
            <NavLinks className="gap-8 xl:gap-10" />
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <ThemeToggle />
            <Button
              asChild
              size="lg"
              variant="luxury"
              className={cn("text-[0.85rem] rounded-br-xs")}
            >
              <a
                aria-label="Chat with Loveth Luxury Frames on WhatsApp"
                href="https://wa.me/2347044965784"
                rel="noreferrer"
                target="_blank"
              >
                <RiWhatsappFill aria-hidden="true" className="size-4.5" />
                Chat on WhatsApp
              </a>
            </Button>
          </div>

          <MobileNav themeToggle={<ThemeToggle />} />
        </div>
      </Container>
    </motion.header>
  );
}

"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ListIcon } from "@phosphor-icons/react";
import { RiWhatsappFill } from "react-icons/ri";

import { NavLinks } from "@/components/layout/NavLinks";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  themeToggle: React.ReactNode;
}

export function MobileNav({ themeToggle }: MobileNavProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <Button
            aria-label="Open navigation menu"
            className="lg:hidden"
            size="icon"
            variant="ghost"
          />
        }
      >
        <ListIcon aria-hidden="true" className="size-5" weight="regular" />
      </SheetTrigger>
      <SheetContent
        className="w-full border-border bg-card sm:w-md"
        side="right"
      >
        <SheetHeader className="border-b border-border px-6 py-5">
          <SheetTitle>
            <Link
              className="font-display text-xl tracking-[0.18em] text-foreground"
              href="/"
              onClick={() => setOpen(false)}
            >
              <Image
                src="/icon1.svg"
                alt="Loveth Luxury Frames"
                className="h-10 w-auto object-contain"
                height={100}
                priority
                width={320}
              />
            </Link>
          </SheetTitle>
          <SheetDescription className="sr-only">
            Loveth Luxury Frames navigation
          </SheetDescription>
        </SheetHeader>
        <nav
          aria-label="Mobile navigation"
          className="flex flex-1 flex-col px-6 py-10"
        >
          <NavLinks
            className="flex-col items-start gap-7"
            onNavigate={() => setOpen(false)}
          />
          <div className="mt-auto flex items-center justify-between border-t border-border pt-6">
            {themeToggle}

            <Button
              nativeButton={false}
              asChild
              size="lg"
              variant="luxury"
              className={cn("text-[0.875rem]")}
            >
              <a
                aria-label="Chat with Loveth Luxury Frames on WhatsApp"
                href="https://wa.me/"
                rel="noreferrer"
                target="_blank"
              >
                <RiWhatsappFill aria-hidden="true" className="size-4" />
                Chat on WhatsApp
              </a>
            </Button>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}

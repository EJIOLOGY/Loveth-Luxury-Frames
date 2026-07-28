"use client";

import Link from "next/link";
import { useEffect } from "react";
import { AlertTriangle, ArrowLeft, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6 py-24 text-foreground">
      <div className="w-full max-w-2xl rounded-[2rem] border border-destructive/20 bg-card/80 p-8 text-center shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur sm:p-10">
        <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-destructive/10 text-destructive">
          <AlertTriangle className="size-7" />
        </div>

        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.28em] text-(--luxury-gold)">
          Something went wrong
        </p>
        <h1 className="mt-4 font-serif text-3xl sm:text-4xl">
          We couldn&apos;t load this page right now.
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
          A rendering issue interrupted this view. You can try again, or go back
          to the homepage and continue browsing.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button variant="luxury" onClick={reset}>
            <RotateCcw className="size-4" />
            Try again
          </Button>
          <Button asChild variant="outline">
            <Link href="/">
              <ArrowLeft className="size-4" />
              Back home
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}

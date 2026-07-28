"use client";

import Link from "next/link";
import { AlertTriangle, ArrowLeft, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6 py-24">
      <div className="w-full max-w-xl rounded-4xl border border-destructive/20 bg-card/80 p-8 text-center shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur">
        <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-destructive/10 text-destructive">
          <AlertTriangle className="size-7" />
        </div>
        <h1 className="mt-6 font-serif text-3xl">
          The gallery couldn&apos;t be loaded.
        </h1>
        <p className="mt-3 text-sm leading-7 text-muted-foreground">
          Please retry or return to the homepage while we sort this out.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button variant="luxury" onClick={reset}>
            <RotateCcw className="size-4" />
            Try again
          </Button>
          <Button asChild variant="outline">
            <Link href="/">
              <ArrowLeft className="size-4" />
              Home
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}

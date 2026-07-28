import { ArrowRight } from "lucide-react";

export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6 py-24 text-foreground">
      <div className="w-full max-w-2xl rounded-[2rem] border border-border/60 bg-card/80 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur sm:p-10">
        <div className="flex items-center gap-3">
          <div className="h-3 w-3 animate-pulse rounded-full bg-(--luxury-gold)" />
          <div className="h-3 w-24 animate-pulse rounded-full bg-muted" />
          <div className="h-3 w-16 animate-pulse rounded-full bg-muted" />
        </div>

        <div className="mt-8 space-y-4">
          <div className="h-8 w-3/4 animate-pulse rounded-full bg-muted" />
          <div className="h-4 w-full animate-pulse rounded-full bg-muted/80" />
          <div className="h-4 w-5/6 animate-pulse rounded-full bg-muted/70" />
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <div className="h-11 w-32 animate-pulse rounded-xl bg-muted" />
          <div className="h-11 w-36 animate-pulse rounded-xl bg-muted/70" />
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="h-24 animate-pulse rounded-2xl border border-border/50 bg-muted/40"
            />
          ))}
        </div>
      </div>
    </main>
  );
}

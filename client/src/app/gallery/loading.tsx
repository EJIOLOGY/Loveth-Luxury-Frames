export default function Loading() {
  return (
    <main className="min-h-screen bg-background px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="h-6 w-32 animate-pulse rounded-full bg-muted" />
        <div className="h-12 w-3/4 animate-pulse rounded-full bg-muted/90" />
        <div className="h-4 w-full animate-pulse rounded-full bg-muted/70" />
        <div className="h-4 w-5/6 animate-pulse rounded-full bg-muted/70" />
        <div className="grid gap-6 pt-8 lg:grid-cols-2">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="h-72 animate-pulse rounded-[2rem] border border-border/60 bg-muted/40"
            />
          ))}
        </div>
      </div>
    </main>
  );
}

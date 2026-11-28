export default function Loading() {
  return (
    <div className="flex min-h-screen animate-pulse bg-background">
      <aside className="hidden w-64 border-r bg-card p-5 md:block">
        <div className="mb-10 h-8 w-32 rounded-md bg-muted" />

        <div className="mb-6 space-y-3">
          <div className="h-4 w-20 rounded bg-muted" />
          <div className="h-10 w-full rounded-lg bg-muted" />
          <div className="h-10 w-full rounded-lg bg-muted" />
          <div className="h-10 w-full rounded-lg bg-muted" />
        </div>

        <div className="mb-4 h-4 w-24 rounded bg-muted" />

        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="mb-3 flex items-center gap-3">
            <div className="size-8 rounded-md bg-muted" />
            <div className="h-4 flex-1 rounded bg-muted" />
          </div>
        ))}
      </aside>

      <main className="min-w-0 flex-1 p-5 md:p-8">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div className="space-y-2">
            <div className="h-7 w-44 rounded-md bg-muted" />
            <div className="h-4 w-64 max-w-full rounded bg-muted" />
          </div>

          <div className="size-10 rounded-full bg-muted" />
        </div>

        <section className="mb-10">
          <div className="mb-5 h-5 w-36 rounded bg-muted" />

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="space-y-4 rounded-xl border bg-card p-5">
                <div className="flex items-center justify-between">
                  <div className="size-10 rounded-lg bg-muted" />
                  <div className="h-5 w-16 rounded bg-muted" />
                </div>

                <div className="h-5 w-36 rounded bg-muted" />
                <div className="h-4 w-full rounded bg-muted" />
                <div className="h-4 w-2/3 rounded bg-muted" />
              </div>
            ))}
          </div>
        </section>
        <section>
          <div className="mb-5 h-5 w-40 rounded bg-muted" />

          <div className="space-y-3 rounded-xl border bg-card p-5">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="flex items-center gap-4 border-b pb-3 last:border-0">
                <div className="size-9 rounded-lg bg-muted" />
                <div className="flex-1 space-y-2">
                  <div className="h-4 w-40 max-w-full rounded bg-muted" />
                  <div className="h-3 w-24 rounded bg-muted" />
                </div>
                <div className="h-6 w-16 rounded-md bg-muted" />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

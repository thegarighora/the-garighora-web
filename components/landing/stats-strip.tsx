/**
 * Social-proof strip.
 *
 * SAMPLE DATA: every number below is a realistic-looking placeholder for
 * layout purposes. Wire these to real reporting figures (or remove the strip)
 * before launch — do not ship invented metrics as fact.
 */
const stats = [
  { value: "1,200+", label: "Verified drivers" },
  { value: "18", label: "Cities covered" },
  { value: "34,000+", label: "Trips completed" },
  { value: "4.8 / 5", label: "Average driver rating" },
];

export function StatsStrip() {
  return (
    <section
      aria-labelledby="stats-heading"
      className="relative overflow-hidden bg-gradient-cta py-section text-brand-on-brand"
    >
      <div
        aria-hidden="true"
        className="road-dashes pointer-events-none absolute inset-x-0 top-0 h-px text-brand-on-brand/25"
      />
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
        <h2 id="stats-heading" className="sr-only">
          GariGhora by the numbers
        </h2>
        <dl className="grid grid-cols-2 gap-x-6 gap-y-8 text-center lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <dd className="text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
                {stat.value}
              </dd>
              <dt className="text-xs font-medium tracking-wide text-brand-on-brand/80 sm:text-sm">
                {stat.label}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

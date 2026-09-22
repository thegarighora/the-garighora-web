import { Quote, Star } from "lucide-react";
import { Section, SectionHeading } from "@/components/landing/section";
import type { Content } from "@/lib/i18n";
import { localeDigits } from "@/lib/i18n/numerals";

/**
 * SAMPLE DATA: the quotes live in the locale content files and are placeholders
 * written for layout. Replace with real, consented quotes (and real
 * names/photos) before launch.
 */
export function Testimonials({ t }: { t: Content }) {
  const section = t.home.testimonials;

  return (
    <Section id="stories" aria-labelledby="stories-heading">
      <SectionHeading
        id="stories-heading"
        eyebrow={section.eyebrow}
        title={section.title}
        description={section.description}
      />

      {/* Swipeable row on mobile, plain grid from tablet up — no JS needed. */}
      <ul className="mt-block flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0">
        {section.items.map((testimonial) => (
          <li
            key={testimonial.name}
            className="flex min-w-[85%] snap-center flex-col gap-4 rounded-2xl border border-brand-hairline bg-brand-surface-raised p-6 shadow-brand-sm sm:min-w-[60%] lg:min-w-0"
          >
            <div className="flex items-center justify-between">
              <Quote
                aria-hidden="true"
                className="size-6 text-brand-primary-300"
              />
              <span
                className="flex items-center gap-0.5"
                aria-label={t.common.a11y.ratedOutOfFive(
                  localeDigits(t.locale, String(testimonial.rating))
                )}
              >
                {Array.from({ length: 5 }, (_, index) => (
                  <Star
                    key={index}
                    aria-hidden="true"
                    className={
                      index < testimonial.rating
                        ? "size-3.5 fill-brand-secondary-500 text-brand-secondary-500"
                        : "size-3.5 text-brand-hairline"
                    }
                  />
                ))}
              </span>
            </div>

            <blockquote className="text-sm leading-relaxed text-pretty text-brand-ink">
              {testimonial.quote}
            </blockquote>

            <div className="mt-auto flex items-center gap-3 border-t border-brand-hairline pt-4">
              {/* TODO: replace with a real profile photo once consented. */}
              <span
                aria-hidden="true"
                className="grid size-9 shrink-0 place-items-center rounded-full bg-brand-primary-100 text-sm font-semibold text-brand-primary-800 dark:bg-brand-surface dark:text-brand-primary-300"
              >
                {testimonial.name.charAt(0)}
              </span>
              <div className="flex min-w-0 flex-col">
                <span className="text-sm font-semibold text-brand-ink">
                  {testimonial.name}
                </span>
                <span className="truncate text-xs text-brand-ink-muted">
                  {testimonial.role}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}

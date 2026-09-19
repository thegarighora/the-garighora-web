import { cn } from "cn";

/**
 * Wordmark + mark. The mark is inline SVG using `currentColor` only, so it
 * inherits whatever brand token the surrounding element sets — no colours are
 * hard-coded here.
 *
 * TODO: replace the inline mark with the final brand asset (SVG) when design
 * delivers it. Keep it monochrome / currentColor so it stays theme-safe.
 */
export function BrandLogo({
  className,
  invert = false,
  showWordmark = true,
}: {
  className?: string;
  invert?: boolean;
  showWordmark?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span
        aria-hidden="true"
        className={cn(
          "grid size-9 shrink-0 place-items-center rounded-xl",
          invert
            ? "bg-brand-on-brand/15 text-brand-on-brand ring-1 ring-brand-on-brand/25"
            : "bg-gradient-cta text-brand-on-brand shadow-brand-sm"
        )}
      >
        <svg viewBox="0 0 24 24" className="size-5" fill="none">
          {/* A car silhouette with a return arrow underneath it. */}
          <path
            d="M4 14.5h16M5.5 14.5 7 9.6A2 2 0 0 1 8.9 8.2h6.2a2 2 0 0 1 1.9 1.4l1.5 4.9"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="8" cy="17" r="1.5" fill="currentColor" />
          <circle cx="16" cy="17" r="1.5" fill="currentColor" />
          <path
            d="M17.5 4.2a6.5 6.5 0 0 0-11 1.6"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
          <path
            d="M6.2 3v3h3"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      {showWordmark ? (
        <span
          className={cn(
            "text-lg font-semibold tracking-tight",
            invert ? "text-brand-on-brand" : "text-brand-ink"
          )}
        >
          Gari
          <span
            className={
              invert ? "text-brand-secondary-300" : "text-brand-secondary-600"
            }
          >
            Ghora
          </span>
        </span>
      ) : null}
    </span>
  );
}

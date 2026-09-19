import { ArrowLeft, ArrowRight, CircleSlash, Sparkles } from "lucide-react";
import { cn } from "cn";
import { Section, SectionHeading } from "@/components/landing/section";
import { ArrowLink } from "@/components/landing/site-link";
import { routes } from "@/lib/site-config";

/**
 * The insight section: what happens to the return leg today vs what happens on
 * GariGhora. The diagram is built from markup and brand tokens — no images.
 */
export function ProblemInsight({
  moreLink = true,
}: { moreLink?: boolean } = {}) {
  return (
    <Section id="insight" tone="surface" aria-labelledby="insight-heading">
      <SectionHeading
        id="insight-heading"
        eyebrow="The insight"
        title={
          <>
            Half of every long trip is already{" "}
            <span className="text-gradient-brand">wasted</span>
          </>
        }
        description="Every intercity rental has two legs. Only one of them carries a passenger. That empty leg is fuel the driver pays for, hours they do not earn from, and a cheap ride nobody gets to take."
      />

      {/* Sample route and fares — Dhaka <-> Cumilla figures are illustrative placeholders. */}
      <div className="mt-block grid gap-6 lg:grid-cols-2 lg:gap-8">
        <JourneyPanel
          variant="problem"
          label="Traditional rental"
          title="The driver returns empty"
          outbound={{ note: "Passenger on board", fare: "৳3,200" }}
          inbound={{ note: "Nobody on board", fare: "৳0 earned" }}
          takeaway="The driver burns fuel and hours on the way home, so that cost gets baked into every rental fare. Nobody wins."
        />
        <JourneyPanel
          variant="solution"
          label="With GariGhora"
          title="The return leg becomes a ride"
          outbound={{ note: "Passenger on board", fare: "৳3,200" }}
          inbound={{ note: "Return Car booked", fare: "৳1,100 extra" }}
          takeaway="The driver posts the empty leg as a Return Car trip. Someone heading the same way books the whole vehicle for a fraction of a normal rental."
        />
      </div>

      <p className="mx-auto mt-5 max-w-2xl rounded-2xl border border-brand-hairline bg-brand-surface-raised px-5 py-4 text-center text-sm leading-relaxed text-brand-ink-muted shadow-brand-sm sm:text-base">
        <span className="font-semibold text-brand-ink">
          A car is already going that way.
        </span>{" "}
        Don&apos;t pay for an empty seat to come back empty.
      </p>

      {moreLink ? (
        <div className="mt-4 flex justify-center">
          <ArrowLink href={routes.returnCar}>
            See how Return Car works
          </ArrowLink>
        </div>
      ) : null}
    </Section>
  );
}

type Leg = { note: string; fare: string };

function JourneyPanel({
  variant,
  label,
  title,
  outbound,
  inbound,
  takeaway,
}: {
  variant: "problem" | "solution";
  label: string;
  title: string;
  outbound: Leg;
  inbound: Leg;
  takeaway: string;
}) {
  const isSolution = variant === "solution";

  return (
    <article
      className={cn(
        "flex flex-col gap-5 rounded-3xl border p-6 sm:p-8",
        isSolution
          ? "border-brand-secondary-300 bg-gradient-card shadow-brand"
          : "border-brand-hairline bg-brand-surface-raised shadow-brand-sm"
      )}
    >
      <div className="flex items-center gap-2">
        <span
          className={cn(
            "grid size-8 place-items-center rounded-lg",
            isSolution
              ? "bg-gradient-cta text-brand-on-brand"
              : "bg-brand-surface text-brand-ink-muted"
          )}
        >
          {isSolution ? (
            <Sparkles aria-hidden="true" className="size-4" />
          ) : (
            <CircleSlash aria-hidden="true" className="size-4" />
          )}
        </span>
        <span className="text-xs font-semibold tracking-[0.16em] text-brand-ink-muted uppercase">
          {label}
        </span>
      </div>

      <h3 className="text-xl font-semibold tracking-tight text-brand-ink sm:text-2xl">
        {title}
      </h3>

      {/* Journey diagram: outbound leg, then the return leg. */}
      <div className="flex flex-col gap-4">
        <JourneyLeg
          from="Dhaka"
          to="Cumilla"
          direction="forward"
          note={outbound.note}
          fare={outbound.fare}
          state="loaded"
        />
        <JourneyLeg
          from="Cumilla"
          to="Dhaka"
          direction="back"
          note={inbound.note}
          fare={inbound.fare}
          state={isSolution ? "loaded" : "empty"}
        />
      </div>

      <p className="text-sm leading-relaxed text-brand-ink-muted sm:text-base">
        {takeaway}
      </p>
    </article>
  );
}

function JourneyLeg({
  from,
  to,
  direction,
  note,
  fare,
  state,
}: {
  from: string;
  to: string;
  direction: "forward" | "back";
  note: string;
  fare: string;
  state: "loaded" | "empty";
}) {
  const Arrow = direction === "forward" ? ArrowRight : ArrowLeft;

  return (
    <div className="flex flex-col gap-2 rounded-2xl bg-brand-surface p-4 dark:bg-brand-surface-raised">
      <div className="flex items-center gap-3 text-sm font-medium text-brand-ink">
        <span className="shrink-0">{from}</span>
        <span
          aria-hidden="true"
          className={cn(
            "road-dashes h-px flex-1",
            state === "loaded"
              ? "text-brand-primary-400"
              : "text-brand-ink-muted/50"
          )}
        />
        <Arrow
          aria-hidden="true"
          className={cn(
            "size-4 shrink-0",
            state === "loaded"
              ? "text-brand-primary-600"
              : "text-brand-ink-muted"
          )}
        />
        <span className="shrink-0">{to}</span>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span
          className={cn(
            "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
            state === "loaded"
              ? "bg-brand-success-100 text-brand-success-700"
              : "bg-brand-surface-raised text-brand-ink-muted ring-1 ring-brand-hairline dark:bg-brand-surface"
          )}
        >
          {note}
        </span>
        <span className="text-sm font-semibold text-brand-ink">{fare}</span>
      </div>
    </div>
  );
}

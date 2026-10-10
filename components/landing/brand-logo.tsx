import Image from "next/image";
import { cn } from "cn";

/**
 * The wordmark is black, so it sits on a white chip wherever the surface is a
 * gradient (`invert`) or dark mode.
 */
export function BrandLogo({
  className,
  invert = false,
}: {
  className?: string;
  invert?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-xl dark:bg-white dark:px-2 dark:py-1",
        invert && "bg-white px-2 py-1 shadow-brand-sm",
        className
      )}
    >
      <Image
        src="/logo/gari-ghora-hor.png"
        alt="Gari Ghora"
        width={2227}
        height={509}
        priority
        sizes="160px"
        className="h-8 w-auto"
      />
    </span>
  );
}

import Image from "next/image";
import { cn } from "cn";

const LOGO = { width: 2227, height: 509, sizes: "160px" };

/**
 * The black-wordmark logo suits light surfaces; the white-wordmark variant is
 * used on the hero gradient (`invert`) and in dark mode.
 */
export function BrandLogo({
  className,
  invert = false,
}: {
  className?: string;
  invert?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center", className)}>
      <Image
        {...LOGO}
        src="/logo/gari-ghora-hor.png"
        alt="Gari Ghora"
        priority
        className={cn("h-8 w-auto", invert ? "hidden" : "dark:hidden")}
      />
      <Image
        {...LOGO}
        src="/logo/gari-ghora-hor-light.png"
        alt=""
        aria-hidden="true"
        priority
        className={cn("h-8 w-auto", invert ? "block" : "hidden dark:block")}
      />
    </span>
  );
}

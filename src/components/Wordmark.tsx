import { cn } from "@/lib/utils";

type WordmarkProps = {
  className?: string;
  accentClassName?: string;
  stacked?: boolean;
};

export function Wordmark({
  className,
  accentClassName,
  stacked = false,
}: WordmarkProps) {
  const Wrapper = "span";

  if (stacked) {
    return (
      <Wrapper
        className={cn(
          "inline-flex flex-col leading-none text-ink",
          className,
        )}
      >
        <span className="text-xs font-semibold uppercase tracking-[0.6em] text-ink-muted">
          Webcap
        </span>
        <span
          className={cn(
            "text-2xl font-semibold uppercase tracking-[0.48em] text-accent",
            accentClassName,
          )}
        >
          Media
        </span>
      </Wrapper>
    );
  }

  return (
    <Wrapper
      className={cn(
        "inline-flex items-baseline gap-2 font-semibold uppercase tracking-[0.38em] text-ink",
        className,
      )}
    >
      <span className="text-sm tracking-[0.42em]">Webcap</span>
      <span
        className={cn(
          "text-base tracking-[0.42em] text-accent",
          accentClassName,
        )}
      >
        Media
      </span>
    </Wrapper>
  );
}



import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  className?: string;
  innerClassName?: string;
  title?: ReactNode;
  eyebrow?: string;
  description?: ReactNode;
  align?: "start" | "center";
  children: ReactNode;
};

export function Section({
  id,
  className,
  innerClassName,
  title,
  eyebrow,
  description,
  align = "start",
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative isolate py-[var(--space-section)]",
        className,
      )}
    >
      <div
        className={cn(
          "mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 sm:px-8 md:px-12",
          innerClassName,
        )}
      >
        {(title || description || eyebrow) && (
          <header
            className={cn(
              "flex flex-col gap-4",
              align === "center" && "text-center items-center",
            )}
          >
            {eyebrow && (
              <span className="text-xs font-semibold uppercase tracking-[0.48em] text-ink-muted">
                {eyebrow}
              </span>
            )}
            {title && (
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="max-w-2xl text-pretty text-base leading-relaxed text-ink-muted sm:text-lg">
                {description}
              </p>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}



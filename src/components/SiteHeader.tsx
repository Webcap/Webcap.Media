import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Wordmark } from "@/components/Wordmark";
import webcapLogo from "@/app/assets/webcaplogo.png";

const navItems = [
  { href: "#wiznote", label: "Wiznote" },
  { href: "#projects", label: "Projects" },
  { href: "#studio", label: "Studio" },
  { href: "#contact", label: "Contact" },
];

type SiteHeaderProps = {
  className?: string;
};

export function SiteHeader({ className }: SiteHeaderProps) {
  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-border/60 bg-surface/90 backdrop-blur",
        className,
      )}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-5 sm:px-8 md:px-12">
        <Link href="/" aria-label="Webcap Media home" className="flex items-center gap-3 transition hover:opacity-80">
          <Image
            src={webcapLogo}
            width={44}
            height={44}
            className="h-10 w-10 shrink-0 rounded-full border border-border/60 bg-white/70 p-[2px] shadow-soft"
            alt="Webcap Media logo"
            priority
          />
          <Wordmark className="text-xs sm:text-sm" accentClassName="text-accent" />
        </Link>
        <nav className="hidden items-center gap-8 text-[0.62rem] font-semibold uppercase tracking-[0.46em] text-ink-muted md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.5em] text-ink transition hover:border-accent hover:text-accent"
        >
          Start
        </Link>
      </div>
    </header>
  );
}



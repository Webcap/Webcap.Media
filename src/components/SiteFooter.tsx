import Image from "next/image";
import Link from "next/link";

import { Wordmark } from "@/components/Wordmark";
import webcapLogo from "@/app/assets/webcaplogo.png";

const footerLinks = [
  { href: "#wiznote", label: "Wiznote" },
  { href: "#projects", label: "Projects" },
  { href: "#studio", label: "Studio" },
  { href: "/privacy", label: "Privacy" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface py-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 sm:px-8 md:flex-row md:items-center md:justify-between md:px-12">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <Image
              src={webcapLogo}
              width={40}
              height={40}
              className="h-9 w-9 shrink-0 rounded-full border border-border/60 bg-white/70 p-[2px] shadow-soft"
              alt="Webcap Media logo"
            />
            <Wordmark className="text-xs sm:text-sm" accentClassName="text-accent" />
          </div>
          <p className="text-xs text-ink-muted">
            Webcap Media is a digital studio building crafted product
            experiences for ambitious teams.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-[0.62rem] font-semibold uppercase tracking-[0.46em] text-ink-muted">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <p className="text-[0.62rem] font-medium uppercase tracking-[0.42em] text-ink-muted">
          (c) {year} Webcap Media
        </p>
      </div>
    </footer>
  );
}



import Image from "next/image";
import Link from "next/link";

import { Section } from "@/components/Section";
import { Wordmark } from "@/components/Wordmark";

const wiznoteHighlights = [
  {
    title: "Realtime sync on every device",
    description:
      "Lightweight clients keep notes in sync across Android, iOS, and desktop with a resilient offline-first core.",
  },
  {
    title: "AI summarization that stays private",
    description:
      "On-device processing keeps sensitive ideas secure while delivering instant recap and action items.",
  },
  {
    title: "Spaces for growing teams",
    description:
      "Shareable spaces blend tasks, notes, and knowledge so teams can ideate, decide, and ship faster.",
  },
];

const upcomingProjects = [
  {
    name: "Framewave",
    summary: "UHD media review platform with frame-accurate annotations and automated QC.",
    status: "In discovery",
    tags: ["Media tooling", "Collaboration"],
  },
  {
    name: "Pulseboard",
    summary: "Unified product analytics dashboard tailored to lean product teams.",
    status: "Design in progress",
    tags: ["Analytics", "SaaS"],
  },
  {
    name: "Atlas Sites",
    summary: "Composable marketing sites with story-driven templates and launch automation.",
    status: "Early concept",
    tags: ["Web", "Automation"],
  },
];

const studioValues = [
  {
    title: "Relationships over releases",
    detail:
      "We partner with founders and product leads for the long-term—shipping together, learning together, iterating together.",
  },
  {
    title: "Craft at the core",
    detail:
      "From product strategy to interface polish, the craft is visible in every touchpoint your customers feel.",
  },
  {
    title: "Momentum you can measure",
    detail:
      "Design sprints, engineering rhythms, and product insights sync to keep teams aligned and users delighted.",
  },
];

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <section className="relative isolate overflow-hidden pb-[calc(var(--space-section)*0.8)] pt-[calc(var(--space-section)*0.9)]">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] overflow-hidden">
          <div className="absolute left-1/2 top-1/2 h-[520px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.32),_transparent_60%)] blur-3xl" />
        </div>
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 sm:px-8 md:px-12 lg:grid-cols-[minmax(0,1fr)_minmax(320px,380px)]">
          <div className="flex flex-col gap-10">
            <Wordmark className="text-sm tracking-[0.5em]" accentClassName="text-accent-strong" />
            <div className="flex flex-col gap-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight text-ink sm:text-5xl md:text-6xl">
                Building polished product experiences for teams with bold ideas.
              </h1>
              <p className="max-w-2xl text-pretty text-base leading-relaxed text-ink-muted sm:text-lg">
                Webcap Media is a digital studio shipping your next chapter—from concept and brand foundations
                to launch-day polish. Our latest milestone: <strong className="text-ink">Wiznote</strong>, a
                cross-platform workspace built for the way modern teams capture knowledge.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="#wiznote"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-950 shadow-soft transition hover:bg-white/90"
              >
                <span className="text-neutral-950">Explore Wiznote</span>
                <span aria-hidden className="text-neutral-950">
                  →
                </span>
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-ink transition hover:border-accent hover:text-accent"
              >
                Start a project
                <span aria-hidden>↗</span>
              </Link>
            </div>
            <div className="grid gap-6 sm:grid-cols-3">
              {[
                { label: "Platforms launched", value: "15+" },
                { label: "Active product partnerships", value: "6" },
                { label: "Founded", value: "2018" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-[var(--radius-md)] border border-border bg-surface-elevated/70 p-5 shadow-soft backdrop-blur-sm"
                >
                  <p className="text-sm text-ink-muted">{item.label}</p>
                  <p className="text-2xl font-semibold text-ink">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
          <aside className="relative overflow-hidden rounded-[var(--radius-lg)] border border-black/5 bg-white/80 p-6 shadow-soft backdrop-blur-md dark:border-white/10 dark:bg-white/5">
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.26),_transparent_65%)] dark:bg-[radial-gradient(circle_at_top,_rgba(96,165,250,0.2),_transparent_70%)]" />
            <div className="relative flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-[1.25rem] border border-white/30 bg-white/70 shadow-soft backdrop-blur">
                  <Image
                    src="/projects/wiznote/wiznote-logo.png"
                    width={42}
                    height={42}
                    alt="Wiznote logo"
                    className="h-10 w-10"
                  />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.5em] text-ink-muted">
                    Latest release
                  </p>
                  <p className="text-lg font-semibold text-ink">Wiznote</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-ink-muted">
                A calm space to capture ideas, collaborate in real time, and keep your team moving forward.
                Reimagined with a fresh visual identity, fluid interactions, and a resilient sync engine.
              </p>
              <ul className="flex flex-col gap-3 text-sm text-ink">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                  Instant canvas for structured and freeform notes
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                  Shared spaces with granular roles and permissions
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                  AI-assisted summaries that surface what matters
                </li>
              </ul>
              <Link
                href="#contact"
                className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-neutral-950 shadow-soft transition hover:bg-white/90"
              >
                <span className="text-neutral-950">Request a walkthrough</span>
                <span aria-hidden className="text-neutral-950">→</span>
              </Link>
              <Link
                href="https://play.google.com/store/apps/details?id=com.WizNote.app"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get Wiznote on Google Play"
                className="inline-flex w-fit items-center"
              >
                <Image
                  src="/badges/google-play-badge.png"
                  alt="Get it on Google Play"
                  width={220}
                  height={66}
                  priority={false}
                  className="h-14 w-auto"
                />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <Section
        id="wiznote"
        eyebrow="Flagship"
        title="Wiznote keeps distributed teams moving in sync."
        description="We evolved Wiznote from an internal prototype into a polished, cross-platform product that helps teams capture ideas, co-edit in real time, and never lose momentum."
      >
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(340px,1fr)]">
          <div className="flex flex-col gap-8">
            <div className="overflow-hidden rounded-[var(--radius-lg)] border border-border bg-surface-elevated p-8 shadow-soft">
              <h3 className="text-xl font-semibold text-ink">A workspace that feels fast, fluid, and familiar.</h3>
              <p className="mt-4 text-base leading-relaxed text-ink-muted">
                We shaped the experience around the smallest interactions—command palettes, zero-latency typing,
                tactile drag-and-drop—so every project feels effortless. Under the hood, Wiznote runs on a modular
                sync engine that keeps data resilient across devices.
              </p>
              <dl className="mt-8 grid gap-6 sm:grid-cols-2">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.4em] text-ink-muted">Platforms</dt>
                  <dd className="text-base font-medium text-ink">Android, iOS, Web, Desktop</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.4em] text-ink-muted">Live regions</dt>
                  <dd className="text-base font-medium text-ink">30+ countries</dd>
                </div>
              </dl>
            </div>
            <div className="grid gap-6 sm:grid-cols-3">
              {wiznoteHighlights.map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col gap-3 rounded-[var(--radius-md)] border border-border/70 bg-surface-elevated/80 p-6 shadow-soft"
                >
                  <h4 className="text-base font-semibold text-ink">{item.title}</h4>
                  <p className="text-sm leading-relaxed text-ink-muted">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative flex flex-col justify-between gap-6 rounded-[var(--radius-lg)] border border-black/5 bg-white/80 p-8 shadow-soft backdrop-blur-md dark:border-white/10 dark:bg-white/5">
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_rgba(96,165,250,0.28),_transparent_55%)] dark:bg-[radial-gradient(circle_at_top_right,_rgba(96,165,250,0.22),_transparent_65%)]" />
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.5em] text-ink-muted">Impact</p>
                <p className="text-lg font-semibold text-ink">
                  2.5x increase in daily active teams since relaunch
                </p>
              </div>
              <div className="rounded-[1.25rem] border border-white/30 bg-white/70 p-4 shadow-soft backdrop-blur">
                <Image
                  src="/projects/wiznote/wiznote-logo.png"
                  alt="Wiznote icon"
                  width={52}
                  height={52}
                  className="h-12 w-12"
                />
              </div>
            </div>
            <p className="text-sm leading-relaxed text-ink-muted">
              We built Wiznote end-to-end—from product research and identity through motion systems and a
              high-performing React Native + Next.js stack.
            </p>
            <div className="flex flex-wrap gap-3 text-xs font-medium uppercase tracking-[0.4em] text-ink-muted">
              <span className="rounded-full border border-border px-3 py-1">Product strategy</span>
              <span className="rounded-full border border-border px-3 py-1">Design systems</span>
              <span className="rounded-full border border-border px-3 py-1">Full-stack dev</span>
            </div>
            <Link
              href="#contact"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-neutral-950 shadow-soft transition hover:bg-white/90"
            >
              <span className="text-neutral-950">Collaborate with us</span>
              <span aria-hidden className="text-neutral-950">
                →
              </span>
            </Link>
          </div>
        </div>
      </Section>

      <Section
        id="projects"
        eyebrow="Coming Soon"
        title="More Webcap Media originals are on the way."
        description="We’re scaling a slate of new experiences—from media review to analytics—that will launch over the coming quarters."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {upcomingProjects.map((project) => (
            <article
              key={project.name}
              className="flex h-full flex-col gap-4 rounded-[var(--radius-md)] border border-border bg-surface-elevated p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-ink">{project.name}</h3>
                <span className="text-xs font-semibold uppercase tracking-[0.4em] text-accent">
                  {project.status}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-ink-muted">{project.summary}</p>
              <div className="mt-auto flex flex-wrap gap-2 text-xs font-medium uppercase tracking-[0.3em] text-ink-muted">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border/70 px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="studio"
        eyebrow="About"
        title="The studio behind the screens."
        description="We help teams ship confident releases by pairing thoughtful product research with high-velocity design and engineering."
      >
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div className="flex flex-col gap-8">
            <div className="rounded-[var(--radius-lg)] border border-border bg-surface-elevated p-6 shadow-soft">
              <h3 className="text-lg font-semibold text-ink">How we work</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                Product strategy, research, brand systems, and full-stack delivery live under one roof. We embed
                with your team, creating momentum from week one with clear roadmaps, async updates, and demos that
                keep every stakeholder aligned.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[var(--radius-md)] border border-border/60 bg-surface px-4 py-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.4em] text-ink-muted">
                    Tooling
                  </p>
                  <p className="text-sm font-medium text-ink">
                    Next.js, React Native, Expo, Prisma, Supabase, AWS
                  </p>
                </div>
                <div className="rounded-[var(--radius-md)] border border-border/60 bg-surface px-4 py-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.4em] text-ink-muted">
                    Services
                  </p>
                  <p className="text-sm font-medium text-ink">
                    Product discovery, brand identity, UX/UI, engineering
                  </p>
                </div>
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-3">
              {studioValues.map((value) => (
                <div
                  key={value.title}
                  className="flex flex-col gap-3 rounded-[var(--radius-md)] border border-border bg-surface p-6 shadow-soft"
                >
                  <h4 className="text-base font-semibold text-ink">{value.title}</h4>
                  <p className="text-sm leading-relaxed text-ink-muted">{value.detail}</p>
                </div>
              ))}
            </div>
          </div>
          <aside className="relative flex flex-1 flex-col gap-6 rounded-[var(--radius-lg)] border border-black/5 bg-white/75 p-8 shadow-soft backdrop-blur-md dark:border-white/10 dark:bg-white/5">
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(96,165,250,0.24),_transparent_60%)] dark:bg-[radial-gradient(circle_at_top_left,_rgba(148,163,184,0.18),_transparent_70%)]" />
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-ink-muted dark:text-white/80">
              Why partners stay
            </p>
            <p className="text-lg font-medium text-ink dark:text-white">
              “Webcap Media rebuilt our product from the ground up. They shipped fast without sacrificing polish,
              and our launch week conversions jumped immediately.”
            </p>
            <div className="text-sm text-ink-muted dark:text-white/80">
              <p>— Priya Desai</p>
              <p>Founder, Lumenwave</p>
            </div>
            <Link
              href="#contact"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-black/10 bg-white/80 px-5 py-2 text-sm font-semibold text-neutral-950 transition hover:border-accent hover:text-accent dark:border-white/20 dark:bg-white/40"
            >
              <span className="text-neutral-950">Meet the team</span>{" "}
              <span aria-hidden className="text-neutral-950">→</span>
            </Link>
          </aside>
        </div>
      </Section>

      <Section
        id="contact"
        eyebrow="Contact"
        title="Let’s shape what’s next."
        description="Tell us about your product goals and we’ll design a kickoff path matched to your momentum."
        align="center"
      >
        <div className="mx-auto flex w-full max-w-3xl flex-col gap-8 rounded-[var(--radius-lg)] border border-border bg-surface-elevated p-10 text-center shadow-soft">
          <p className="text-base leading-relaxed text-ink-muted">
            support@webcap.media • We typically respond within two business days with next steps and working
            session availability.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="mailto:support@webcap.media"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent-strong"
            >
              Email the studio <span aria-hidden>↗</span>
            </Link>
            <Link
              href="https://cal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-ink transition hover:border-accent hover:text-accent"
            >
              Book a discovery call <span aria-hidden>→</span>
            </Link>
          </div>
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-ink-muted">
            Available for Q1 2026 project starts
          </p>
        </div>
      </Section>
    </main>
  );
}

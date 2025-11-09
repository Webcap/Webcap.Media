import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Webcap Media collects, uses, and protects information across Wiznote and upcoming Webcap products.",
};

const sections = [
  {
    id: "information-we-collect",
    title: "Information we collect",
    points: [
      "Contact details you share with us such as name, email address, company, and role.",
      "Support and engagement history when you email us, book a strategy session, or participate in research.",
      "Usage signals from our apps (for example, feature adoption and performance metrics) that help us improve reliability. We do not collect note content by default.",
      "Device and technical metadata generated automatically when you access our services, including browser type, operating system, general location (city-level), and timestamps.",
      "Any additional information you voluntarily provide in surveys, beta programs, or user testing.",
    ],
  },
  {
    id: "how-we-use-information",
    title: "How we use information",
    points: [
      "Operate, maintain, and improve Wiznote and other Webcap products.",
      "Respond to inquiries, schedule sessions, and deliver customer support.",
      "Research and develop new features, including aggregate analytics and product experimentation.",
      "Send operational communications such as release notes or security notifications.",
      "Comply with legal obligations and enforce our agreements.",
    ],
  },
  {
    id: "sharing",
    title: "When we share information",
    points: [
      "Trusted service providers that assist with infrastructure, analytics, and customer support. They only use data on our instructions.",
      "Professional advisors such as lawyers or accountants where necessary to run our business.",
      "If required by law, regulation, or legal process.",
      "In connection with a merger, acquisition, or sale of all or a portion of our business, with appropriate safeguards.",
    ],
    footnote:
      "We do not sell your personal information. We only share what is needed to deliver the services you request.",
  },
  {
    id: "retention",
    title: "Retention",
    body: "We keep personal information for as long as it is needed to provide the services, fulfill the purposes outlined in this policy, and meet legal or contractual requirements. When information is no longer required, we take steps to delete it or anonymize it.",
  },
  {
    id: "security",
    title: "Security",
    body: "We implement administrative, technical, and physical safeguards designed to protect your information— including encryption in transit, access controls, secure development practices, and ongoing monitoring. No system can be fully secure, so we encourage you to reach out if you suspect unauthorized access.",
  },
  {
    id: "your-choices",
    title: "Your choices",
    points: [
      "Opt out of marketing emails by using the unsubscribe link or contacting us directly.",
      "Request access, correction, or deletion of your personal information by emailing support@webcap.media.",
      "If you are in the EEA, UK, or another region with specific privacy regulations, you may have additional rights. We will honor applicable data subject requests.",
    ],
  },
  {
    id: "children",
    title: "Children",
    body: "Webcap products are not directed to children under 13 (or the minimum age in your jurisdiction). We do not knowingly collect personal information from children. If you believe a child has provided us with personal data, contact us so we can take appropriate action.",
  },
  {
    id: "international",
    title: "International transfers",
    body: "We operate globally. When we transfer personal information outside of your jurisdiction, we use legal mechanisms such as Standard Contractual Clauses or rely on adequacy decisions to protect your rights.",
  },
  {
    id: "updates",
    title: "Updates to this notice",
    body: "We may update this privacy policy to reflect changes in our practices or applicable laws. We will post the revised version here with a new “Last updated” date and, when required, provide additional notice.",
  },
  {
    id: "contact",
    title: "Contact us",
    body: (
      <>
        If you have questions, requests, or concerns about this policy, email us at{" "}
        <Link className="text-accent underline-offset-4 hover:underline" href="mailto:support@webcap.media">
          support@webcap.media
        </Link>{" "}
        or write to: Webcap Media, 228 Park Ave S, PMB 87740, New York, NY 10003.
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <main className="flex flex-1 flex-col pb-[var(--space-section)] pt-[calc(var(--space-section)*0.6)]">
      <section className="mx-auto flex w-full max-w-4xl flex-col gap-8 px-6 sm:px-8 md:px-12">
        <div className="flex flex-col gap-4 text-pretty">
          <span className="text-xs font-semibold uppercase tracking-[0.48em] text-ink-muted">
            Privacy Policy
          </span>
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            How Webcap Media handles your information.
          </h1>
          <p className="text-base leading-relaxed text-ink-muted sm:text-lg">
            This policy explains what information we collect, how we use and share it, and the choices you have.
            It applies to Wiznote and any Webcap experiences that link to this notice.
          </p>
          <p className="text-sm font-medium uppercase tracking-[0.4em] text-ink-muted">
            Last updated: February 1, 2024
          </p>
        </div>

        <nav aria-label="Table of contents" className="rounded-[var(--radius-lg)] border border-border bg-surface-elevated p-6 shadow-soft">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-ink-muted">In this policy</p>
          <ul className="mt-4 grid gap-2 text-sm text-ink">
            {sections.map((section) => (
              <li key={section.id}>
                <a className="transition hover:text-accent" href={`#${section.id}`}>
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <article className="flex flex-col gap-12 text-pretty">
          {sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="rounded-[var(--radius-lg)] border border-border bg-surface p-6 shadow-soft"
            >
              <h2 className="text-xl font-semibold text-ink sm:text-2xl">{section.title}</h2>
              {"body" in section && section.body ? (
                <div className="mt-4 text-base leading-relaxed text-ink-muted">{section.body}</div>
              ) : (
                <ul className="mt-4 list-disc space-y-3 text-base leading-relaxed text-ink-muted marker:text-accent">
                  {"points" in section &&
                    section.points?.map((point, index) => (
                      <li key={`${section.id}-${index}`}>{point}</li>
                    ))}
                </ul>
              )}
              {"footnote" in section && section.footnote && (
                <p className="mt-4 text-xs font-medium uppercase tracking-[0.4em] text-ink-muted">
                  {section.footnote}
                </p>
              )}
            </section>
          ))}
        </article>
      </section>
    </main>
  );
}



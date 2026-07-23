import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Topslice HQ",
  description:
    "How Topslice HQ LLC collects, uses, and protects information across our websites and services.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy Policy | Topslice HQ",
    description:
      "How Topslice HQ LLC collects, uses, and protects information across our websites and services.",
    url: "https://topslice.io/privacy",
    siteName: "Topslice HQ",
    locale: "en_US",
    type: "website",
  },
};

const LAST_UPDATED = "July 23, 2026";

const sections = [
  {
    id: "information-we-collect",
    title: "1. Information We Collect",
    body: (
      <>
        <p>
          We collect information to operate and improve our websites and
          services. This includes:
        </p>
        <ul>
          <li>
            <strong>Information you provide.</strong> When you contact us, apply
            for a role, or sign up for one of our products, you may give us your
            name, email address, and any details you choose to include in your
            message.
          </li>
          <li>
            <strong>Usage information.</strong> We collect anonymized, aggregate
            analytics about how visitors use our sites — such as pages viewed and
            general location — using privacy-friendly analytics that do not use
            cookies or track individuals across sites.
          </li>
          <li>
            <strong>Technical information.</strong> Standard server logs may
            record your browser type, device, and IP address for security and
            diagnostics.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "how-we-use-information",
    title: "2. How We Use Information",
    body: (
      <>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Respond to your inquiries and provide our services;</li>
          <li>Operate, maintain, and improve our websites and products;</li>
          <li>Review job applications and communicate about opportunities;</li>
          <li>Protect against fraud, abuse, and security threats; and</li>
          <li>Comply with legal obligations.</li>
        </ul>
      </>
    ),
  },
  {
    id: "cookies-and-analytics",
    title: "3. Cookies & Analytics",
    body: (
      <p>
        We use Plausible Analytics, a privacy-focused analytics tool that does
        not use cookies and does not collect personally identifiable
        information. Our analytics data is aggregated and cannot be used to
        identify individual visitors. We do not sell your personal information or
        use it for cross-site advertising.
      </p>
    ),
  },
  {
    id: "how-we-share-information",
    title: "4. How We Share Information",
    body: (
      <>
        <p>
          We do not sell your personal information. We may share information
          only:
        </p>
        <ul>
          <li>
            With trusted service providers who help us operate our business
            (such as hosting and email providers), under confidentiality
            obligations;
          </li>
          <li>
            When required by law, legal process, or to protect the rights,
            safety, and property of Topslice, our users, or the public; and
          </li>
          <li>
            In connection with a business transfer, such as a merger or
            acquisition.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "data-retention",
    title: "5. Data Retention",
    body: (
      <p>
        We retain personal information only for as long as necessary to fulfill
        the purposes described in this policy, to comply with our legal
        obligations, resolve disputes, and enforce our agreements.
      </p>
    ),
  },
  {
    id: "your-rights",
    title: "6. Your Rights",
    body: (
      <p>
        Depending on where you live, you may have the right to access, correct,
        or delete the personal information we hold about you, or to object to or
        restrict certain processing. To exercise any of these rights, email us
        at{" "}
        <a href="mailto:hello@topslice.io">hello@topslice.io</a> and we will
        respond within a reasonable timeframe.
      </p>
    ),
  },
  {
    id: "security",
    title: "7. Security",
    body: (
      <p>
        We take reasonable technical and organizational measures to protect
        information against loss, misuse, and unauthorized access. However, no
        method of transmission or storage is completely secure, and we cannot
        guarantee absolute security.
      </p>
    ),
  },
  {
    id: "childrens-privacy",
    title: "8. Children's Privacy",
    body: (
      <p>
        Our websites and services are not directed to children under 13, and we
        do not knowingly collect personal information from children. If you
        believe a child has provided us with personal information, please
        contact us and we will delete it.
      </p>
    ),
  },
  {
    id: "changes",
    title: "9. Changes to This Policy",
    body: (
      <p>
        We may update this Privacy Policy from time to time. When we do, we will
        revise the &ldquo;last updated&rdquo; date above. We encourage you to
        review this page periodically to stay informed about how we protect your
        information.
      </p>
    ),
  },
  {
    id: "contact",
    title: "10. Contact Us",
    body: (
      <p>
        If you have any questions about this Privacy Policy or our data
        practices, contact us at{" "}
        <a href="mailto:hello@topslice.io">hello@topslice.io</a> or by mail at
        Topslice HQ LLC, 33 Irving Pl, New York, NY 10003, United States.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <section className="relative overflow-hidden bg-[#FFF8F3] pt-32 pb-16 sm:pt-36 sm:pb-20">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-[#FC6700]/10 blur-3xl"
          />
          <div className="container-width relative">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#FC6700]">
              Legal
            </p>
            <h1 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight text-[#2D2D2D]">
              Privacy Policy
            </h1>
            <p className="mt-4 max-w-2xl text-[0.975rem] leading-relaxed text-zinc-500">
              This policy explains how Topslice HQ LLC collects, uses, and
              protects information across our websites and services. We keep it
              short, plain, and honest.
            </p>
            <p className="mt-6 text-xs text-zinc-400">
              Last updated: {LAST_UPDATED}
            </p>
          </div>
        </section>

        {/* Body */}
        <section className="py-14 sm:py-20">
          <div className="container-width">
            <div className="prose-privacy max-w-2xl space-y-12">
              {sections.map((s) => (
                <div key={s.id} id={s.id} className="scroll-mt-24">
                  <h2 className="text-xl font-semibold tracking-tight text-[#2D2D2D]">
                    {s.title}
                  </h2>
                  <div className="mt-3 space-y-4 text-[0.95rem] leading-relaxed text-zinc-600 [&_a]:font-medium [&_a]:text-[#FC6700] [&_a:hover]:underline [&_strong]:font-semibold [&_strong]:text-zinc-800 [&_ul]:mt-3 [&_ul]:space-y-2 [&_ul]:pl-5 [&_li]:list-disc [&_li]:marker:text-[#FC6700]">
                    {s.body}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

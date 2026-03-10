import { ArrowUpRight } from "lucide-react";
import Logo from "./Logo";

const links = [
  { label: "About", href: "#about" },
  { label: "What We Do", href: "#what-we-do" },
];

export default function Footer() {
  return (
    <footer id="footer" className="border-t border-zinc-100 bg-white">
      <div className="container-width py-14 sm:py-16">
        {/* Top row: logo + email CTA */}
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <Logo />
            <p className="mt-3 max-w-xs text-[0.88rem] leading-relaxed text-zinc-400">
              Building the future of digital infrastructure — one company at a time.
            </p>
          </div>

          <div className="sm:text-right">
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
              Get in touch
            </p>
            <a
              href="mailto:hello@topslice.com"
              className="group mt-2 inline-flex items-center gap-1.5 text-[0.95rem] font-medium text-zinc-900 transition-colors hover:text-indigo-600"
            >
              hello@topslice.com
              <ArrowUpRight className="h-4 w-4 text-zinc-300 transition-all group-hover:text-indigo-600 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 pt-6 border-t border-zinc-100 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-5 flex-wrap">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[0.82rem] text-zinc-400 transition-colors hover:text-zinc-700"
              >
                {l.label}
              </a>
            ))}
          </div>
          <p className="text-[0.82rem] text-zinc-400">
            &copy; {new Date().getFullYear()} Topslice HQ LLC &middot; New York City
          </p>
        </div>
      </div>
    </footer>
  );
}

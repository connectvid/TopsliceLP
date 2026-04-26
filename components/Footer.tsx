"use client";

import { MapPin, Globe } from "lucide-react";
import { motion } from "framer-motion";
import Logo from "./Logo";

const navLinks = [
  { label: "What We Build", href: "#products" },
  { label: "Careers", href: "#careers" },
];

const offices = [
  {
    city: "New York",
    address: "33 Irving Pl, New York, NY 10003, United States",
  },
  {
    city: "Dhaka",
    address: "27 Shaptak Square (Level 7), Plot No. 380, Road No. 16, Dhanmondi, Dhaka",
  },
];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 16 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true, margin: "-60px" } as const,
  transition: { duration: 0.5, delay, ease: [0.25, 0.4, 0.25, 1] },
});

export default function Footer() {
  return (
    <footer className="bg-[#FFF8F3]">
      {/* CTA band */}
      <div className="bg-gradient-to-r from-[#FC6700] to-[#E55D00]">
        <div className="container-width py-14 sm:py-16 text-center">
          <motion.h3
            {...fadeUp(0)}
            className="text-2xl sm:text-3xl font-bold text-white tracking-tight"
          >
            Want to work with us?
          </motion.h3>
          <motion.p
            {...fadeUp(0.05)}
            className="mt-3 text-white/70 text-[0.95rem] max-w-md mx-auto"
          >
            Whether you want to join the team or explore a partnership,
            we&apos;d love to hear from you.
          </motion.p>
          <motion.div {...fadeUp(0.1)} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="mailto:hello@topslice.io"
              className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#FC6700] transition-all hover:shadow-lg hover:shadow-black/10 active:scale-[0.97]"
            >
              hello@topslice.io
            </a>
            <a
              href="#careers"
              className="rounded-full border-2 border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10 active:scale-[0.97]"
            >
              View Open Roles
            </a>
          </motion.div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-width py-14 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-3 text-sm text-zinc-500 leading-relaxed max-w-xs">
              A remote-first holding company building and operating 10+ digital
              businesses across SaaS, services, and media since 2018.
            </p>
            {/* Social icons */}
            <div className="mt-5 flex items-center gap-2">
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white border border-orange-200/80 text-zinc-400 transition-all hover:bg-[#FC6700] hover:border-[#FC6700] hover:text-white"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a
                href="#"
                aria-label="X / Twitter"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white border border-orange-200/80 text-zinc-400 transition-all hover:bg-[#FC6700] hover:border-[#FC6700] hover:text-white"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white border border-orange-200/80 text-zinc-400 transition-all hover:bg-[#FC6700] hover:border-[#FC6700] hover:text-white"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#FC6700]">
              Company
            </p>
            <ul className="mt-4 space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-zinc-600 hover:text-[#FC6700] transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="mailto:hello@topslice.io" className="text-sm text-zinc-600 hover:text-[#FC6700] transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Offices */}
          {offices.map((office) => (
            <div key={office.city} className="lg:col-span-3">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#FC6700] flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" />
                {office.city} Office
              </p>
              <p className="mt-4 text-sm text-zinc-600 leading-relaxed">
                {office.address}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-orange-200/60 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-xs text-zinc-400">
            &copy; {new Date().getFullYear()} Topslice HQ LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-xs text-zinc-400">
            <Globe className="h-3.5 w-3.5 text-[#FC6700]" />
            Remote-first &middot; New York &middot; Dhaka
          </div>
        </div>
      </div>
    </footer>
  );
}

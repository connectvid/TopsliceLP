"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 20 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true, margin: "-60px" } as const,
  transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] },
};

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-width">
        <motion.div
          {...fadeUp}
          className="relative mx-auto max-w-3xl rounded-2xl bg-zinc-950 px-6 py-14 sm:px-14 sm:py-20 text-center overflow-hidden"
        >
          {/* Gradient accents */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-[400px] h-[260px] rounded-full bg-indigo-500/15 blur-[80px]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-16 -right-16 w-[240px] h-[240px] rounded-full bg-violet-500/10 blur-[60px]"
          />

          <div className="relative">
            <p className="text-sm font-semibold text-indigo-400">About Us</p>
            <h2 className="mt-3 text-2xl sm:text-3xl font-bold tracking-[-0.025em] text-white leading-tight">
              Built by founders. For builders.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-[0.98rem] leading-relaxed text-zinc-400">
              Topslice HQ LLC is a New York-based technology holding company. We
              operate lean, move fast, and build products that create real value
              for real people.
            </p>
            <div className="mt-6 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[0.8rem] text-zinc-400">
              <MapPin className="h-3.5 w-3.5 text-indigo-400" />
              New York City
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

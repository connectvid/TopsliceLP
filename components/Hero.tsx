"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: [0.25, 0.4, 0.25, 1] },
});

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[85dvh] items-center justify-center overflow-hidden bg-white">
      {/* Aurora gradient orbs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/3 w-[800px] h-[500px] rounded-full bg-gradient-to-br from-indigo-200/60 via-violet-200/40 to-transparent blur-[100px] animate-aurora" />
        <div className="absolute right-0 bottom-0 translate-x-1/4 translate-y-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-tl from-blue-100/50 via-indigo-100/30 to-transparent blur-[100px] animate-aurora-slow" />
      </div>

      {/* Subtle grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      <div className="container-width relative text-center pt-24 pb-16 sm:pt-32 sm:pb-20">
        {/* Badge */}
        <motion.div {...fade(0)}>
          <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3.5 py-1 text-[0.78rem] font-medium text-zinc-500 shadow-sm">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-500 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-indigo-600" />
            </span>
            New York City &middot; Technology Holding Company
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...fade(0.08)}
          className="mt-7 text-[2.5rem] sm:text-[3.25rem] md:text-[3.75rem] lg:text-[4.25rem] font-bold tracking-[-0.035em] leading-[1.08] text-zinc-950"
        >
          We build & scale
          <br />
          <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
            digital companies
          </span>
        </motion.h1>

        {/* Subhead */}
        <motion.p
          {...fade(0.16)}
          className="mx-auto mt-5 max-w-[500px] text-[1.05rem] leading-relaxed text-zinc-500"
        >
          We build, acquire, and grow a focused portfolio of digital businesses
          from our base in New York City.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fade(0.24)}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href="#what-we-do"
            className="group flex items-center gap-2 rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-zinc-900/10 transition-all hover:bg-zinc-800 hover:shadow-xl hover:shadow-zinc-900/15 active:scale-[0.98]"
          >
            See What We Do
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#about"
            className="flex items-center rounded-full border border-zinc-200 bg-white px-5 py-2.5 text-sm font-medium text-zinc-700 shadow-sm transition-all hover:border-zinc-300 hover:bg-zinc-50 active:scale-[0.98]"
          >
            Learn More
          </a>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}

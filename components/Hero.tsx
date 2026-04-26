"use client";

import { motion } from "framer-motion";

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
});

const marqueeItems = [
  "SaaS Platforms",
  "Business Services",
  "Media Properties",
  "Digital Products",
  "Content & Publishing",
  "Formation & Compliance",
  "Remote-First",
  "10+ Companies",
];

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center bg-white overflow-hidden">
      {/* Animated gradient orbs */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 right-0 w-[900px] h-[900px] rounded-full bg-[#FC6700]/[0.14] blur-[160px] -translate-y-1/4 translate-x-1/4 animate-aurora" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-[#FC6700]/[0.10] blur-[130px] translate-y-1/3 -translate-x-1/4 animate-aurora-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-orange-200/[0.18] blur-[120px] animate-aurora-mid" />
      </div>

      <div className="container-width relative pt-32 pb-20 sm:pt-44 sm:pb-32">
        <motion.h1
          {...fade(0)}
          className="text-[3rem] sm:text-[4rem] lg:text-[5rem] font-bold tracking-[-0.04em] leading-[1] text-zinc-900"
        >
          Building the future,
          <br />
          <span className="text-[#FC6700]">one company at a time.</span>
        </motion.h1>

        <motion.p
          {...fade(0.12)}
          className="mt-8 max-w-lg text-[1.15rem] leading-[1.75] text-zinc-600"
        >
          We&apos;re a remote-first team of builders behind 10+ digital
          companies spanning SaaS, business services, and media.
          Everything built in-house. Everything growing.
        </motion.p>

        <motion.div {...fade(0.2)} className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#products"
            className="rounded-full bg-gradient-to-b from-[#FC6700] to-[#E55D00] px-8 py-4 text-[0.9rem] font-semibold text-white shadow-lg shadow-[#FC6700]/25 transition-all hover:shadow-xl hover:shadow-[#FC6700]/35 active:scale-[0.97]"
          >
            What We Do
          </a>
          <a
            href="#careers"
            className="rounded-full border-2 border-[#FC6700]/30 px-8 py-4 text-[0.9rem] font-semibold text-[#FC6700] transition-all hover:bg-[#FC6700]/8 hover:border-[#FC6700]/50 active:scale-[0.97]"
          >
            Join the Team
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          {...fade(0.3)}
          className="mt-16 flex flex-wrap gap-10 sm:gap-14"
        >
          {[
            ["10+", "Companies Built"],
            ["3", "Verticals"],
            ["2018", "Year Founded"],
          ].map(([val, label]) => (
            <div key={label}>
              <p className="text-2xl sm:text-3xl font-bold text-[#FC6700]">{val}</p>
              <p className="mt-1 text-sm text-zinc-500">{label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Category marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="absolute bottom-10 inset-x-0 overflow-hidden"
      >
        <div className="animate-marquee flex items-center gap-8 whitespace-nowrap w-max">
          {[...marqueeItems, ...marqueeItems].map((name, i) => (
            <span key={i} className="flex items-center gap-8">
              <span className="text-sm font-medium text-zinc-300">{name}</span>
              <span className="h-1 w-1 rounded-full bg-[#FC6700]/30" />
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

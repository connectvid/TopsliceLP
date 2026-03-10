"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Identify",
    body: "We scan for digital businesses in underserved niches — products with strong retention, recurring revenue, and room for operational improvement.",
  },
  {
    num: "02",
    title: "Acquire or Build",
    body: "For acquisitions, we move quickly and keep founders involved. For new builds, we start with a lean MVP and validate before scaling. Fundamentals first.",
  },
  {
    num: "03",
    title: "Compound",
    body: "We grow through organic channels — SEO, product iteration, and strategic partnerships. No aggressive paid spend. Patient capital, disciplined execution.",
  },
];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true, margin: "-60px" } as const,
  transition: { duration: 0.5, delay, ease: [0.25, 0.4, 0.25, 1] },
});

export default function HowWeOperate() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-50/80 to-white -z-10" />

      <div className="container-width">
        <motion.div {...fadeUp(0)} className="max-w-2xl">
          <p className="text-sm font-semibold text-indigo-600">Our Process</p>
          <h2 className="mt-2 text-3xl sm:text-[2.25rem] font-bold tracking-[-0.025em] text-zinc-950 leading-tight">
            How we operate
          </h2>
          <p className="mt-3 text-zinc-500 text-[1.02rem] leading-relaxed max-w-lg">
            A repeatable playbook built around capital efficiency, organic growth,
            and long-term ownership.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-px rounded-2xl border border-zinc-200 bg-zinc-200 overflow-hidden sm:grid-cols-3">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              {...fadeUp(0.06 + i * 0.06)}
              className="bg-white p-6 sm:p-8 flex flex-col"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-100 text-[0.7rem] font-bold text-zinc-400 tabular-nums">
                {s.num}
              </span>
              <h3 className="mt-4 text-lg font-semibold tracking-[-0.01em] text-zinc-900">
                {s.title}
              </h3>
              <p className="mt-2 text-[0.92rem] leading-relaxed text-zinc-500">
                {s.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

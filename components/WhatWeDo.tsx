"use client";

import { motion } from "framer-motion";
import { Box, Briefcase } from "lucide-react";
import { type LucideIcon } from "lucide-react";

interface Vertical {
  icon: LucideIcon;
  label: string;
  title: string;
  description: string;
}

const verticals: Vertical[] = [
  {
    icon: Box,
    label: "Software",
    title: "SaaS Products",
    description:
      "We build and operate software products that solve real problems — spanning AI, marketing automation, finance tools, and digital infrastructure.",
  },
  {
    icon: Briefcase,
    label: "Services",
    title: "Business Formation",
    description:
      "We run lean, SEO-driven services that help entrepreneurs start, formalize, and grow their businesses quickly and affordably.",
  },
];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true, margin: "-60px" } as const,
  transition: { duration: 0.5, delay, ease: [0.25, 0.4, 0.25, 1] },
});

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="section-padding bg-white">
      <div className="container-width">
        <motion.div {...fadeUp(0)} className="max-w-2xl">
          <p className="text-sm font-semibold text-indigo-600">What We Do</p>
          <h2 className="mt-2 text-3xl sm:text-[2.25rem] font-bold tracking-[-0.025em] text-zinc-950 leading-tight">
            Two verticals. One mission.
          </h2>
          <p className="mt-3 text-zinc-500 text-[1.02rem] leading-relaxed max-w-lg">
            We focus on building durable, profitable businesses at the
            intersection of software and services.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {verticals.map((v, i) => (
            <motion.div
              key={v.title}
              {...fadeUp(0.08 + i * 0.06)}
              className="group rounded-2xl border border-zinc-200 bg-zinc-50/50 p-6 sm:p-8 transition-all duration-300 hover:border-zinc-300 hover:bg-white hover:shadow-lg hover:shadow-zinc-100"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 shadow-md shadow-indigo-600/20">
                <v.icon className="h-5 w-5 text-white" strokeWidth={1.75} />
              </div>
              <p className="mt-4 text-[0.7rem] font-semibold uppercase tracking-widest text-zinc-400">
                {v.label}
              </p>
              <h3 className="mt-1 text-lg font-semibold tracking-[-0.01em] text-zinc-900">
                {v.title}
              </h3>
              <p className="mt-2 text-[0.92rem] leading-relaxed text-zinc-500">
                {v.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

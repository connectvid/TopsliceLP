"use client";

import { motion } from "framer-motion";
import { Monitor, Briefcase, Play } from "lucide-react";
import { type LucideIcon } from "lucide-react";

interface Category {
  icon: LucideIcon;
  title: string;
  count: string;
  description: string;
}

const categories: Category[] = [
  {
    icon: Briefcase,
    title: "Business Services",
    count: "4+",
    description:
      "Formation, compliance, and tax ID services. Helping entrepreneurs register and run businesses across multiple jurisdictions.",
  },
  {
    icon: Monitor,
    title: "SaaS Platforms",
    count: "3+",
    description:
      "Software products across marketing, productivity, and team collaboration. Built for retention and organic growth.",
  },
  {
    icon: Play,
    title: "Media Properties",
    count: "3+",
    description:
      "Content-driven channels and digital publications. Built on programmatic SEO, editorial quality, and audience trust.",
  },
];

const scaleIn = (delay: number) => ({
  initial: { opacity: 0, scale: 0.95, y: 12 } as const,
  whileInView: { opacity: 1, scale: 1, y: 0 } as const,
  viewport: { once: true, margin: "-100px" } as const,
  transition: { duration: 0.5, delay, ease: [0.25, 0.4, 0.25, 1] },
});

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 16 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true, margin: "-100px" } as const,
  transition: { duration: 0.5, delay, ease: [0.25, 0.4, 0.25, 1] },
});

export default function Products() {
  return (
    <section id="products" className="py-20 sm:py-28 bg-[#FFF8F3]">
      <div className="container-width">
        <motion.div {...fadeUp(0)} className="text-center max-w-lg mx-auto">
          <p className="text-sm font-semibold text-[#FC6700]">What We Build</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900">
            Three verticals. 10+ companies.
          </h2>
          <p className="mt-3 text-zinc-600 leading-relaxed">
            Everything we operate is built in-house, grown organically,
            and designed to last.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              {...scaleIn(0.08 + i * 0.08)}
              whileHover={{ y: -4 }}
              className="group relative rounded-2xl bg-white border border-orange-200/80 p-8 transition-all duration-300 hover:shadow-xl hover:shadow-orange-100/60 hover:border-[#FC6700]/25 overflow-hidden"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FC6700]/10 group-hover:bg-[#FC6700]/15 transition-colors">
                  <cat.icon className="h-5 w-5 text-[#FC6700]" strokeWidth={1.75} />
                </div>
                <span className="text-2xl font-bold text-[#FC6700]/20 group-hover:text-[#FC6700]/40 transition-colors">
                  {cat.count}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-bold text-zinc-900">
                {cat.title}
              </h3>
              <p
                className="mt-2 text-sm leading-relaxed text-zinc-600"
                dangerouslySetInnerHTML={{ __html: cat.description }}
              />
              <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-[#FC6700] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.div>
          ))}
        </div>

        <motion.p
          {...fadeUp(0.35)}
          className="mt-10 text-center text-sm font-semibold text-[#FC6700]"
        >
          Built from scratch. Growing every day.
        </motion.p>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  MapPin,
  Clock,
  Gift,
  Moon,
  Plane,
  UserPlus,
  Banknote,
  Laptop,
  GraduationCap,
  Heart,
  ArrowRight,
} from "lucide-react";
import { type LucideIcon } from "lucide-react";

interface Perk {
  icon: LucideIcon;
  title: string;
  highlight: string;
}

const perks: Perk[] = [
  {
    icon: MapPin,
    title: "Work from literally anywhere",
    highlight: "Fully remote",
  },
  {
    icon: Clock,
    title: "Set your own hours, just 3h daily overlap",
    highlight: "Flexible schedule",
  },
  {
    icon: Laptop,
    title: "We cover your desk, gear, and tools",
    highlight: "Home office budget",
  },
  {
    icon: GraduationCap,
    title: "Courses, books, and conferences on us",
    highlight: "Learning budget",
  },
  {
    icon: Heart,
    title: "Mental health days, no questions asked",
    highlight: "Wellness-first",
  },
  {
    icon: Gift,
    title: "Two bonuses a year for Eid ul-Fitr & Eid ul-Adha",
    highlight: "Festival bonuses",
  },
  {
    icon: Moon,
    title: "Shorter hours + a company gift every Ramadan",
    highlight: "Ramadan support",
  },
  {
    icon: Plane,
    title: "Team trips every year. Last one was Cox's Bazar",
    highlight: "Company retreats",
  },
  {
    icon: UserPlus,
    title: "Cash bonus when your referral gets hired",
    highlight: "Referral rewards",
  },
  {
    icon: Banknote,
    title: "Salary hits your account in the first week",
    highlight: "Early payday",
  },
];

const openRoles = [
  {
    title: "Business Development Intern",
    type: "Paid Internship",
    location: "Remote",
    duration: "3-6 months",
    href: "/careers/business-development-intern",
  },
  {
    title: "VD/Editor Intern",
    type: "Paid Internship",
    location: "Remote",
    duration: "3-6 months",
    href: "/careers/vd-editor-intern",
  },
];

const slideIn = (delay: number, fromLeft: boolean) => ({
  initial: { opacity: 0, x: fromLeft ? -20 : 20 } as const,
  whileInView: { opacity: 1, x: 0 } as const,
  viewport: { once: true, margin: "-100px" } as const,
  transition: { duration: 0.5, delay, ease: [0.25, 0.4, 0.25, 1] },
});

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 16 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true, margin: "-100px" } as const,
  transition: { duration: 0.5, delay, ease: [0.25, 0.4, 0.25, 1] },
});

export default function Careers() {
  return (
    <section id="careers" className="py-20 sm:py-28 bg-white">
      <div className="container-width">
        <motion.div {...fadeUp(0)} className="text-center max-w-lg mx-auto">
          <p className="text-sm font-semibold text-[#FC6700]">Join Us</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900">
            Why people love working here
          </h2>
          <p className="mt-3 text-zinc-600 leading-relaxed">
            Remote, flexible, and genuinely human. Not the kind you put on
            a poster. The kind you actually feel.
          </p>
        </motion.div>

        {/* Perks */}
        <div className="mt-12 grid gap-3 sm:grid-cols-2">
          {perks.map((perk, i) => (
            <motion.div
              key={perk.highlight}
              {...slideIn(0.04 + i * 0.03, i % 2 === 0)}
              className="group flex items-center gap-4 rounded-2xl border border-orange-200/80 bg-[#FFF8F3] px-5 py-4 transition-all hover:border-[#FC6700]/25 hover:shadow-md hover:shadow-orange-100/40"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FC6700]/10 flex-shrink-0 group-hover:bg-[#FC6700]/15 transition-colors">
                <perk.icon className="h-5 w-5 text-[#FC6700]" strokeWidth={1.75} />
              </div>
              <div>
                <p className="text-[0.92rem] font-medium text-zinc-800">
                  {perk.title}
                </p>
                <p className="text-[0.72rem] font-semibold uppercase tracking-widest text-[#FC6700]/70 mt-0.5">
                  {perk.highlight}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Open Roles */}
        <motion.div {...fadeUp(0.3)} className="mt-16">
          <h3 className="text-center text-xl font-bold text-zinc-900">
            Open Roles
          </h3>
          <div className="mt-6 space-y-3">
            {openRoles.map((role, i) => (
              <motion.div key={role.title} {...fadeUp(0.32 + i * 0.05)}>
                <Link
                  href={role.href}
                  className="group flex items-center justify-between rounded-2xl border border-orange-200/80 bg-[#FFF8F3] px-6 py-5 transition-all hover:border-[#FC6700]/25 hover:shadow-lg hover:shadow-orange-100/50"
                >
                  <div>
                    <p className="text-[1rem] font-semibold text-zinc-900 group-hover:text-[#FC6700] transition-colors">
                      {role.title}
                    </p>
                    <div className="mt-1 flex items-center gap-3 text-xs text-zinc-500">
                      <span>{role.type}</span>
                      <span className="text-zinc-300">&middot;</span>
                      <span>{role.location}</span>
                      <span className="text-zinc-300">&middot;</span>
                      <span>{role.duration}</span>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-zinc-300 group-hover:text-[#FC6700] group-hover:translate-x-1 transition-all" />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

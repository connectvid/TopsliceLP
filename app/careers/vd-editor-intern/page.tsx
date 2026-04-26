"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, MapPin, Clock, Briefcase, Calendar, Banknote } from "lucide-react";
import Logo from "@/components/Logo";

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: [0.25, 0.4, 0.25, 1] },
});

export default function VDEditorIntern() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-orange-50">
        <div className="mx-auto max-w-[800px] px-6 py-5 flex items-center justify-between">
          <Link href="/">
            <Logo />
          </Link>
          <Link
            href="/#careers"
            className="flex items-center gap-2 text-sm text-zinc-400 hover:text-[#FC6700] transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            All Roles
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-[800px] px-6 py-16 sm:py-24">
        {/* Title */}
        <motion.div {...fade(0)}>
          <p className="text-sm font-semibold text-[#FC6700]">Open Role</p>
          <h1 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900">
            VD/Editor Intern
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-zinc-600">
            <span className="flex items-center gap-1.5">
              <Briefcase className="h-4 w-4" /> Paid Internship
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4" /> Remote
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" /> 3-6 months
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" /> 15-20 hrs/week
            </span>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div {...fade(0.1)} className="mt-12 space-y-10">
          <div>
            <h2 className="text-lg font-semibold text-zinc-900">About the Role</h2>
            <p className="mt-3 text-[0.95rem] leading-[1.8] text-zinc-600">
              We&apos;re looking for a creative video editor to join our media
              team. You&apos;ll help produce content across our portfolio of
              YouTube channels and digital properties. Cutting, editing, and
              shaping videos that engage real audiences. This is hands-on,
              creative work with a team that moves fast.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-zinc-900">What You&apos;ll Do</h2>
            <ul className="mt-3 space-y-2.5">
              {[
                "Edit and produce video content for YouTube and social platforms",
                "Work with raw footage to create polished, engaging final cuts",
                "Add graphics, subtitles, transitions, and sound design",
                "Collaborate with the content team on video concepts and formats",
                "Help maintain a consistent visual style across channels",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[0.95rem] text-zinc-600">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#FC6700] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-zinc-900">Who You Are</h2>
            <ul className="mt-3 space-y-2.5">
              {[
                "Comfortable with video editing tools (Premiere Pro, Final Cut, DaVinci, or CapCut)",
                "Good eye for pacing, storytelling, and visual composition",
                "Familiar with YouTube content and what makes videos perform",
                "Self-motivated and able to manage your own time remotely",
                "Bonus: experience with motion graphics or thumbnail design",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[0.95rem] text-zinc-600">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#FC6700] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-zinc-900">Perks</h2>
            <p className="mt-3 text-[0.95rem] leading-[1.8] text-zinc-600">
              Remote-first, flexible schedule, home office budget, learning
              budget, festival bonuses, Ramadan support, annual company trips,
              and salary within the first week of every month.
            </p>
          </div>
        </motion.div>

        {/* Apply */}
        <motion.div
          {...fade(0.2)}
          className="mt-14 rounded-2xl bg-[#FFF8F3] border border-orange-100/60 p-8 sm:p-10 text-center"
        >
          <h3 className="text-xl font-bold text-zinc-900">
            Interested? Apply now.
          </h3>
          <p className="mt-2 text-sm text-zinc-600">
            Send your resume, portfolio or sample work, and a short note about yourself.
          </p>
          <a
            href="mailto:careers@topslice.io?subject=Application: VD/Editor Intern"
            className="mt-6 inline-flex rounded-full bg-[#FC6700] px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#E55D00] hover:shadow-lg hover:shadow-[#FC6700]/20 active:scale-[0.98]"
          >
            Apply to careers@topslice.io
          </a>
        </motion.div>
      </main>
    </div>
  );
}

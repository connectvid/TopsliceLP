"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true, margin: "-60px" } as const,
  transition: { duration: 0.5, delay, ease: [0.25, 0.4, 0.25, 1] },
});

export default function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="container-width text-center">
        <motion.div {...fadeUp(0)}>
          <p className="text-sm font-semibold text-indigo-600 tracking-wide">
            Contact
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-[-0.025em] text-zinc-950">
            Let&apos;s build something together
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[1.05rem] leading-relaxed text-zinc-500">
            Interested in partnering, exploring an acquisition, or just want to
            connect? We&apos;d love to hear from you.
          </p>
          <a
            href="mailto:hello@topslice.com"
            className="group mt-10 inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-zinc-900/10 transition-all hover:bg-zinc-800 hover:shadow-xl hover:shadow-zinc-900/15 active:scale-[0.98]"
          >
            hello@topslice.com
            <ArrowUpRight className="h-4 w-4 text-zinc-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

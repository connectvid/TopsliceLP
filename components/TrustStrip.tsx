"use client";

import { motion } from "framer-motion";
import { MapPin, Globe } from "lucide-react";

export default function TrustStrip() {
  return (
    <section className="py-12 sm:py-16 bg-white border-y border-orange-200/60">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="flex items-center gap-2 text-[#FC6700]">
            <Globe className="h-4 w-4" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em]">
              Remote-First Company
            </span>
          </div>
          <p className="text-center text-[0.95rem] text-zinc-600">
            A privately held holding company. Building digital businesses since{" "}
            <span className="font-semibold text-zinc-900">2018</span>.
          </p>
          <div className="mt-2 flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-sm text-zinc-500">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-[#FC6700]" />
              New York City, USA
            </span>
            <span className="hidden sm:block text-zinc-300">&middot;</span>
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-[#FC6700]" />
              Dhaka, Bangladesh
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const links = [
  { label: "About", href: "#about" },
  { label: "What We Do", href: "#what-we-do" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background,border,box-shadow] duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-zinc-200/50 shadow-[0_1px_2px_rgba(0,0,0,0.03)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="container-width flex h-16 items-center justify-between">
        <a href="#">
          <Logo />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[0.84rem] font-medium text-zinc-500 transition-colors hover:text-zinc-900"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#footer"
            className="rounded-full bg-zinc-900 px-5 py-2 text-[0.84rem] font-medium text-white transition-all hover:bg-zinc-800 active:scale-[0.98]"
          >
            Contact Us
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden rounded-lg p-2 text-zinc-700 hover:bg-zinc-100 transition-colors"
          aria-label="Menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden border-t border-zinc-100 bg-white/95 backdrop-blur-xl"
          >
            <div className="container-width py-3 flex flex-col gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <div className="pt-2">
                <a
                  href="#footer"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center rounded-full bg-zinc-900 py-2.5 text-sm font-medium text-white"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

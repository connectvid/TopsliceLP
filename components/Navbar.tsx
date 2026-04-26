"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const links = [
  { label: "Products", href: "#products" },
  { label: "Careers", href: "#careers" },
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
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-orange-100/50 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="container-width flex h-16 items-center justify-between">
        <a href="#">
          <Logo />
        </a>

        <div className="hidden sm:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-zinc-500 transition-colors hover:text-[#FC6700]"
            >
              {l.label}
            </a>
          ))}
          <a
            href="mailto:hello@topslice.io"
            className="rounded-full bg-[#FC6700] px-5 py-2 text-sm font-medium text-white transition-all hover:bg-[#E55D00] active:scale-[0.98]"
          >
            Contact
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="sm:hidden p-2 text-zinc-500"
          aria-label="Menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="sm:hidden overflow-hidden bg-white border-t border-orange-50"
          >
            <div className="container-width py-4 flex flex-col gap-2">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2.5 text-sm font-medium text-zinc-600 rounded-lg hover:bg-orange-50"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="mailto:hello@topslice.io"
                onClick={() => setOpen(false)}
                className="mt-2 flex justify-center rounded-full bg-[#FC6700] py-2.5 text-sm font-medium text-white"
              >
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

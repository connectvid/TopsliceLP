"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Globe,
  Mountain,
  ShieldCheck,
  Landmark,
  BadgeCheck,
  Hash,
  Stamp,
  FileCheck2,
  FileText,
  PiggyBank,
  ReceiptText,
  MessagesSquare,
  Bot,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { type LucideIcon } from "lucide-react";

interface Product {
  icon: LucideIcon;
  name: string;
  domain: string;
  url: string;
  category: string;
  description: string;
}

const products: Product[] = [
  // Business Services
  {
    icon: Building2,
    name: "Wyoming LLC",
    domain: "wyomingllc.co",
    url: "https://wyomingllc.co",
    category: "Business Services",
    description:
      "Form a Wyoming LLC as a non-resident from $297 + state fee. EIN, operating agreement, and registered agent included, with 24 to 48 hour formation.",
  },
  {
    icon: Globe,
    name: "Wyoming LLC",
    domain: "wyomingllc.xyz",
    url: "https://wyomingllc.xyz",
    category: "Business Services",
    description:
      "Form a Wyoming LLC fully online, with no US visit and no SSN. Guides, banking options, and tax help for international founders.",
  },
  {
    icon: Mountain,
    name: "Wyoming LLC",
    domain: "wyomingllcformation.co",
    url: "https://wyomingllcformation.co",
    category: "Business Services",
    description:
      "Wyoming LLC formation done the Wyoming way. $497 total, line-item transparent, with state filing, registered agent, EIN, and bank applications.",
  },
  {
    icon: ShieldCheck,
    name: "Anonymous LLC",
    domain: "anonymousllc.co",
    url: "https://anonymousllc.co",
    category: "Business Services",
    description:
      "Form an anonymous LLC in Wyoming, New Mexico, Delaware, or Nevada, with owner privacy built in from day one.",
  },
  {
    icon: Landmark,
    name: "Delaware LLC",
    domain: "delawarellc.co",
    url: "https://delawarellc.co",
    category: "Business Services",
    description:
      "Form a Delaware LLC in 48 hours for $397 + state fee. Done-for-you filing with EIN and registered agent for non-residents.",
  },
  {
    icon: Globe,
    name: "Delaware LLC",
    domain: "delewarellc.com",
    url: "https://delewarellc.com",
    category: "Business Services",
    description:
      "Form a Delaware LLC online from abroad. Fast filing, an EIN with no SSN, and US bank applications for non-US founders.",
  },
  {
    icon: BadgeCheck,
    name: "EIN",
    domain: "ein.so",
    url: "https://ein.so",
    category: "Business Services",
    description:
      "Get a US federal tax ID (EIN) without an SSN. Fast, done-for-you filing for founders anywhere in the world.",
  },
  {
    icon: Hash,
    name: "EIN Number",
    domain: "ein-number.com",
    url: "https://ein-number.com",
    category: "Business Services",
    description:
      "Your EIN in seven business days, guaranteed. A streamlined filing service for non-US business owners.",
  },
  {
    icon: Stamp,
    name: "EIN for LLC",
    domain: "einforllc.co",
    url: "https://einforllc.co",
    category: "Business Services",
    description:
      "LLC-specialist EIN filing with the classification set correctly. Delivered in 10 business days or your money back.",
  },
  {
    icon: FileCheck2,
    name: "ITIN",
    domain: "itin.so",
    url: "https://itin.so",
    category: "Business Services",
    description:
      "ITIN application service for non-US residents. Prepared and filed for you, typically within seven days.",
  },
  {
    icon: FileText,
    name: "ITIN Number",
    domain: "itin-number.com",
    url: "https://itin-number.com",
    category: "Business Services",
    description:
      "A guided ITIN application service that prepares and submits your paperwork, ready within about seven days.",
  },
  {
    icon: PiggyBank,
    name: "WeCostSeg",
    domain: "wecostseg.com",
    url: "https://wecostseg.com",
    category: "Business Services",
    description:
      "Engineer-led cost segregation studies that help property owners accelerate depreciation and cut their taxes.",
  },
  {
    icon: ReceiptText,
    name: "Form 5472",
    domain: "form5472.tax",
    url: "https://form5472.tax",
    category: "Business Services",
    description:
      "Form 5472 and Pro Forma 1120 prepared, reviewed, and filed for foreign-owned US LLCs and corporations. $299 flat.",
  },

  // SaaS
  {
    icon: MessagesSquare,
    name: "BizReply",
    domain: "bizreply.co",
    url: "https://bizreply.co",
    category: "SaaS",
    description:
      "AI that promotes your brand across social media. Finds relevant conversations and drafts on-brand replies.",
  },
  {
    icon: Bot,
    name: "ChatSonic",
    domain: "chat-sonic.ai",
    url: "https://chat-sonic.ai",
    category: "SaaS",
    description:
      "Free AI chat with the top models in one place. Switch between leading LLMs without juggling subscriptions.",
  },

  // AI & Media
  {
    icon: Sparkles,
    name: "Open Journey",
    domain: "openjourney.art",
    url: "https://openjourney.art",
    category: "AI & Media",
    description:
      "A free AI image generator that turns text prompts into striking artwork in seconds.",
  },
];

const scaleIn = (delay: number) => ({
  initial: { opacity: 0, scale: 0.95, y: 12 } as const,
  whileInView: { opacity: 1, scale: 1, y: 0 } as const,
  viewport: { once: true, margin: "-80px" } as const,
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
            The companies we operate.
          </h2>
          <p className="mt-3 text-zinc-600 leading-relaxed">
            A growing portfolio across business services, SaaS, and AI.
            Everything built in-house, grown organically, and designed to last.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, i) => (
            <motion.a
              key={product.domain}
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              {...scaleIn(0.05 + (i % 3) * 0.06)}
              whileHover={{ y: -4 }}
              className="group relative flex flex-col rounded-2xl bg-white border border-orange-200/80 p-7 transition-all duration-300 hover:shadow-xl hover:shadow-orange-100/60 hover:border-[#FC6700]/25 overflow-hidden"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FC6700]/10 group-hover:bg-[#FC6700]/15 transition-colors">
                  <product.icon
                    className="h-5 w-5 text-[#FC6700]"
                    strokeWidth={1.75}
                  />
                </div>
                <ArrowUpRight className="h-5 w-5 text-zinc-300 transition-all group-hover:text-[#FC6700] group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>

              <div className="mt-5 flex items-center gap-2">
                <h3 className="text-lg font-bold text-zinc-900">
                  {product.name}
                </h3>
                <span className="text-[0.7rem] font-semibold uppercase tracking-widest text-[#FC6700]/70">
                  {product.category}
                </span>
              </div>

              <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                {product.description}
              </p>

              <span className="mt-4 text-[0.8rem] font-medium text-zinc-400 group-hover:text-[#FC6700] transition-colors">
                {product.domain}
              </span>

              <div className="absolute bottom-0 left-7 right-7 h-0.5 bg-[#FC6700] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.a>
          ))}
        </div>

        <motion.p
          {...fadeUp(0.35)}
          className="mt-10 text-center text-sm font-semibold text-[#FC6700]"
        >
          And more in the works. Built from scratch, growing every day.
        </motion.p>
      </div>
    </section>
  );
}

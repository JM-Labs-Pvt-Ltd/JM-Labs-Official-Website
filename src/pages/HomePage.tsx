import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Coins,
  Orbit,
  ShieldCheck,
  Sparkles,
  Workflow,
  FileCheck2,
  Rocket,
} from "lucide-react";
import { motion } from "framer-motion";

import { ArchitectureScrollSection } from "@/components/sections/architecture-scroll";
import type { BentoItem } from "@/components/ui/bento-grid";
import { BentoGrid } from "@/components/ui/bento-grid";
import { buttonVariants } from "@/components/ui/button";
import { products } from "@/data/site-content";
import { cn } from "@/lib/utils";

const parentSignals = [
  {
    icon: Building2,
    title: "JM Labs at the center",
    body: "JM Labs introduces the company once, then routes visitors into real product detail. Bullion Master now sits under that layer with clearer product, legal, and trust context.",
  },
  {
    icon: Orbit,
    title: "Connected product pages",
    body: "Bullion Master has its own space for ledgers, stock, reports, and security workflows, while future JM Labs products can launch into the same navigation and structure.",
  },
  {
    icon: ShieldCheck,
    title: "Trust built in",
    body: "Privacy, terms, and product pages now connect back to JM Labs while still reflecting Bullion Master's local-first storage, backup, and PIN-based security model.",
  },
] as const;

const studioNotes = [
  "Bullion Master now has room to explain Daily Ledger, Net Daily Position, and Reports Center in product-specific detail.",
  "The parent site can support future JM Labs products without breaking legal links, navigation, or brand consistency.",
  "Security, backup, and restore messaging now matches the actual Bullion Master product flow more closely.",
] as const;

const ecosystemBentoItems: BentoItem[] = [
  {
    title: "Bullion Master",
    meta: "Live product",
    description:
      "Bullion Master brings Daily Ledger, Net Daily Position, Master Ledger, Reports Center, and PIN-backed backup workflows into one local-first operating system.",
    icon: <BadgeCheck className="h-4 w-4 text-emerald-500" />,
    href: "./bullion-master.html",
    status: "Live",
    tags: ["Ledger", "Reports", "Security"],
    cta: "Open product →",
    colSpan: 2,
    hasPersistentHover: true,
  },
  {
    title: "Trade and stock workflows",
    meta: "Bullion Master modules",
    description:
      "Inventory, Refinery Desk, Badla Register, and Open Positions support bullion-specific work that goes beyond a standard accounting flow.",
    icon: <Workflow className="h-4 w-4 text-blue-500" />,
    href: "./bullion-master.html",
    status: "Active",
    tags: ["Inventory", "Settlement"],
    cta: "See workflows →",
  },
  {
    title: "Security and continuity",
    meta: "On-device first",
    description:
      "The app startup flow checks session, token, device security, profile state, and database readiness, then layers PIN, backup password, restore, auto-wipe, and duress protections on top.",
    icon: <FileCheck2 className="h-4 w-4 text-amber-500" />,
    href: "./privacy-policy.html",
    status: "Updated",
    tags: ["PIN", "Backup"],
    cta: "Review security →",
  },
  {
    title: "Next Release",
    meta: "In development",
    description:
      "The next JM Labs product already has a destination in the ecosystem, so launch can happen inside the same company shell, footer, legal layer, and navigation model.",
    icon: <Rocket className="h-4 w-4 text-purple-500" />,
    href: "./next-product.html",
    status: "In Build",
    tags: ["Roadmap", "Launch"],
    colSpan: 2,
    cta: "View release slot →",
  },
];

export function HomePage() {
  return (
    <div className="space-y-24 pb-20 pt-10 md:space-y-32 md:pt-16">
      <section className="px-4 md:px-6">
        <div className="hero-shell mx-auto grid max-w-7xl items-center gap-10 overflow-hidden rounded-[40px] border border-white/10 px-6 py-10 md:grid-cols-[1.1fr,0.9fr] md:px-10 md:py-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 space-y-8"
          >
            <div className="eyebrow">
              <Sparkles className="h-4 w-4" />
              JM Labs ecosystem
            </div>

            <div className="space-y-5">
              <h1 className="hero-title max-w-4xl">
                JM Labs builds focused business software.
                <span className="block text-primary">Bullion Master leads the first live product line.</span>
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
                JM Labs is the parent company behind purpose-built business software. Bullion Master is live today with ledger, stock, reporting, and security workflows for bullion operations, and the next product is already being developed inside the same ecosystem.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a className={buttonVariants({ size: "lg" })} href="#products">
                Explore products
                <ArrowRight className="h-4 w-4" />
              </a>
              <a className={buttonVariants({ variant: "secondary", size: "lg" })} href="./bullion-master.html">
                Visit Bullion Master
              </a>
            </div>

            <div className="grid gap-4 pt-4 md:grid-cols-3">
              {parentSignals.map((signal, index) => (
                <motion.div
                  key={signal.title}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + index * 0.1, duration: 0.55 }}
                  className="panel"
                >
                  <signal.icon className="h-5 w-5 text-primary" />
                  <h2 className="mt-5 font-display text-lg text-foreground">{signal.title}</h2>
                  <p className="mt-3 text-sm text-muted-foreground">{signal.body}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-[34px] bg-[radial-gradient(circle_at_top,rgba(247,186,83,0.28),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(83,114,255,0.24),transparent_34%)] blur-2xl" />
            <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(14,20,31,0.95),rgba(7,11,19,0.98))] p-4 shadow-[0_30px_90px_rgba(2,8,20,0.45)]">
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80"
                alt="High-end hardware workstation"
                className="h-[420px] w-full rounded-[26px] object-cover"
              />
              <div className="absolute inset-x-8 bottom-8 rounded-[28px] border border-white/10 bg-[rgba(8,12,20,0.82)] p-5 backdrop-blur-xl">
                <p className="font-display text-xs uppercase tracking-[0.35em] text-primary/[0.75]">
                  Ecosystem snapshot
                </p>
                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  <div className="rounded-[20px] border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-white/[0.6]">Bullion Master</span>
                      <BadgeCheck className="h-4 w-4 text-emerald-300" />
                    </div>
                    <p className="mt-3 text-lg font-semibold text-white">Daily Ledger, Net Daily Position, and Reports Center live</p>
                  </div>
                  <div className="rounded-[20px] border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-white/[0.6]">Product in development</span>
                      <Coins className="h-4 w-4 text-primary" />
                    </div>
                    <p className="mt-3 text-lg font-semibold text-white">Dedicated JM Labs launch slot already prepared</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="overview">
        <ArchitectureScrollSection />
      </section>

      <section className="px-4 md:px-6">
        <div className="mx-auto max-w-7xl space-y-5">
          <p className="eyebrow">System overview</p>
          <h2 className="section-heading">The JM Labs ecosystem reads more clearly when the parent brand and Bullion Master modules are shown together.</h2>
          <p className="max-w-3xl text-lg text-muted-foreground">
            This grid ties the company layer to the real Bullion Master product surface: ledger control, bullion workflows, security posture, and the next release path.
          </p>
        </div>
        <BentoGrid items={ecosystemBentoItems} />
      </section>

      <section className="px-4 md:px-6" id="products">
        <div className="mx-auto max-w-7xl space-y-10">
          <div className="space-y-5">
            <p className="eyebrow">Products under JM Labs</p>
            <h2 className="section-heading">Each product has its own page inside one shared JM Labs brand system.</h2>
            <p className="max-w-3xl text-lg text-muted-foreground">
              Bullion Master is already live, and the next JM Labs product already has a dedicated home in the website structure.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {products.map((product, index) => (
              <motion.a
                key={product.name}
                href={product.href}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="group overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(16,23,35,0.94),rgba(7,11,19,0.98))] shadow-[0_26px_70px_rgba(2,8,20,0.28)]"
              >
                <div
                  className={cn(
                    "relative h-72 overflow-hidden",
                    product.imageFit === "contain"
                      ? "bg-[radial-gradient(circle_at_top,rgba(247,186,83,0.14),transparent_30%),linear-gradient(180deg,rgba(10,16,26,0.98),rgba(7,11,19,1))]"
                      : ""
                  )}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className={cn(
                      "h-full w-full transition duration-700",
                      product.imageFit === "contain"
                        ? "object-contain object-top p-4 group-hover:scale-[1.02]"
                        : "object-cover group-hover:scale-105"
                    )}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(6,10,18,0.78))]" />
                  <span className="absolute left-6 top-6 rounded-full border border-white/15 bg-black/20 px-3 py-1 text-[0.65rem] uppercase tracking-[0.28em] text-white/[0.8] backdrop-blur">
                    {product.status}
                  </span>
                </div>

                <div className="space-y-5 p-6">
                  <div>
                    <h3 className="font-display text-3xl text-foreground">{product.name}</h3>
                    <p className="mt-3 text-base text-muted-foreground">{product.description}</p>
                  </div>

                  <div className="grid gap-2">
                    {product.bullets.map((bullet) => (
                      <div key={bullet} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span className="h-2 w-2 rounded-full bg-primary" />
                        {bullet}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <p className="text-sm font-medium text-foreground">{product.tagline}</p>
                    <ArrowRight className="h-5 w-5 text-primary transition group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 md:px-6">
        <div className="mx-auto grid max-w-7xl gap-6 rounded-[36px] border border-white/10 bg-[linear-gradient(180deg,rgba(14,20,31,0.92),rgba(8,12,20,0.98))] p-6 md:grid-cols-[0.95fr,1.05fr] md:p-10">
          <div className="space-y-5">
            <p className="eyebrow">Built for growth</p>
            <h2 className="section-heading">The site now supports Bullion Master deeply and still leaves clean space for the next JM Labs product.</h2>
          </div>
          <div className="grid gap-4">
            {studioNotes.map((note) => (
              <div key={note} className="panel flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <BadgeCheck className="h-4 w-4" />
                </span>
                <p className="text-sm text-muted-foreground md:text-base">{note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 md:px-6" id="connect">
        <div className="cta-panel mx-auto max-w-7xl rounded-[38px] px-6 py-10 md:px-10 md:py-14">
          <div className="grid gap-8 md:grid-cols-[1.15fr,0.85fr] md:items-end">
            <div className="space-y-5">
              <p className="eyebrow">Explore JM Labs</p>
              <h2 className="section-heading">Discover the flagship product today and follow the next JM Labs release as it develops.</h2>
              <p className="max-w-2xl text-lg text-muted-foreground">
                Bullion Master now sits inside a connected JM Labs experience with company context, product detail, privacy policy, and terms all linked together.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 md:justify-end">
              <a className={buttonVariants({ size: "lg" })} href="./bullion-master.html">
                Explore Bullion Master
              </a>
              <a className={buttonVariants({ variant: "secondary", size: "lg" })} href="./next-product.html">
                View product in development
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

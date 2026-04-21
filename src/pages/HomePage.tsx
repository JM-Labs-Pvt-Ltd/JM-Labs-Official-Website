import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Coins,
  FileCheck2,
  LockKeyhole,
  Orbit,
  Rocket,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Workflow,
} from "lucide-react";
import { motion } from "framer-motion";

import { ArchitectureScrollSection } from "@/components/sections/architecture-scroll";
import { DailyPnLChart } from "@/components/ui/daily-pnl-chart";
import { MarketTicker } from "@/components/ui/market-ticker";
import { StatCounter } from "@/components/ui/stat-counter";
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

const keyStats = [
  {
    value: 10,
    suffix: "+",
    label: "Core Modules",
    sub: "Ledger, inventory, reports, staff, security",
    icon: Workflow,
  },
  {
    value: 100,
    suffix: "%",
    label: "Local-First",
    sub: "Your data stays on your device",
    icon: LockKeyhole,
  },
  {
    value: 6,
    suffix: "",
    label: "Security Layers",
    sub: "PIN, backup, restore, auto-wipe, duress",
    icon: ShieldCheck,
  },
] as const;

export function HomePage() {
  return (
    <div className="space-y-0 pb-20 pt-10 md:pt-16">

      {/* ─── Hero ─── */}
      <section className="px-4 pb-0 md:px-6">
        <div className="hero-shell mx-auto grid max-w-7xl items-center gap-10 overflow-hidden rounded-[40px] border border-border px-6 py-10 md:grid-cols-[1.1fr,0.9fr] md:px-10 md:py-14">

          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 space-y-8"
          >
            <div className="eyebrow">
              <Sparkles className="h-3.5 w-3.5" />
              JM Labs ecosystem
            </div>

            <div className="space-y-5">
              <h1 className="hero-title max-w-4xl">
                JM Labs builds focused{" "}
                <em style={{ fontStyle: "italic" }} className="gradient-text">
                  business software.
                </em>
                <span className="block text-primary mt-1">
                  Bullion Master leads the first live product line.
                </span>
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
                JM Labs is the parent company behind purpose-built business software. Bullion Master is live today with ledger, stock, reporting, and security workflows for bullion operations.
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
                  transition={{ delay: 0.18 + index * 0.1, duration: 0.55 }}
                  className="panel"
                >
                  <signal.icon className="h-5 w-5 text-primary" />
                  <h2 className="mt-5 font-display text-[1.1rem] text-foreground" style={{ fontWeight: 600 }}>
                    {signal.title}
                  </h2>
                  <p className="mt-3 text-sm text-muted-foreground">{signal.body}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: animated dashboard preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.93 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.82, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="image-glow absolute inset-0 rounded-[34px] blur-2xl" />
            <div className="dashboard-preview relative overflow-hidden rounded-[34px] border border-border p-4 md:p-5">

              {/* Dashboard header */}
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <span className="data-badge">Portfolio Overview</span>
                  <p className="mt-0.5 font-display text-base font-semibold text-foreground">
                    Bullion Master
                  </p>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-xs" style={{ background: "var(--glass-background)" }}>
                  <span className="live-dot" />
                  <span className="text-emerald-500 font-medium" style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "0.7rem" }}>
                    Live
                  </span>
                </div>
              </div>

              {/* Chart area */}
              <div className="chart-container rounded-[24px] p-3 md:p-4">
                <div className="mb-2 flex items-center justify-between">
                  <span className="data-badge">Daily Net Position — this week</span>
                  <div className="flex items-center gap-1.5 text-emerald-500" style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "0.7rem" }}>
                    <TrendingUp className="h-3 w-3" />
                    <span>↑ ₹27,300 today</span>
                  </div>
                </div>
                <DailyPnLChart className="w-full" />
              </div>

              {/* Floating stat cards */}
              <div className="mt-3 grid grid-cols-2 gap-2.5">
                <div className="stat-card floating rounded-[20px] border border-border p-4">
                  <span className="data-badge">Today's P&amp;L</span>
                  <p className="mt-1.5 font-display text-2xl font-semibold text-emerald-500" style={{ letterSpacing: "-0.02em" }}>
                    ↑ ₹27,300
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">Net daily position</p>
                </div>
                <div className="stat-card floating-alt rounded-[20px] border border-border p-4">
                  <span className="data-badge">Week Total</span>
                  <p className="mt-1.5 font-display text-2xl font-semibold text-primary" style={{ letterSpacing: "-0.02em" }}>
                    ₹1,51,100
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">7-day net P&amp;L</p>
                </div>
              </div>

              {/* Metrics strip */}
              <div className="mt-2.5 metrics-band flex items-center gap-4 rounded-[16px] border border-border px-4 py-2.5">
                {[
                  { label: "Entries", value: "1,284" },
                  { label: "Parties", value: "48" },
                  { label: "Security", value: "Protected", color: "text-emerald-500" },
                  { label: "Backup", value: "Synced", color: "text-primary" },
                ].map((item, i) => (
                  <div key={item.label} className="flex items-center gap-4">
                    {i > 0 && <span className="h-6 w-px bg-border" />}
                    <div>
                      <span className="data-badge">{item.label}</span>
                      <p
                        className={cn(
                          "text-sm font-semibold",
                          item.color ?? "text-foreground"
                        )}
                        style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "0.78rem" }}
                      >
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Market Ticker ─── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-6"
      >
        <MarketTicker />
      </motion.div>

      {/* ─── Key Stats ─── */}
      <section className="px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-4 md:grid-cols-3">
            {keyStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.1, duration: 0.55 }}
                className="panel flex flex-col items-start gap-3"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-border" style={{ background: "var(--glass-background)" }}>
                  <stat.icon className="h-4.5 w-4.5 text-primary" />
                </div>
                <div>
                  <div
                    className="gradient-text font-display text-5xl font-bold md:text-6xl"
                    style={{ letterSpacing: "-0.03em", lineHeight: 1 }}
                  >
                    <StatCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="mt-2 font-display text-lg font-semibold text-foreground" style={{ fontWeight: 600 }}>
                    {stat.label}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">{stat.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Gold divider ─── */}
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="gold-line" />
      </div>

      {/* ─── Architecture scroll ─── */}
      <section id="overview">
        <ArchitectureScrollSection />
      </section>

      {/* ─── Bento grid ─── */}
      <section className="px-4 md:px-6">
        <div className="mx-auto max-w-7xl space-y-5">
          <p className="eyebrow">System overview</p>
          <h2 className="section-heading max-w-4xl">
            The JM Labs ecosystem reads more clearly when the parent brand and{" "}
            <em style={{ fontStyle: "italic" }}>Bullion Master modules</em> are shown together.
          </h2>
          <p className="max-w-3xl text-lg text-muted-foreground">
            This grid ties the company layer to the real Bullion Master product surface: ledger control, bullion workflows, security posture, and the next release path.
          </p>
        </div>
        <BentoGrid items={ecosystemBentoItems} />
      </section>

      {/* ─── Products ─── */}
      <section className="px-4 py-16 md:px-6 md:py-20" id="products">
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
                className="surface-shell group overflow-hidden rounded-[32px] border border-border"
              >
                <div
                  className={cn(
                    "relative h-72 overflow-hidden",
                    product.imageFit === "contain" ? "product-stage" : ""
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
                  <div className="image-fade absolute inset-0" />
                  <span className="soft-pill absolute left-6 top-6 rounded-full border border-border px-3 py-1 text-[0.65rem] uppercase tracking-[0.28em] text-foreground/75 backdrop-blur">
                    {product.status}
                  </span>
                </div>

                <div className="space-y-5 p-6">
                  <div>
                    <h3 className="font-display text-3xl text-foreground" style={{ fontWeight: 600 }}>
                      {product.name}
                    </h3>
                    <p className="mt-3 text-base text-muted-foreground">{product.description}</p>
                  </div>

                  <div className="grid gap-2">
                    {product.bullets.map((bullet) => (
                      <div key={bullet} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
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

      {/* ─── Built for growth ─── */}
      <section className="px-4 md:px-6">
        <div className="surface-shell mx-auto grid max-w-7xl gap-6 rounded-[36px] border border-border p-6 md:grid-cols-[0.95fr,1.05fr] md:p-10">
          <div className="space-y-5">
            <p className="eyebrow">Built for growth</p>
            <h2 className="section-heading">
              The site now supports Bullion Master deeply and still leaves clean space for the{" "}
              <em style={{ fontStyle: "italic" }} className="gradient-text">next JM Labs product.</em>
            </h2>
          </div>
          <div className="grid gap-4">
            {studioNotes.map((note, i) => (
              <motion.div
                key={note}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="panel flex items-center gap-3"
              >
                <span className="inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <BadgeCheck className="h-4 w-4" />
                </span>
                <p className="text-sm text-muted-foreground md:text-base">{note}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="px-4 py-16 md:px-6 md:py-20" id="connect">
        <div className="cta-panel mx-auto max-w-7xl rounded-[38px] px-6 py-10 md:px-10 md:py-14">
          <div className="grid gap-8 md:grid-cols-[1.15fr,0.85fr] md:items-end">
            <div className="space-y-5">
              <p className="eyebrow">Explore JM Labs</p>
              <h2 className="section-heading">
                Discover the flagship product today and follow the{" "}
                <em style={{ fontStyle: "italic" }} className="gradient-text">next JM Labs release</em>{" "}
                as it develops.
              </h2>
              <p className="max-w-2xl text-lg text-muted-foreground">
                Bullion Master now sits inside a connected JM Labs experience with company context, product detail, privacy policy, and terms all linked together.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 md:justify-end">
              <a className={buttonVariants({ size: "lg" })} href="./bullion-master.html">
                <Coins className="h-4 w-4" />
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

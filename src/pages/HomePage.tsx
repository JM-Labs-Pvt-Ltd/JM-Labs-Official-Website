import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Cloud,
  Coins,
  LockKeyhole,
  RefreshCcw,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
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

/* ── Feature cards for the 6-up grid ── */
const coreFeatures = [
  {
    icon: BookOpen,
    title: "Daily Ledger",
    body: "Party-wise balances, running transactions, and day-level profitability in one place.",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
  {
    icon: TrendingUp,
    title: "Net Daily Position",
    body: "Overbought and oversold lots tracked in real time with automatic P&L calculation.",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    icon: BarChart3,
    title: "Reports Center",
    body: "Operational summaries, settlement outputs, and archive exports in one tap.",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    icon: Workflow,
    title: "Bullion Workflows",
    body: "Inventory, Refinery Desk, Badla Register, and Open Positions built for bullion desks.",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
  {
    icon: LockKeyhole,
    title: "PIN Security",
    body: "6-digit lock with failed-attempt counter, auto-wipe, duress protection, and session guard.",
    color: "text-rose-500",
    bg: "bg-rose-500/10",
  },
  {
    icon: Cloud,
    title: "Cloud Backup",
    body: "Encrypted local and cloud backup with full restore — your data is never locked away.",
    color: "text-cyan-500",
    bg: "bg-cyan-500/10",
  },
] as const;

const keyStats = [
  { value: 10, suffix: "+", label: "Core Modules" },
  { value: 100, suffix: "%", label: "Local-First" },
  { value: 6,  suffix: "",  label: "Security Layers" },
  { value: 48, suffix: "+", label: "Supported Workflows" },
] as const;

const ecosystemBentoItems: BentoItem[] = [
  {
    title: "Bullion Master",
    meta: "Live product",
    description:
      "Daily Ledger, Net Daily Position, Master Ledger, Reports Center, and PIN-backed backup workflows in one local-first platform.",
    icon: <ShieldCheck className="h-4 w-4 text-emerald-500" />,
    href: "./bullion-master.html",
    status: "Live",
    tags: ["Ledger", "Reports", "Security"],
    cta: "Open product →",
    colSpan: 2,
    hasPersistentHover: true,
  },
  {
    title: "Bullion workflows",
    meta: "Specialist modules",
    description:
      "Inventory, Refinery Desk, Badla Register, and Open Positions — modules that go beyond a standard accounting flow.",
    icon: <Workflow className="h-4 w-4 text-blue-500" />,
    href: "./bullion-master.html",
    status: "Active",
    tags: ["Inventory", "Settlement"],
    cta: "See modules →",
  },
  {
    title: "Security architecture",
    meta: "On-device first",
    description:
      "Startup validation, PIN lock, backup password, auto-wipe, duress triggers, and restore — all inside the operating model.",
    icon: <LockKeyhole className="h-4 w-4 text-amber-500" />,
    href: "./privacy-policy.html",
    status: "Verified",
    tags: ["PIN", "Backup", "Restore"],
    cta: "Review →",
  },
  {
    title: "Next Release",
    meta: "In development",
    description:
      "The next JM Labs product launches into the same navigation, legal layer, and brand system — no rebuild needed.",
    icon: <RefreshCcw className="h-4 w-4 text-purple-500" />,
    href: "./next-product.html",
    status: "In Build",
    tags: ["Roadmap", "Launch"],
    colSpan: 2,
    cta: "View slot →",
  },
];

/* ── Stagger helper ── */
const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: EASE, delay },
});

export function HomePage() {
  return (
    <div className="pb-20">

      {/* ══════════════════════════════
          HERO — centered, full-width
      ══════════════════════════════ */}
      <section className="hero-shell relative overflow-hidden px-4 pt-16 pb-12 md:px-6 md:pt-28 md:pb-16">
        {/* Decorative gold orb — top left */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 -top-24 h-[520px] w-[520px] rounded-full opacity-30"
          style={{
            background: "radial-gradient(circle, var(--primary) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        {/* Decorative gold orb — bottom right */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-20 -right-28 h-[400px] w-[400px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, var(--primary) 0%, transparent 70%)",
            filter: "blur(70px)",
          }}
        />

        <div className="relative mx-auto max-w-5xl text-center">

          {/* Eyebrow */}
          <motion.div {...fadeUp(0)} className="flex justify-center">
            <p className="eyebrow">
              <Sparkles className="h-3 w-3" />
              Bullion Master · JM Labs
            </p>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            {...fadeUp(0.08)}
            className="hero-title mx-auto mt-6 max-w-4xl"
          >
            The operating system
            <br />
            for{" "}
            <span className="gradient-text italic">bullion desks.</span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            {...fadeUp(0.16)}
            className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl"
          >
            Bullion Master brings Daily Ledger, Net Daily Position, Inventory,
            Reports Center, and PIN-backed security into one focused,{" "}
            local-first platform.
          </motion.p>

          {/* CTAs */}
          <motion.div
            {...fadeUp(0.22)}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              className={buttonVariants({ size: "lg" })}
              href="./bullion-master.html"
            >
              <Coins className="h-4 w-4" />
              Explore Bullion Master
            </a>
            <a
              className={buttonVariants({ variant: "secondary", size: "lg" })}
              href="#products"
            >
              See all products
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            {...fadeUp(0.3)}
            className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
          >
            {[
              { icon: LockKeyhole, label: "On-Device Security" },
              { icon: Cloud, label: "Encrypted Backup" },
              { icon: ShieldCheck, label: "Local-First Storage" },
              { icon: Users, label: "Multi-Party Support" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 text-muted-foreground"
                style={{
                  fontSize: "0.75rem",
                  fontFamily: "var(--font-mono, monospace)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                <Icon className="h-3.5 w-3.5 text-primary/60" />
                {label}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════
          STATS ROW
      ══════════════════════════════ */}
      <section className="px-4 py-12 md:px-6">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border md:grid-cols-4"
            style={{ background: "var(--border)" }}
          >
            {keyStats.map((stat) => (
              <div
                key={stat.label}
                className="group flex flex-col items-center justify-center gap-1 px-6 py-10 transition-colors duration-200"
                style={{ background: "var(--panel-background)" }}
              >
                <span
                  className="gradient-text font-display text-5xl font-bold"
                  style={{ letterSpacing: "-0.04em" }}
                >
                  <StatCounter value={stat.value} suffix={stat.suffix} />
                </span>
                <span
                  className="mt-2 text-center text-xs text-muted-foreground"
                  style={{
                    fontFamily: "var(--font-mono, monospace)",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                  }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════
          DASHBOARD PREVIEW — full-width
      ══════════════════════════════ */}
      <section className="px-4 pt-12 pb-0 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.65, ease: EASE }}
          className="mx-auto max-w-5xl"
        >
          <div
            className="overflow-hidden rounded-2xl border border-border"
            style={{ background: "var(--panel-background)" }}
          >
            {/* Card chrome bar */}
            <div
              className="flex items-center justify-between border-b border-border px-5 py-3"
              style={{ background: "var(--shell-background)" }}
            >
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-500/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
              </div>
              <span
                className="text-muted-foreground"
                style={{
                  fontFamily: "var(--font-mono, monospace)",
                  fontSize: "0.68rem",
                  letterSpacing: "0.12em",
                }}
              >
                BULLION MASTER — DAILY NET POSITION
              </span>
              <div className="flex items-center gap-1.5">
                <span className="live-dot" />
                <span
                  className="text-emerald-500"
                  style={{
                    fontFamily: "var(--font-mono, monospace)",
                    fontSize: "0.68rem",
                  }}
                >
                  LIVE SESSION
                </span>
              </div>
            </div>

            {/* Inner dashboard layout */}
            <div className="grid md:grid-cols-[1fr,260px]">

              {/* Chart area */}
              <div className="border-b border-border p-5 md:border-b-0 md:border-r md:p-8">
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div>
                    <p className="data-badge">Daily Net Position</p>
                    <p
                      className="mt-2 font-display text-3xl font-bold text-emerald-500 md:text-4xl"
                      style={{ letterSpacing: "-0.03em" }}
                    >
                      ↑ ₹27,300
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">Today vs yesterday</p>
                  </div>
                  <div className="text-right">
                    <p className="data-badge">Week Total</p>
                    <p
                      className="mt-2 font-display text-2xl font-bold text-foreground"
                      style={{ letterSpacing: "-0.02em" }}
                    >
                      ₹1,51,100
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">7-day net P&L</p>
                  </div>
                </div>
                <DailyPnLChart className="w-full" />
              </div>

              {/* Sidebar metrics */}
              <div className="grid divide-y divide-border">
                {[
                  { label: "Ledger Entries", value: "1,284", icon: BookOpen, color: "text-amber-500" },
                  { label: "Active Parties", value: "48", icon: Users, color: "text-blue-500" },
                  { label: "Security",       value: "Protected",  icon: LockKeyhole, color: "text-emerald-500" },
                  { label: "Backup Status",  value: "Synced",     icon: Cloud, color: "text-purple-500" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-4 p-5">
                    <div
                      className={cn(
                        "flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl",
                        item.color.replace("text-", "bg-").replace("500", "500/10")
                      )}
                    >
                      <item.icon className={cn("h-4 w-4", item.color)} />
                    </div>
                    <div>
                      <p className="data-badge">{item.label}</p>
                      <p className="mt-0.5 text-sm font-semibold text-foreground">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ══════════════════════════════
          FEATURE TICKER
      ══════════════════════════════ */}
      <div className="mt-12">
        <MarketTicker />
      </div>

      {/* ══════════════════════════════
          6-UP FEATURE GRID
      ══════════════════════════════ */}
      <section className="px-4 py-20 md:px-6">
        <div className="mx-auto max-w-5xl space-y-12">
          <div className="space-y-4">
            <p className="eyebrow">What's inside</p>
            <h2 className="section-heading max-w-2xl">
              Every module a bullion desk actually needs.
            </h2>
            <p className="max-w-xl text-lg text-muted-foreground">
              Purpose-built for the way bullion operations run — not adapted from generic accounting software.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {coreFeatures.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                className="feature-card"
              >
                <div
                  className={cn(
                    "mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl",
                    feature.bg
                  )}
                >
                  <feature.icon className={cn("h-5 w-5", feature.color)} />
                </div>
                <h3
                  className="font-display text-lg font-bold text-foreground"
                  style={{ letterSpacing: "-0.01em" }}
                >
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {feature.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          ARCHITECTURE SCROLL
      ══════════════════════════════ */}
      <section id="overview">
        <ArchitectureScrollSection />
      </section>

      {/* ══════════════════════════════
          BENTO ECOSYSTEM GRID
      ══════════════════════════════ */}
      <section className="px-4 py-20 md:px-6">
        <div className="mx-auto max-w-5xl space-y-6">
          <p className="eyebrow">Ecosystem</p>
          <h2 className="section-heading max-w-3xl">
            One company. One live product.{" "}
            <span className="gradient-text italic">One next release.</span>
          </h2>
          <p className="max-w-2xl text-lg text-muted-foreground">
            JM Labs connects the company layer, product pages, and legal documents into a single coherent structure.
          </p>
        </div>
        <BentoGrid items={ecosystemBentoItems} />
      </section>

      {/* ══════════════════════════════
          PRODUCTS
      ══════════════════════════════ */}
      <section className="px-4 py-4 md:px-6" id="products">
        <div className="mx-auto max-w-5xl space-y-10">
          <div className="space-y-4">
            <p className="eyebrow">Products under JM Labs</p>
            <h2 className="section-heading max-w-2xl">
              Each product has its own page inside one shared brand system.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {products.map((product, index) => (
              <motion.a
                key={product.name}
                href={product.href}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group cursor-pointer overflow-hidden rounded-2xl border border-border transition-all duration-200 hover:border-primary/30 hover:shadow-[0_20px_50px_color-mix(in_srgb,var(--primary)_8%,transparent)]"
                style={{ background: "var(--panel-background)" }}
              >
                <div
                  className={cn(
                    "relative h-60 overflow-hidden",
                    product.imageFit === "contain" ? "product-stage" : ""
                  )}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className={cn(
                      "h-full w-full transition duration-500",
                      product.imageFit === "contain"
                        ? "object-contain object-top p-4 group-hover:scale-[1.02]"
                        : "object-cover group-hover:scale-105"
                    )}
                  />
                  <div className="image-fade absolute inset-0" />
                  <span
                    className="absolute left-4 top-4 rounded-full border border-border px-3 py-1 text-[0.62rem] uppercase tracking-[0.2em] text-foreground/80 backdrop-blur"
                    style={{
                      background: "var(--pill-background)",
                      fontFamily: "var(--font-mono, monospace)",
                    }}
                  >
                    {product.status}
                  </span>
                </div>

                <div className="space-y-4 p-6">
                  <div>
                    <h3
                      className="font-display text-2xl font-bold text-foreground"
                      style={{ letterSpacing: "-0.01em" }}
                    >
                      {product.name}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {product.description}
                    </p>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    {product.bullets.map((bullet) => (
                      <div
                        key={bullet}
                        className="flex items-center gap-2.5 text-sm text-muted-foreground"
                      >
                        <span className="h-1 w-4 flex-shrink-0 rounded-full bg-primary/50" />
                        {bullet}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between border-t border-border pt-4">
                    <p className="text-sm font-medium text-foreground">
                      {product.tagline}
                    </p>
                    <ArrowRight className="h-4 w-4 text-primary transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          CTA BANNER
      ══════════════════════════════ */}
      <section className="px-4 py-20 md:px-6" id="connect">
        <div className="mx-auto max-w-5xl">
          <div
            className="relative overflow-hidden rounded-2xl border border-border"
            style={{ background: "var(--cta-panel-background)" }}
          >
            {/* Gold top hairline */}
            <div
              className="absolute inset-x-0 top-0 h-px"
              style={{
                background:
                  "linear-gradient(90deg, transparent 0%, var(--primary) 50%, transparent 100%)",
              }}
            />
            {/* Background glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full opacity-25"
              style={{
                background: "radial-gradient(circle, var(--primary) 0%, transparent 70%)",
                filter: "blur(60px)",
              }}
            />
            <div className="relative grid gap-8 p-8 md:grid-cols-[1.2fr,0.8fr] md:items-center md:p-14">
              <div className="space-y-5">
                <p className="eyebrow">Get started</p>
                <h2 className="section-heading leading-tight">
                  Discover Bullion Master.{" "}
                  <span className="gradient-text italic">
                    Built for the desk.
                  </span>
                </h2>
                <p className="max-w-lg text-base leading-8 text-muted-foreground">
                  Explore the product, review the security model, and follow the next JM Labs release as it develops.
                </p>
              </div>
              <div className="flex flex-col gap-3 md:items-end">
                <a
                  className={cn(buttonVariants({ size: "lg" }), "w-full md:w-auto")}
                  href="./bullion-master.html"
                >
                  <Coins className="h-4 w-4" />
                  Explore Bullion Master
                </a>
                <a
                  className={cn(
                    buttonVariants({ variant: "secondary", size: "lg" }),
                    "w-full md:w-auto"
                  )}
                  href="./next-product.html"
                >
                  View product in development
                </a>
                <p
                  className="text-center text-xs text-muted-foreground md:text-right"
                  style={{ fontFamily: "var(--font-mono, monospace)", letterSpacing: "0.08em" }}
                >
                  Local-first · PIN-secured · OLED-optimized
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

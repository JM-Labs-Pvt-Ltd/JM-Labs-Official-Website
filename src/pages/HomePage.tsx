import {
  ArrowRight,
  BarChart3,
  BookOpen,
  CheckCircle2,
  Cloud,
  Coins,
  LockKeyhole,
  RefreshCcw,
  ShieldCheck,
  Smartphone,
  Sparkles,
  TrendingUp,
  Users,
  Workflow,
  XCircle,
} from "lucide-react";
import { motion } from "framer-motion";

import { ArchitectureScrollSection } from "@/components/sections/architecture-scroll";
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
    body: "Inventory, Refinery Desk, Badla Register, and Open Positions built for bullion traders.",
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

const comparisonRows = [
  "Net Daily Position tracking",
  "Badla Register",
  "Bullion-specific P&L reports",
  "Refinery Desk workflow",
  "Inventory with bullion items",
  "PIN lock + duress wipe",
  "100% local-first storage",
  "Staff management & salary",
  "Continuous new features",
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
            <span className="gradient-text italic">bullion traders.</span>
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
              { icon: Sparkles, label: "30-Day Free Trial" },
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
          {/* User type pills */}
          <motion.div
            {...fadeUp(0.36)}
            className="mt-8 flex flex-wrap items-center justify-center gap-2"
          >
            <span
              className="text-muted-foreground"
              style={{ fontSize: "0.7rem", fontFamily: "var(--font-mono, monospace)", letterSpacing: "0.14em", textTransform: "uppercase" }}
            >
              For:
            </span>
            {["Gold Traders", "Silver Dealers", "Refinery Operators", "Commodity Brokers", "Jewellery Houses"].map((t) => (
              <span
                key={t}
                className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                style={{ background: "var(--pill-background)", fontFamily: "var(--font-mono, monospace)", letterSpacing: "0.04em" }}
              >
                {t}
              </span>
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
          DATA PRIVACY GUARANTEE
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
            {/* Header bar */}
            <div
              className="flex flex-col gap-1 border-b border-border px-6 py-5 sm:flex-row sm:items-center sm:justify-between"
              style={{ background: "var(--shell-background)" }}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-display text-base font-bold text-foreground" style={{ letterSpacing: "-0.01em" }}>
                    Your data. Your device. Your control.
                  </p>
                  <p className="text-xs text-muted-foreground" style={{ fontFamily: "var(--font-mono, monospace)", letterSpacing: "0.07em" }}>
                    No server ever sees your data — not ours, not anyone's
                  </p>
                </div>
              </div>
              <div
                className="flex items-center gap-1.5 self-start rounded-full px-3 py-1 sm:self-auto"
                style={{ background: "rgba(34,197,94,0.1)" }}
              >
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                <span
                  className="text-[0.65rem] font-semibold text-emerald-500"
                  style={{ fontFamily: "var(--font-mono, monospace)", letterSpacing: "0.1em", textTransform: "uppercase" }}
                >
                  Verified local-first
                </span>
              </div>
            </div>

            {/* Three pillars */}
            <div className="grid gap-px md:grid-cols-3" style={{ background: "var(--border)" }}>
              {[
                {
                  icon: Smartphone,
                  color: "text-amber-500",
                  bg: "bg-amber-500/10",
                  title: "Business data stays on-device",
                  body: "Your trades, ledger entries, and party details are stored on your device. Your account handles subscription — your actual business data never passes through any server.",
                  proof: "100% local-first data architecture",
                },
                {
                  icon: LockKeyhole,
                  color: "text-emerald-500",
                  bg: "bg-emerald-500/10",
                  title: "PIN-locked access",
                  body: "A 6-digit PIN guards every session. Repeated failed attempts trigger an automatic wipe. A separate duress PIN silently clears all data on entry.",
                  proof: "6 independent security layers",
                },
                {
                  icon: Cloud,
                  color: "text-sky-500",
                  bg: "bg-sky-500/10",
                  title: "Backup on your terms",
                  body: "Data is encrypted before it ever leaves the device. Choose local backup, cloud backup, or both — only when you decide, and only where you choose.",
                  proof: "Encrypted before leaving device",
                },
              ].map((pillar) => (
                <div
                  key={pillar.title}
                  className="flex flex-col gap-5 p-6 md:p-8"
                  style={{ background: "var(--panel-background)" }}
                >
                  <div className={cn("flex h-11 w-11 items-center justify-center rounded-xl", pillar.bg)}>
                    <pillar.icon className={cn("h-5 w-5", pillar.color)} />
                  </div>
                  <div className="space-y-2">
                    <h3
                      className="font-display text-lg font-bold text-foreground"
                      style={{ letterSpacing: "-0.01em" }}
                    >
                      {pillar.title}
                    </h3>
                    <p className="text-sm leading-7 text-muted-foreground">{pillar.body}</p>
                  </div>
                  <div className="mt-auto flex items-center gap-2 border-t border-border pt-4">
                    <CheckCircle2 className="h-3.5 w-3.5 flex-shrink-0 text-emerald-500" />
                    <span
                      className="text-xs text-muted-foreground"
                      style={{ fontFamily: "var(--font-mono, monospace)", letterSpacing: "0.06em" }}
                    >
                      {pillar.proof}
                    </span>
                  </div>
                </div>
              ))}
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
              Every module a bullion trader actually needs.
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
          HOW IT WORKS — 3-step flow
      ══════════════════════════════ */}
      <section className="px-4 py-20 md:px-6">
        <div className="mx-auto max-w-5xl space-y-16">
          <div className="space-y-4 text-center">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="eyebrow mx-auto"
            >
              How it works
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.06 }}
              className="section-heading mx-auto max-w-2xl"
            >
              From first trade to full report in minutes.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.12 }}
              className="mx-auto max-w-xl text-base text-muted-foreground"
            >
              Three steps. No training required. Built around the way bullion operations actually run.
            </motion.p>
          </div>

          <div className="relative grid gap-10 md:grid-cols-3 md:gap-6">
            {/* Connector line — desktop */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute top-[1.9rem] left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] hidden h-px md:block"
              style={{
                background:
                  "linear-gradient(90deg, transparent 0%, var(--primary) 20%, var(--primary) 80%, transparent 100%)",
                opacity: 0.18,
              }}
            />

            {[
              {
                step: "01",
                icon: BookOpen,
                title: "Enter daily trades",
                body: "Log every BUY and SELL with party, item, rate, and quantity. The Daily Ledger auto-computes running balances for every counterparty.",
              },
              {
                step: "02",
                icon: TrendingUp,
                title: "Track live position",
                body: "Net Daily Position calculates your overbought or oversold exposure across every commodity — updated the moment you save an entry.",
              },
              {
                step: "03",
                icon: BarChart3,
                title: "Pull your reports",
                body: "Generate settlement outputs, day books, refinery performance, and P&L summaries directly from Reports Center in one tap.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.13, duration: 0.55, ease: EASE }}
                className="relative flex flex-col items-center gap-5 text-center"
              >
                {/* Decorative step number */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-6 left-1/2 -translate-x-1/2 select-none font-display font-bold leading-none text-primary"
                  style={{ fontSize: "7rem", opacity: 0.055, letterSpacing: "-0.06em" }}
                >
                  {item.step}
                </div>

                {/* Icon */}
                <div
                  className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-border shadow-sm"
                  style={{ background: "var(--panel-background)" }}
                >
                  <item.icon className="h-6 w-6 text-primary" />
                </div>

                {/* Text */}
                <div className="relative z-10 max-w-xs space-y-2">
                  <p
                    className="font-display text-[0.65rem] font-semibold text-primary"
                    style={{ fontFamily: "var(--font-mono, monospace)", letterSpacing: "0.18em", textTransform: "uppercase" }}
                  >
                    Step {item.step}
                  </p>
                  <h3
                    className="font-display text-xl font-bold text-foreground"
                    style={{ letterSpacing: "-0.015em" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm leading-7 text-muted-foreground">{item.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          COMPARISON — vs generic tools
      ══════════════════════════════ */}
      <section className="px-4 py-20 md:px-6">
        <div className="mx-auto max-w-5xl space-y-12">
          <div className="space-y-4">
            <p className="eyebrow">Why Bullion Master</p>
            <h2 className="section-heading max-w-2xl">
              Built for bullion.{" "}
              <span className="gradient-text italic">Not adapted from generic software.</span>
            </h2>
            <p className="max-w-xl text-lg text-muted-foreground">
              Generic accounting tools weren't designed for bullion operations — and it shows.
              Bullion Master covers every workflow you actually need, at a fraction of what alternatives charge.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {/* Generic tools card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden rounded-2xl border border-border"
              style={{ background: "var(--panel-background)" }}
            >
              <div className="border-b border-border px-6 py-4">
                <p
                  className="text-xs font-semibold uppercase tracking-widest text-muted-foreground"
                  style={{ fontFamily: "var(--font-mono, monospace)" }}
                >
                  Generic accounting tools
                </p>
              </div>
              <div className="divide-y divide-border">
                {comparisonRows.map((row) => (
                  <div key={row} className="flex items-center gap-3 px-6 py-3.5">
                    <XCircle className="h-4 w-4 flex-shrink-0 text-muted-foreground/30" />
                    <span className="text-sm text-muted-foreground/60 line-through decoration-muted-foreground/25">
                      {row}
                    </span>
                  </div>
                ))}
                <div className="flex items-center gap-3 px-6 py-3.5">
                  <XCircle className="h-4 w-4 flex-shrink-0 text-muted-foreground/30" />
                  <span className="text-sm text-muted-foreground/60 line-through decoration-muted-foreground/25">Free trial: 3–5 days only</span>
                </div>
                <div className="flex items-center gap-3 px-6 py-4">
                  <XCircle className="h-4 w-4 flex-shrink-0 text-rose-400/50" />
                  <span className="text-sm font-medium text-rose-400/70">Expensive subscription costs</span>
                </div>
              </div>
            </motion.div>

            {/* Bullion Master card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative overflow-hidden rounded-2xl border"
              style={{
                background: "var(--panel-background)",
                borderColor: "rgba(245,158,11,0.3)",
                boxShadow: "0 0 0 1px rgba(245,158,11,0.08), 0 20px 50px rgba(245,158,11,0.06)",
              }}
            >
              {/* Top amber hairline */}
              <div
                className="absolute inset-x-0 top-0 h-px"
                style={{ background: "linear-gradient(90deg, transparent, var(--primary), transparent)" }}
              />
              <div className="flex items-center justify-between border-b px-6 py-4" style={{ borderColor: "rgba(245,158,11,0.2)" }}>
                <p
                  className="text-xs font-semibold uppercase tracking-widest text-primary"
                  style={{ fontFamily: "var(--font-mono, monospace)" }}
                >
                  Bullion Master
                </p>
                <span
                  className="flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[0.6rem] font-semibold uppercase tracking-wider text-emerald-500"
                  style={{ background: "rgba(34,197,94,0.1)", fontFamily: "var(--font-mono, monospace)" }}
                >
                  Available now
                </span>
              </div>
              <div className="divide-y" style={{ borderColor: "rgba(245,158,11,0.1)" }}>
                {comparisonRows.map((row) => (
                  <div key={row} className="flex items-center gap-3 px-6 py-3.5" style={{ borderColor: "rgba(245,158,11,0.1)" }}>
                    <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-emerald-500" />
                    <span className="text-sm text-foreground">{row}</span>
                  </div>
                ))}
                <div className="flex items-center gap-3 px-6 py-3.5" style={{ borderColor: "rgba(245,158,11,0.1)" }}>
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-emerald-500" />
                  <span className="text-sm font-semibold text-emerald-500">30-day free trial — 6× longer</span>
                </div>
                <div className="flex items-center gap-3 px-6 py-4" style={{ borderColor: "rgba(245,158,11,0.1)" }}>
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-primary" />
                  <span className="text-sm font-semibold text-primary">Fraction of the cost</span>
                </div>
              </div>
            </motion.div>
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
                  Bullion Master is here.{" "}
                  <span className="gradient-text italic">
                    Built for the desk.
                  </span>
                </h2>
                <p className="max-w-lg text-base leading-8 text-muted-foreground">
                  Purpose-built for bullion traders. Ironclad security. Every module you actually need —
                  at a fraction of what alternatives charge.
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
                  View what's next
                </a>
                <p
                  className="text-center text-xs text-muted-foreground md:text-right"
                  style={{ fontFamily: "var(--font-mono, monospace)", letterSpacing: "0.08em" }}
                >
                  Local-first · Ironclad security · Fraction of the cost
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

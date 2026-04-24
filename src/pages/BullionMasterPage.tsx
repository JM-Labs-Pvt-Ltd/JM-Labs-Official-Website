import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowRight, BarChart3, CalendarDays, CheckCircle2, ChevronDown, Layers, LockKeyhole, Shield, Tag, Users, Wallet, X } from "lucide-react";


import { BullionSecurityArchitecture } from "@/components/sections/bullion-security-architecture";
import { cn } from "@/lib/utils";
import { StatCounter } from "@/components/ui/stat-counter";
import { buttonVariants } from "@/components/ui/button";

const features = [
  {
    icon: Wallet,
    title: "Ledger and position control",
    body: "Daily Ledger, Master Ledger, and Net Daily Position keep party balances, transaction history, overbought or oversold lots, and day-level profitability visible.",
  },
  {
    icon: BarChart3,
    title: "Bullion-specific workflow modules",
    body: "Inventory, Refinery Desk, Badla Register, Open Positions, expenses, and income workflows support the way bullion traders actually operate.",
  },
  {
    icon: LockKeyhole,
    title: "Security, backup, and restore",
    body: "A 6-digit PIN, backup password handling, local and cloud backup, restore, auto-wipe, and duress protection all sit inside the real operating model.",
  },
] as const;

const highlights = [
  "Daily Ledger, Master Ledger, and Net Daily Position",
  "Inventory, Refinery Desk, Badla Register, and Open Positions",
  "PIN security, backup password, local or cloud backup, and restore",
] as const;

// FAQ accordion item
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border last:border-b-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full cursor-pointer items-start justify-between gap-4 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-display text-base font-semibold text-foreground" style={{ letterSpacing: "-0.01em" }}>
          {q}
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="mt-0.5 flex-shrink-0 text-primary"
        >
          <ChevronDown className="h-5 w-5" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: "hidden" }}
          >
            <p className="pb-5 text-sm leading-7 text-muted-foreground">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Radial gauge SVG — rendered inline
function SecurityGauge({ label, value, color = "var(--primary)" }: { label: string; value: number; color?: string }) {
  const R = 36;
  const C = 2 * Math.PI * R;
  const dash = (value / 100) * C;
  const gap = C - dash;

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative flex h-24 w-24 items-center justify-center">
        <svg viewBox="0 0 88 88" className="absolute inset-0 h-full w-full -rotate-90">
          {/* Track */}
          <circle
            cx="44" cy="44" r={R}
            fill="none"
            stroke="currentColor"
            strokeOpacity="0.08"
            strokeWidth="6"
          />
          {/* Fill */}
          <motion.circle
            cx="44" cy="44" r={R}
            fill="none"
            stroke={color}
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={`${dash} ${gap}`}
            initial={{ strokeDasharray: `0 ${C}` }}
            whileInView={{ strokeDasharray: `${dash} ${gap}` }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          />
        </svg>
        <div className="flex flex-col items-center">
          <span
            className="font-display text-2xl font-bold text-foreground"
            style={{ letterSpacing: "-0.03em", lineHeight: 1 }}
          >
            <StatCounter value={value} suffix="%" />
          </span>
        </div>
      </div>
      <span className="text-xs text-muted-foreground" style={{ fontFamily: "var(--font-mono, monospace)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
        {label}
      </span>
    </div>
  );
}

const faqs = [
  {
    q: "Where is my data stored?",
    a: "All your data stays on your device. Bullion Master is local-first — trade records, ledger entries, and party details never leave your phone unless you explicitly trigger a backup.",
  },
  {
    q: "What happens if I lose my phone?",
    a: "You can restore from a cloud or local backup. Every backup is encrypted before it leaves the device, and only your backup password unlocks it during restore — no one else can access your data.",
  },
  {
    q: "Is the PIN lock bypass-able?",
    a: "No. After a configurable number of failed PIN attempts, the app triggers an auto-wipe.",
  },
  {
    q: "Does Bullion Master work without an internet connection?",
    a: "Yes, completely. Since the platform is local-first, every module — Daily Ledger, Net Daily Position, Reports Center — works offline. Cloud backup syncs whenever connectivity is available.",
  },
  {
    q: "Can I track multiple parties and items?",
    a: "Yes. The Daily Ledger and Master Ledger both support multiple parties with individual running balances, trade history, and position breakdowns per counterparty and commodity.",
  },
  {
    q: "What reports does Bullion Master generate?",
    a: "Reports Center includes operational summaries, day books, settlement outputs, refinery performance, GST-ready records, and P&L views. All can be exported directly from the app.",
  },
] as const;

const productStats = [
  { value: 12, suffix: "+", label: "Core Modules" },
  { value: 15, suffix: "+", label: "Report Types" },
  { value: 30, suffix: "-day", label: "Free Trial" },
] as const;

export function BullionMasterPage() {
  const [lightbox, setLightbox] = useState<{ src: string; label: string } | null>(null);

  return (
    <div className="space-y-20 pb-20 pt-10 md:space-y-28 md:pt-16">

      {/* ─── Hero ─── */}
      <section className="hero-shell relative overflow-hidden px-4 py-14 md:px-6 md:py-20">
        {/* Ambient glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-[480px] w-[480px] rounded-full opacity-25"
          style={{
            background: "radial-gradient(circle, var(--primary) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div className="relative mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr,0.92fr] md:items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <p className="eyebrow">
              <span className="live-dot" aria-hidden="true" />
              Live on Android · iOS coming soon
            </p>
            <h1 className="hero-title">
              Bullion Master is the{" "}
              <em style={{ fontStyle: "italic" }} className="gradient-text">
                flagship JM Labs product
              </em>{" "}
              for serious bullion operations.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
              Daily Ledger, Net Daily Position, Parties Directory, Master Ledger, Inventory, Reports Center, Staff Management, and ironclad security — all in one focused bullion system. At a price that makes sense for your business.
            </p>

            <div className="flex flex-wrap gap-4">
              {/* Update href to Play Store link when live */}
              <a className={buttonVariants({ size: "lg" })} href="#download">
                Download Now
              </a>
              <a className={buttonVariants({ variant: "secondary", size: "lg" })} href="./privacy-policy.html">
                Privacy &amp; Security
              </a>
            </div>

            {/* Inline product stats */}
            <div className="grid grid-cols-3 gap-4 pt-2">
              {productStats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                  className="panel py-4 text-center"
                >
                  <div
                    className="gradient-text font-display text-3xl font-bold"
                    style={{ letterSpacing: "-0.03em", lineHeight: 1 }}
                  >
                    <StatCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground" style={{ fontFamily: "var(--font-mono, monospace)", letterSpacing: "0.08em" }}>
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75 }}
            className="relative"
          >
            <div className="image-glow absolute inset-0 rounded-2xl blur-2xl" />
            <div
              className="relative overflow-hidden rounded-2xl border"
              style={{
                background: "var(--panel-background)",
                borderColor: "rgba(245,158,11,0.25)",
              }}
            >
              {/* Amber top hairline */}
              <div
                className="absolute inset-x-0 top-0 h-px"
                style={{ background: "linear-gradient(90deg, transparent, var(--primary), transparent)" }}
              />

              {/* Header */}
              <div className="border-b border-border px-6 pb-5 pt-7">
                <p className="eyebrow mb-3">Why Bullion Master</p>
                <p
                  className="font-display text-xl font-bold text-foreground"
                  style={{ letterSpacing: "-0.02em", lineHeight: 1.3 }}
                >
                  More value. Better price.
                  <br />
                  Built for your operations.
                </p>
              </div>

              {/* Value props */}
              <div className="divide-y divide-border">
                {[
                  {
                    icon: CalendarDays,
                    color: "text-primary",
                    bg: "bg-primary/10",
                    title: "30-day free trial",
                    body: "6× longer than the 3–5 day trials offered elsewhere — enough time to actually evaluate the product.",
                  },
                  {
                    icon: Tag,
                    color: "text-emerald-500",
                    bg: "bg-emerald-500/10",
                    title: "Fraction of the cost",
                    body: "Priced for independent bullion operators — not enterprise licensing disguised as small-business software.",
                  },
                  {
                    icon: Layers,
                    color: "text-sky-500",
                    bg: "bg-sky-500/10",
                    title: "Built for bullion — not adapted",
                    body: "Net Daily Position, Badla Register, Refinery Desk — modules that simply don't exist in generic tools.",
                  },
                  {
                    icon: Shield,
                    color: "text-rose-500",
                    bg: "bg-rose-500/10",
                    title: "Ironclad security",
                    body: "On-device data, 6-digit PIN, duress wipe, encrypted backups. Your business data stays yours.",
                  },
                ].map(({ icon: Icon, color, bg, title, body }) => (
                  <div key={title} className="flex items-start gap-4 px-6 py-4">
                    <div className={cn("mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl", bg)}>
                      <Icon className={cn("h-4 w-4", color)} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground" style={{ letterSpacing: "-0.01em" }}>
                        {title}
                      </p>
                      <p className="mt-1 text-xs leading-5 text-muted-foreground">{body}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom strip */}
              <div
                className="flex items-center justify-between border-t border-border px-6 py-4"
                style={{ background: "var(--shell-background)" }}
              >
                <p
                  className="text-xs text-muted-foreground"
                  style={{ fontFamily: "var(--font-mono, monospace)", letterSpacing: "0.08em" }}
                >
                  No commitment · Cancel anytime
                </p>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                  <span
                    className="text-xs font-semibold text-emerald-500"
                    style={{ fontFamily: "var(--font-mono, monospace)", letterSpacing: "0.06em" }}
                  >
                    30 days free
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── App Screenshots ─── */}
      <section className="px-4 md:px-6">
        <div className="mx-auto max-w-7xl space-y-10">
          <div className="space-y-3">
            <p className="eyebrow">See it in action</p>
            <h2 className="section-heading max-w-2xl">
              A purpose-built interface for{" "}
              <em style={{ fontStyle: "italic" }} className="gradient-text">
                bullion traders.
              </em>
            </h2>
          </div>

          {/* Phone screenshot grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { src: "./screenshots/daily-ledger.jpg",    label: "Daily Ledger",       desc: "Party-wise trades, BUY/SELL filters, and new entry in one screen" },
              { src: "./screenshots/net-position.jpg",    label: "Net Daily Position",  desc: "Long/short position across items with date-range control" },
              { src: "./screenshots/master-ledger.jpg",   label: "Master Ledger",       desc: "Full ledger and pending trades tab — party balances at a glance" },
              { src: "./screenshots/reports.jpg",         label: "Reports Center",      desc: "15+ executive reports from day book to GST and refinery performance" },
              { src: "./screenshots/staff-management.jpg",label: "Staff Management",    desc: "Pay cycle, salary, leave, and payment history per staff member" },
            ].map((screen, i) => (
              <motion.div
                key={screen.label}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: i * 0.09, duration: 0.55 }}
                className="flex flex-col items-center gap-4"
              >
                {/* Phone frame */}
                <div className="relative w-full max-w-[180px] mx-auto">
                  {/* Glow */}
                  <div
                    className="pointer-events-none absolute -inset-3 rounded-[40px] opacity-20"
                    style={{
                      background: "radial-gradient(circle at 50% 40%, var(--primary) 0%, transparent 70%)",
                      filter: "blur(18px)",
                    }}
                  />
                  {/* Frame shell */}
                  <div
                    className="group relative cursor-zoom-in rounded-[36px] border-[3px] border-border/70 bg-background shadow-xl overflow-hidden transition-transform duration-300 hover:scale-[1.03] hover:shadow-2xl"
                    style={{ aspectRatio: "9/19.5" }}
                    onClick={() => setLightbox({ src: screen.src, label: screen.label })}
                  >
                    {/* Notch */}
                    <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-14 h-3.5 rounded-full bg-border z-10" />
                    {/* Screenshot */}
                    <img
                      src={screen.src}
                      alt={screen.label}
                      className="h-full w-full object-cover object-top"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="text-center space-y-1 max-w-[180px]">
                  <p className="font-display text-sm font-semibold text-foreground">{screen.label}</p>
                  <p className="text-xs text-muted-foreground leading-5">{screen.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Demo Videos ─── */}
      <section className="px-4 md:px-6">
        <div className="mx-auto max-w-7xl space-y-8">
          <div className="space-y-3">
            <p className="eyebrow">Live demo clips</p>
            <h2 className="section-heading max-w-xl">
              Watch the workflows{" "}
              <em style={{ fontStyle: "italic" }} className="gradient-text">
                in motion.
              </em>
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              { src: "./videos/demo-1.mp4", label: "Workflow demo — clip 1" },
              { src: "./videos/demo-2.mp4", label: "Workflow demo — clip 2" },
            ].map((video, i) => (
              <motion.div
                key={video.src}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                className="panel overflow-hidden p-3 flex justify-center"
              >
                <video
                  src={video.src}
                  controls
                  playsInline
                  preload="metadata"
                  className="rounded-xl"
                  style={{ width: "70%", height: "auto" }}
                  aria-label={video.label}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Core strengths ─── */}
      <section className="px-4 md:px-6">
        <div className="mx-auto max-w-7xl space-y-8">
          <p className="eyebrow">Core strengths</p>
          <div className="grid gap-5 md:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.08, duration: 0.55 }}
                className="panel"
              >
                <feature.icon className="h-5 w-5 text-primary" />
                <h2 className="mt-5 font-display text-xl text-foreground" style={{ fontWeight: 600 }}>
                  {feature.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{feature.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Security gauges ─── */}
      <section className="px-4 md:px-6">
        <div className="panel mx-auto max-w-7xl space-y-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div className="space-y-3">
              <p className="eyebrow">Security coverage metrics</p>
              <h2 className="section-heading max-w-xl">
                Every layer of the Bullion Master security model, visualised.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-muted-foreground">
              On-device first, PIN-locked, auto-wipe enabled, and backed by encrypted cloud recovery flows.
            </p>
          </div>
          <div className="flex flex-wrap justify-around gap-8">
            <SecurityGauge label="On-Device" value={100} color="var(--primary)" />
            <SecurityGauge label="PIN Lock" value={100} color="var(--primary)" />
            <SecurityGauge label="Backup Coverage" value={96} color="var(--secondary)" />
            <SecurityGauge label="Restore Tested" value={92} color="var(--secondary)" />
            <SecurityGauge label="Duress Ready" value={100} color="#22c55e" />
          </div>
        </div>
      </section>

      {/* ─── Security architecture ─── */}
      <BullionSecurityArchitecture />

      {/* ─── FAQ ─── */}
      <section className="px-4 md:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-[0.9fr,1.1fr] md:items-start">
            {/* Left: label + heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <p className="eyebrow">FAQ</p>
              <h2
                className="font-display font-bold leading-tight tracking-tight text-foreground"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
              >
                Common questions about{" "}
                <em style={{ fontStyle: "italic" }} className="gradient-text">
                  Bullion Master.
                </em>
              </h2>
              <p className="text-sm leading-7 text-muted-foreground">
                Questions about data, security, offline access, and how the product works in practice.
              </p>
            </motion.div>

            {/* Right: accordion */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="panel divide-y-0 px-6 py-2"
            >
              {faqs.map((item) => (
                <FaqItem key={item.q} q={item.q} a={item.a} />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Built for operators ─── */}
      <section className="px-4 md:px-6">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-[0.92fr,1.08fr]">
          <div className="panel space-y-5">
            <p className="eyebrow">Built for operators</p>
            <h2 className="section-heading">
              Bullion Master is built for operators who need{" "}
              <em style={{ fontStyle: "italic" }} className="gradient-text">
                speed, control, and trustworthy records.
              </em>
            </h2>
            <p className="text-base leading-8 text-muted-foreground">
              From dashboard cards like receivables, payables, cash position, stock in hand, daily P&amp;L, and stock position to downstream modules like Reports Center and Staff Management, the product is designed around the way bullion businesses actually operate.
            </p>
          </div>

          <div className="grid gap-4">
            <div className="panel flex items-start gap-4">
              <div className="rounded-full bg-primary/15 p-3 text-primary flex-shrink-0">
                <Shield className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-lg text-foreground" style={{ fontWeight: 600 }}>
                  Security posture stays visible
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  PIN lock, backup password handling, auto-wipe options, and restore responsibilities matter in this category, so they stay visible across the product story.
                </p>
              </div>
            </div>
            <div className="panel flex items-start gap-4">
              <div className="rounded-full bg-secondary/15 p-3 text-secondary flex-shrink-0">
                <Users className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-lg text-foreground" style={{ fontWeight: 600 }}>
                  Reports and staff workflows stay inside the same system
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Reports Center supports operational exports, while Staff Management tracks staff details, salary payments, and attendance-related changes without leaving the product.
                </p>
              </div>
            </div>
            <a href="./terms-and-conditions.html" className="panel group flex items-center justify-between">
              <div>
                <p className="font-display text-lg text-foreground" style={{ fontWeight: 600 }}>
                  Legal documents stay one click away
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Privacy and terms remain directly connected to Bullion Master inside the same JM Labs ecosystem.
                </p>
              </div>
              <ArrowRight className="h-5 w-5 text-primary transition group-hover:translate-x-1 flex-shrink-0" />
            </a>
          </div>
        </div>
      </section>

      {/* ─── Pricing ─── */}
      <section className="px-4 md:px-6">
        <div className="mx-auto max-w-4xl space-y-10">
          <div className="space-y-4 text-center">
            <p className="eyebrow mx-auto">Simple pricing</p>
            <h2 className="section-heading mx-auto max-w-2xl">
              One plan. Every module.{" "}
              <span className="gradient-text italic">No hidden fees.</span>
            </h2>
            <p className="mx-auto max-w-md text-base text-muted-foreground">
              Start free for 30 days. Then one simple annual fee — with renewal at a significantly lower rate.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55 }}
            className="relative overflow-hidden rounded-2xl border"
            style={{
              background: "var(--panel-background)",
              borderColor: "rgba(245,158,11,0.35)",
              boxShadow: "0 0 0 1px rgba(245,158,11,0.08), 0 24px 70px rgba(245,158,11,0.07)",
            }}
          >
            {/* Gold top hairline */}
            <div className="absolute inset-x-0 top-0 h-px" style={{ background: "linear-gradient(90deg, transparent, var(--primary), transparent)" }} />

            <div className="grid divide-y divide-border md:grid-cols-3 md:divide-x md:divide-y-0" style={{ "--tw-divide-opacity": 1 } as React.CSSProperties}>

              {/* Step 1 — Free trial */}
              <div className="flex flex-col gap-5 p-8">
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-xs font-bold text-muted-foreground" style={{ fontFamily: "var(--font-mono, monospace)" }}>1</div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground" style={{ fontFamily: "var(--font-mono, monospace)", letterSpacing: "0.2em" }}>First month</p>
                  <div className="mt-2 flex items-end gap-1.5">
                    <span className="font-display text-4xl font-bold text-foreground" style={{ letterSpacing: "-0.04em" }}>Free</span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">30 days, every module unlocked. No credit card required.</p>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {["All 12+ modules", "Full Reports Center", "PIN security & backup"].map(f => (
                    <li key={f} className="flex items-center gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 flex-shrink-0 text-emerald-500" />{f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Step 2 — Year 1 */}
              <div className="relative flex flex-col gap-5 p-8">
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-primary/40 text-xs font-bold text-primary" style={{ fontFamily: "var(--font-mono, monospace)" }}>2</div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary" style={{ fontFamily: "var(--font-mono, monospace)", letterSpacing: "0.2em" }}>Year 1</p>
                  <div className="mt-2">
                    <span className="gradient-text font-display text-2xl font-bold" style={{ letterSpacing: "-0.02em" }}>Reasonably priced</span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">One annual payment. Full access, zero surprises — at a fraction of what generic alternatives charge.</p>
                </div>
                <ul className="space-y-2 text-sm text-foreground">
                  {["Everything from the trial", "Unlimited parties & items", "Cloud backup & restore"].map(f => (
                    <li key={f} className="flex items-center gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 flex-shrink-0 text-primary" />{f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Step 3 — Renewal */}
              <div className="flex flex-col gap-5 p-8">
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-emerald-500/40 text-xs font-bold text-emerald-500" style={{ fontFamily: "var(--font-mono, monospace)" }}>3</div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-emerald-500" style={{ fontFamily: "var(--font-mono, monospace)", letterSpacing: "0.2em" }}>Year 2 onwards</p>
                  <div className="mt-2">
                    <span className="font-display text-2xl font-bold text-foreground" style={{ letterSpacing: "-0.02em" }}>Significantly lower</span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">Renewal costs a fraction of year one — because loyalty should be rewarded, not penalised.</p>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {["All updates included", "Same full access", "No price hikes"].map(f => (
                    <li key={f} className="flex items-center gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 flex-shrink-0 text-emerald-500" />{f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom CTA strip */}
            <div
              className="flex flex-col items-center gap-4 border-t px-8 py-6 text-center sm:flex-row sm:justify-between sm:text-left"
              style={{ borderColor: "rgba(245,158,11,0.15)", background: "color-mix(in srgb, var(--primary) 3%, var(--panel-background))" }}
            >
              <p className="text-sm text-muted-foreground">
                No modules locked. No per-user fees. Cancel anytime.
              </p>
              <a href="#download" className={cn(buttonVariants({ size: "default" }), "flex-shrink-0")}>
                Start free — no card needed
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Download CTA ─── */}
      <section className="px-4 md:px-6" id="download">
        <div className="mx-auto max-w-7xl">
          <div
            className="relative overflow-hidden rounded-2xl border border-border p-8 md:p-12"
            style={{ background: "var(--cta-panel-background)" }}
          >
            {/* Gold hairline */}
            <div
              className="absolute inset-x-0 top-0 h-px"
              style={{ background: "linear-gradient(90deg, transparent 0%, var(--primary) 50%, transparent 100%)" }}
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-12 -top-12 h-56 w-56 rounded-full opacity-20"
              style={{ background: "radial-gradient(circle, var(--primary) 0%, transparent 70%)", filter: "blur(48px)" }}
            />
            <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="live-dot" aria-hidden="true" />
                  <span
                    className="text-xs font-semibold text-emerald-500"
                    style={{ fontFamily: "var(--font-mono, monospace)", letterSpacing: "0.12em", textTransform: "uppercase" }}
                  >
                    Available now on Android · iOS coming soon
                  </span>
                </div>
                <h2 className="section-heading leading-tight">
                  Start your{" "}
                  <span className="gradient-text italic">30-day free trial.</span>
                </h2>
                <p className="max-w-md text-base leading-7 text-muted-foreground">
                  No credit card. No lock-in. Every module unlocked for 30 days.
                  Your data stays on your device from day one.
                </p>
              </div>
              <div className="flex flex-col items-start gap-3 md:flex-shrink-0 md:items-end">
                <div className="flex flex-wrap gap-3">
                  <a
                    href="#"
                    className="flex items-center gap-3 rounded-xl border border-primary/30 px-5 py-3 transition-colors hover:bg-primary/5"
                    style={{ background: "var(--eyebrow-background)", minWidth: "160px" }}
                  >
                    <svg className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3.18 23.76c.3.17.65.2.98.1l11.94-6.9-2.58-2.58-10.34 9.38zM.5 1.26C.19 1.58 0 2.07 0 2.72v18.56c0 .65.19 1.14.5 1.46l.08.08 10.39-10.39v-.24L.58 1.18.5 1.26zm16.97 9.59l-2.92-1.69-2.76 2.76 2.76 2.76 2.93-1.7c.84-.48.84-1.27-.01-1.13zM4.16.14L16.1 7.04l-2.58 2.58L3.18.24c.33-.1.68-.07.98.1z"/>
                    </svg>
                    <div>
                      <p className="text-[0.6rem] text-muted-foreground" style={{ fontFamily: "var(--font-mono, monospace)", letterSpacing: "0.08em", textTransform: "uppercase" }}>Get it on</p>
                      <p className="text-sm font-semibold text-foreground">Google Play</p>
                    </div>
                  </a>
                  <div
                    className="flex items-center gap-3 rounded-xl border border-border px-5 py-3 opacity-50"
                    style={{ background: "var(--eyebrow-background)", minWidth: "160px", cursor: "default" }}
                  >
                    <svg className="h-6 w-6 text-muted-foreground" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                    <div>
                      <p className="text-[0.6rem] text-muted-foreground" style={{ fontFamily: "var(--font-mono, monospace)", letterSpacing: "0.08em", textTransform: "uppercase" }}>App Store</p>
                      <p className="text-sm font-semibold text-muted-foreground">Coming Soon</p>
                    </div>
                  </div>
                </div>
                <p
                  className="text-right text-xs text-muted-foreground"
                  style={{ fontFamily: "var(--font-mono, monospace)", letterSpacing: "0.07em" }}
                >
                  Free trial · No card · Cancel anytime
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Screenshot lightbox ─── */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: "rgba(0,0,0,0.82)", backdropFilter: "blur(6px)" }}
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.88, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.88, y: 24 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex max-h-[90vh] max-w-sm flex-col items-center gap-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                type="button"
                onClick={() => setLightbox(null)}
                className="absolute -right-3 -top-3 z-10 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:text-foreground"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>

              {/* Phone frame */}
              <div
                className="relative w-96 overflow-hidden rounded-[36px] border-[3px] border-border/70 bg-background shadow-2xl"
                style={{ aspectRatio: "9/19.5" }}
              >
                <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-14 h-3.5 rounded-full bg-border z-10" />
                <img
                  src={lightbox.src}
                  alt={lightbox.label}
                  className="h-full w-full object-cover object-top"
                />
              </div>

              {/* Label */}
              <p
                className="text-center text-sm font-semibold text-white/90"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {lightbox.label}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

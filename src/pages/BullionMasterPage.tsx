import { motion } from "framer-motion";
import { ArrowRight, BarChart3, LockKeyhole, Shield, Users, Wallet } from "lucide-react";

import { BullionSecurityArchitecture } from "@/components/sections/bullion-security-architecture";
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
    body: "Inventory, Refinery Desk, Badla Register, Open Positions, expenses, and income workflows support the way bullion desks actually operate.",
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

const productStats = [
  { value: 10, suffix: "+", label: "Core Modules" },
  { value: 5, suffix: "+", label: "Report Types" },
  { value: 100, suffix: "%", label: "Local-First" },
] as const;

export function BullionMasterPage() {
  return (
    <div className="space-y-20 pb-20 pt-10 md:space-y-28 md:pt-16">

      {/* ─── Hero ─── */}
      <section className="px-4 md:px-6">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr,0.92fr] md:items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <p className="eyebrow">Flagship product</p>
            <h1 className="hero-title">
              Bullion Master is the{" "}
              <em style={{ fontStyle: "italic" }} className="gradient-text">
                flagship JM Labs product
              </em>{" "}
              for serious bullion operations.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
              Bullion Master brings Daily Ledger, Net Daily Position, Parties Directory, Master Ledger, Inventory, Reports Center, Staff Management, and security-backed backup workflows into one focused bullion system.
            </p>

            <div className="flex flex-wrap gap-4">
              <a className={buttonVariants({ size: "lg" })} href="./index.html">
                Back to JM Labs
              </a>
              <a className={buttonVariants({ variant: "secondary", size: "lg" })} href="./privacy-policy.html">
                Review privacy policy
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
            <div className="image-glow absolute inset-0 rounded-[38px] blur-2xl" />
            <div className="image-shell relative overflow-hidden rounded-[38px] border border-border p-5">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80"
                alt="Bullion Master product dashboard inspiration"
                className="h-[420px] w-full rounded-[28px] object-cover"
              />
              <div className="absolute inset-x-10 bottom-10 grid gap-3 md:grid-cols-3">
                {highlights.map((highlight) => (
                  <div key={highlight} className="glass-card-strong rounded-[20px] border border-border p-4 backdrop-blur-xl">
                    <p className="text-sm text-foreground/85">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
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
    </div>
  );
}

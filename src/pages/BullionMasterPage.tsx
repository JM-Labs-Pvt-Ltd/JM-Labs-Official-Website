import { motion } from "framer-motion";
import { ArrowRight, BarChart3, LockKeyhole, Shield, Users, Wallet } from "lucide-react";

import { BullionSecurityArchitecture } from "@/components/sections/bullion-security-architecture";
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

export function BullionMasterPage() {
  return (
    <div className="space-y-20 pb-20 pt-10 md:space-y-28 md:pt-16">
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
              Bullion Master is the flagship JM Labs product for serious bullion operations.
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
                <h2 className="mt-5 font-display text-xl text-foreground">{feature.title}</h2>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{feature.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <BullionSecurityArchitecture />

      <section className="px-4 md:px-6">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-[0.92fr,1.08fr]">
          <div className="panel space-y-5">
            <p className="eyebrow">Built for operators</p>
            <h2 className="section-heading">Bullion Master is built for operators who need speed, control, and trustworthy records.</h2>
            <p className="text-base leading-8 text-muted-foreground">
              From dashboard cards like receivables, payables, cash position, stock in hand, daily P&L, and stock position to downstream modules like Reports Center and Staff Management, the product is designed around the way bullion businesses actually operate.
            </p>
          </div>

          <div className="grid gap-4">
            <div className="panel flex items-start gap-4">
              <div className="rounded-full bg-primary/15 p-3 text-primary">
                <Shield className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-lg text-foreground">Security posture stays visible</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  PIN lock, backup password handling, auto-wipe options, and restore responsibilities matter in this category, so they stay visible across the product story.
                </p>
              </div>
            </div>
            <div className="panel flex items-start gap-4">
              <div className="rounded-full bg-secondary/15 p-3 text-secondary">
                <Users className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-lg text-foreground">Reports and staff workflows stay inside the same system</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Reports Center supports operational exports, while Staff Management tracks staff details, salary payments, and attendance-related changes without leaving the product.
                </p>
              </div>
            </div>
            <a href="./terms-and-conditions.html" className="panel group flex items-center justify-between">
              <div>
                <p className="font-display text-lg text-foreground">Legal documents stay one click away</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Privacy and terms remain directly connected to Bullion Master inside the same JM Labs ecosystem.
                </p>
              </div>
              <ArrowRight className="h-5 w-5 text-primary transition group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

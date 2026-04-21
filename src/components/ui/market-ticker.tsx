"use client";

import {
  Archive,
  BarChart3,
  BookOpen,
  Building2,
  CircleDollarSign,
  ClipboardList,
  Cloud,
  Layers,
  LockKeyhole,
  RefreshCcw,
  ShieldCheck,
  Users,
} from "lucide-react";
import type { ComponentType } from "react";

interface FeatureItem {
  Icon: ComponentType<{ className?: string }>;
  module: string;
  detail: string;
}

const features: FeatureItem[] = [
  { Icon: BookOpen,          module: "Daily Ledger",        detail: "Party-wise balances & daily transaction history" },
  { Icon: BarChart3,         module: "Net Daily Position",  detail: "Overbought / oversold lots tracked in real time" },
  { Icon: Layers,            module: "Master Ledger",       detail: "Full running ledger across all parties" },
  { Icon: Archive,           module: "Reports Center",      detail: "Operational summaries exportable with one tap" },
  { Icon: CircleDollarSign,  module: "Open Positions",      detail: "Live view of buy/sell lots with P&L" },
  { Icon: ClipboardList,     module: "Badla Register",      detail: "Badla entries, settlements & carry-forward" },
  { Icon: RefreshCcw,        module: "Refinery Desk",       detail: "Refinery inward, outward & reconciliation" },
  { Icon: Building2,         module: "Inventory",           detail: "Full stock tracking across items & categories" },
  { Icon: Users,             module: "Staff Management",    detail: "Profiles, salary payments & attendance" },
  { Icon: LockKeyhole,       module: "PIN Security",        detail: "6-digit lock with auto-wipe & duress mode" },
  { Icon: Cloud,             module: "Cloud Backup",        detail: "Encrypted backup & instant restore" },
  { Icon: ShieldCheck,       module: "Startup Guard",       detail: "Session, token & device validation on launch" },
];

// Duplicate for seamless loop
const allFeatures = [...features, ...features];

export function MarketTicker() {
  return (
    <div
      className="overflow-hidden border-y border-border py-3"
      style={{ background: "var(--shell-background)" }}
      aria-label="Bullion Master feature modules"
    >
      <div className="ticker-track flex items-center gap-0">
        {allFeatures.map((item, i) => (
          <div key={i} className="flex shrink-0 items-center">
            {/* Feature pill */}
            <div className="flex items-center gap-2.5 px-5">
              <item.Icon className="h-3.5 w-3.5 flex-shrink-0 text-primary/80" />
              <span
                className="font-semibold text-foreground"
                style={{
                  fontFamily: "var(--font-mono, monospace)",
                  fontSize: "0.68rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
              >
                {item.module}
              </span>
              <span
                className="hidden text-muted-foreground sm:inline"
                style={{ fontSize: "0.75rem" }}
              >
                — {item.detail}
              </span>
            </div>
            {/* Separator */}
            <span
              className="h-3.5 w-px flex-shrink-0"
              style={{ background: "var(--border)", opacity: 0.6 }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

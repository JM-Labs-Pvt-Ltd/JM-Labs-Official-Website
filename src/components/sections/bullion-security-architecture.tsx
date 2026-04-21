import { LockKeyhole, ShieldCheck, Smartphone } from "lucide-react";

import { CpuArchitecture } from "@/components/ui/cpu-architecture";

const securityPoints = [
  {
    icon: Smartphone,
    title: "Local-first by design",
    body: "Bullion Master keeps core business records close to the device and uses a dual storage model on native, with kv_store fallback and relational reads when sync is complete.",
  },
  {
    icon: LockKeyhole,
    title: "PIN and emergency protections",
    body: "The security flow includes PIN checks, failed-attempt counters, auto-wipe options, backup password handling, and duress-triggered protection paths.",
  },
  {
    icon: ShieldCheck,
    title: "Backup is for continuity",
    body: "Local backup, cloud backup, and restore flows support recovery, but the operating model still centers on on-device access to parties, items, ledger entries, expenses, incomes, and staff data.",
  },
] as const;

export function BullionSecurityArchitecture() {
  return (
    <section className="px-4 md:px-6">
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-[1.05fr,0.95fr] md:items-center">
        <div className="panel space-y-5">
          <p className="eyebrow">Security architecture</p>
          <h2 className="section-heading">
            Bullion Master is designed to keep core business data close to the device.
          </h2>
          <p className="text-base leading-8 text-muted-foreground">
            The security story is not just access control. It also covers how app startup validates session,
            token, device security, profile state, and database readiness before loading local business data and
            backup workflows.
          </p>

          <div className="grid gap-4">
            {securityPoints.map((point) => (
              <div key={point.title} className="glass-card rounded-[24px] border border-border p-4">
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/15 p-2.5 text-primary">
                    <point.icon className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-foreground">{point.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">{point.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="security-shell panel overflow-hidden">
          <div className="security-canvas rounded-[28px] border border-border p-4 md:p-6">
            <div className="mb-4 flex items-center justify-between gap-4">
              <div>
                <p className="font-display text-xs uppercase tracking-[0.35em] text-primary/[0.75]">
                  On-device security context
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  A visual layer for Bullion Master's local-first storage and startup model.
                </p>
              </div>
              <span className="soft-pill rounded-full border border-border px-3 py-1 text-[0.65rem] uppercase tracking-[0.28em] text-foreground/72">
                Secure core
              </span>
            </div>

            <div className="glass-card rounded-[24px] p-4">
              <CpuArchitecture className="h-[16rem] w-full text-foreground/45 md:h-[19rem]" text="BM" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

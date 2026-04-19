import { ArrowRight, Layers3, Rocket, ShieldCheck } from "lucide-react";

import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export function ArchitectureScrollSection() {
  return (
    <ContainerScroll
      titleComponent={
        <div className="space-y-5">
          <p className="eyebrow justify-center">Parent brand architecture</p>
          <h2 className="section-heading max-w-4xl">
            One parent company, one live product, and a structure ready for the next JM Labs release.
          </h2>
          <p className="mx-auto max-w-3xl text-base text-muted-foreground md:text-lg">
            JM Labs sits at the center, with Bullion Master already live and the next product already positioned inside the same company, legal, and navigation system.
          </p>
        </div>
      }
    >
      <div className="grid h-full gap-4 bg-[radial-gradient(circle_at_top,rgba(83,114,255,0.18),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(247,186,83,0.16),transparent_28%),linear-gradient(180deg,#07111b,#08131f)] p-4 text-white md:grid-cols-[1.2fr,0.8fr] md:p-6">
        <div className="panel flex h-full flex-col justify-between border-white/10 bg-white/5">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-display text-xs uppercase tracking-[0.35em] text-primary/80">
                Parent system
              </p>
              <h3 className="mt-3 text-3xl font-semibold text-white md:text-4xl">JM Labs</h3>
            </div>
            <div className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-white/[0.7]">
              Live ecosystem
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-[26px] border border-white/10 bg-black/20 p-5">
              <Layers3 className="h-5 w-5 text-primary" />
              <p className="mt-6 text-sm text-white/[0.6]">Company shell</p>
              <p className="mt-2 text-lg font-semibold text-white">Shared navigation, footer, and parent-brand structure</p>
            </div>
            <div className="rounded-[26px] border border-white/10 bg-black/20 p-5">
              <ShieldCheck className="h-5 w-5 text-secondary" />
              <p className="mt-6 text-sm text-white/[0.6]">Trust layer</p>
              <p className="mt-2 text-lg font-semibold text-white">Privacy, terms, and product pages stay tied to the same company layer</p>
            </div>
            <div className="rounded-[26px] border border-white/10 bg-black/20 p-5">
              <Rocket className="h-5 w-5 text-primary" />
              <p className="mt-6 text-sm text-white/[0.6]">Growth-ready structure</p>
              <p className="mt-2 text-lg font-semibold text-white">Each new JM Labs product can launch without rebuilding the full site</p>
            </div>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(12,22,34,0.94),rgba(8,16,26,0.94))] p-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="font-display text-xs uppercase tracking-[0.35em] text-secondary/[0.7]">
                  Active product flow
                </p>
                <p className="mt-3 max-w-xl text-sm text-white/70 md:text-base">
                  Visitors meet JM Labs first, then move into Bullion Master pages that explain real modules like Daily Ledger, Inventory, Reports Center, and security workflows.
                </p>
              </div>
              <ArrowRight className="hidden h-6 w-6 text-white/50 md:block" />
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="panel h-full border-emerald-400/20 bg-[linear-gradient(180deg,rgba(6,24,18,0.88),rgba(6,16,13,0.96))]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-emerald-300/70">Product 01</p>
                <h4 className="mt-3 text-2xl font-semibold text-white">Bullion Master</h4>
              </div>
              <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-[0.65rem] uppercase tracking-[0.25em] text-emerald-200">
                Live
              </span>
            </div>
            <p className="mt-5 text-sm text-white/[0.65]">
              Daily Ledger, Net Daily Position, Inventory, Refinery Desk, Reports Center, and security-backed backup workflows for bullion operations.
            </p>
          </div>

          <div className="panel h-full border-white/10 bg-[linear-gradient(180deg,rgba(17,24,39,0.92),rgba(8,12,20,0.96))]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-white/[0.45]">Next release</p>
                <h4 className="mt-3 text-2xl font-semibold text-white">Product in Development</h4>
              </div>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.65rem] uppercase tracking-[0.25em] text-white/[0.6]">
                In build
              </span>
            </div>
            <p className="mt-5 text-sm text-white/[0.65]">
              A second JM Labs system is in development and already has a dedicated destination inside the parent-site structure.
            </p>
          </div>
        </div>
      </div>
    </ContainerScroll>
  );
}

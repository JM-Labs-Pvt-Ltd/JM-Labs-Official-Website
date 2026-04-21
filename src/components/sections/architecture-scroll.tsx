import { motion } from "framer-motion";
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
      <div className="architecture-canvas grid h-full gap-4 p-4 text-foreground md:grid-cols-[1.2fr,0.8fr] md:p-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="architecture-card panel flex h-full flex-col justify-between"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="font-display text-xs uppercase tracking-[0.35em] text-primary/80">
                Parent system
              </p>
              <h3 className="mt-3 text-3xl font-semibold text-foreground md:text-4xl">JM Labs</h3>
            </div>
            <div className="soft-pill rounded-full border border-border px-4 py-2 text-xs uppercase tracking-[0.25em] text-foreground/65">
              Live ecosystem
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.08, duration: 0.5 }}
              className="architecture-card rounded-[26px] border border-border p-5"
            >
              <Layers3 className="h-5 w-5 text-primary" />
              <p className="mt-6 text-sm text-muted-foreground">Company shell</p>
              <p className="mt-2 text-lg font-semibold text-foreground">Shared navigation, footer, and parent-brand structure</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.16, duration: 0.5 }}
              className="architecture-card rounded-[26px] border border-border p-5"
            >
              <ShieldCheck className="h-5 w-5 text-secondary" />
              <p className="mt-6 text-sm text-muted-foreground">Trust layer</p>
              <p className="mt-2 text-lg font-semibold text-foreground">Privacy, terms, and product pages stay tied to the same company layer</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.24, duration: 0.5 }}
              className="architecture-card rounded-[26px] border border-border p-5"
            >
              <Rocket className="h-5 w-5 text-primary" />
              <p className="mt-6 text-sm text-muted-foreground">Growth-ready structure</p>
              <p className="mt-2 text-lg font-semibold text-foreground">Each new JM Labs product can launch without rebuilding the full site</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="architecture-flow rounded-[30px] border border-border p-6"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="font-display text-xs uppercase tracking-[0.35em] text-secondary/[0.7]">
                  Active product flow
                </p>
                <p className="mt-3 max-w-xl text-sm text-muted-foreground md:text-base">
                  Visitors meet JM Labs first, then move into Bullion Master pages that explain real modules like Daily Ledger, Inventory, Reports Center, and security workflows.
                </p>
              </div>
              <ArrowRight className="hidden h-6 w-6 text-foreground/40 md:block" />
            </div>
          </motion.div>
        </motion.div>

        <div className="grid gap-4">
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: 0.14, duration: 0.6 }}
            className="architecture-side panel h-full"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-primary/75">Product 01</p>
                <h4 className="mt-3 text-2xl font-semibold text-foreground">Bullion Master</h4>
              </div>
              <span className="soft-pill rounded-full border border-border px-3 py-1 text-[0.65rem] uppercase tracking-[0.25em] text-primary/80">
                Live
              </span>
            </div>
            <p className="mt-5 text-sm text-muted-foreground">
              Daily Ledger, Net Daily Position, Inventory, Refinery Desk, Reports Center, and security-backed backup workflows for bullion operations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: 0.22, duration: 0.6 }}
            className="architecture-side-alt panel h-full"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Next release</p>
                <h4 className="mt-3 text-2xl font-semibold text-foreground">Product in Development</h4>
              </div>
              <span className="soft-pill rounded-full border border-border px-3 py-1 text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">
                In build
              </span>
            </div>
            <p className="mt-5 text-sm text-muted-foreground">
              A second JM Labs system is in development and already has a dedicated destination inside the parent-site structure.
            </p>
          </motion.div>
        </div>
      </div>
    </ContainerScroll>
  );
}

import { motion } from "framer-motion";
import { ArrowRight, Layers3, Rocket, ShieldCheck } from "lucide-react";

import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export function ArchitectureScrollSection() {
  return (
    <ContainerScroll
      titleComponent={
        <div className="space-y-5">
          <p className="eyebrow justify-center">Parent brand architecture</p>
          <h2 className="section-heading mx-auto max-w-4xl text-center">
            One parent company, one live product, and a structure{" "}
            <em style={{ fontStyle: "italic" }} className="gradient-text">
              ready for the next JM Labs release.
            </em>
          </h2>
          <p className="mx-auto max-w-3xl text-center text-base text-muted-foreground md:text-lg">
            JM Labs sits at the center, with Bullion Master already live and the next product already positioned inside the same company, legal, and navigation system.
          </p>
        </div>
      }
    >
      <div className="architecture-canvas grid h-full gap-4 p-4 text-foreground md:grid-cols-[1.2fr,0.8fr] md:p-6">

        {/* Left main card */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="architecture-card panel flex h-full flex-col justify-between"
        >
          <div className="flex items-center justify-between">
            <div>
              <p
                className="text-primary/80"
                style={{
                  fontFamily: "var(--font-mono, monospace)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.32em",
                  textTransform: "uppercase",
                }}
              >
                Parent system
              </p>
              <h3 className="mt-3 font-display text-3xl text-foreground md:text-4xl" style={{ fontWeight: 600 }}>
                JM Labs
              </h3>
            </div>
            <div className="soft-pill rounded-full border border-border px-4 py-2" style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "0.65rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--foreground)", opacity: 0.65 }}>
              Live ecosystem
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              { icon: Layers3, delay: 0.08, label: "Company shell", body: "Shared navigation, footer, and parent-brand structure" },
              { icon: ShieldCheck, delay: 0.16, label: "Trust layer", body: "Privacy, terms, and product pages stay tied to the same company layer" },
              { icon: Rocket, delay: 0.24, label: "Growth-ready structure", body: "Each new JM Labs product can launch without rebuilding the full site" },
            ].map(({ icon: Icon, delay, label, body }) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay, duration: 0.5 }}
                className="architecture-card rounded-[26px] border border-border p-5"
              >
                <Icon className="h-5 w-5 text-primary" />
                <p className="mt-6 text-sm text-muted-foreground">{label}</p>
                <p className="mt-2 font-display text-lg text-foreground" style={{ fontWeight: 600, lineHeight: 1.3 }}>
                  {body}
                </p>
              </motion.div>
            ))}
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
                <p
                  className="text-secondary/70"
                  style={{
                    fontFamily: "var(--font-mono, monospace)",
                    fontSize: "0.65rem",
                    letterSpacing: "0.32em",
                    textTransform: "uppercase",
                  }}
                >
                  Active product flow
                </p>
                <p className="mt-3 max-w-xl text-sm text-muted-foreground md:text-base">
                  Visitors meet JM Labs first, then move into Bullion Master pages that explain real modules like Daily Ledger, Inventory, Reports Center, and security workflows.
                </p>
              </div>
              <ArrowRight className="hidden h-6 w-6 flex-shrink-0 text-foreground/30 md:block" />
            </div>
          </motion.div>
        </motion.div>

        {/* Right side cards */}
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
                <p
                  className="text-primary/75"
                  style={{
                    fontFamily: "var(--font-mono, monospace)",
                    fontSize: "0.65rem",
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                  }}
                >
                  Product 01
                </p>
                <h4 className="mt-3 font-display text-2xl text-foreground" style={{ fontWeight: 600 }}>
                  Bullion Master
                </h4>
              </div>
              <span
                className="soft-pill rounded-full border border-border px-3 py-1 text-primary/80"
                style={{
                  fontFamily: "var(--font-mono, monospace)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                }}
              >
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
                <p
                  className="text-muted-foreground"
                  style={{
                    fontFamily: "var(--font-mono, monospace)",
                    fontSize: "0.65rem",
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                  }}
                >
                  Next release
                </p>
                <h4 className="mt-3 font-display text-2xl text-foreground" style={{ fontWeight: 600 }}>
                  Product in Development
                </h4>
              </div>
              <span
                className="soft-pill rounded-full border border-border px-3 py-1 text-muted-foreground"
                style={{
                  fontFamily: "var(--font-mono, monospace)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                }}
              >
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

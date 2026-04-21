import { motion } from "framer-motion";
import { Rocket, Sparkles } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";

const readyItems = [
  { label: "Navigation", detail: "Fully integrated into the JM Labs nav and footer" },
  { label: "Legal layer", detail: "Privacy and terms pages already linked from this slot" },
  { label: "Brand identity", detail: "JM Labs company shell ready to support the new product page" },
  { label: "Launch structure", detail: "No rebuild needed — the site already accommodates the next release" },
] as const;

export function UpcomingProductPage() {
  return (
    <div className="space-y-20 pb-20 pt-10 md:space-y-28 md:pt-16">

      {/* ─── Hero ─── */}
      <section className="px-4 md:px-6">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr,0.9fr] md:items-center">
          <div className="space-y-6">
            <p className="eyebrow">Product in development</p>
            <h1 className="hero-title">
              The next JM Labs product{" "}
              <em style={{ fontStyle: "italic" }} className="gradient-text">
                already has a place
              </em>{" "}
              in the ecosystem.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
              A second JM Labs product is currently in development. This page gives that release a dedicated destination inside the parent-site structure while the product details continue to take shape.
            </p>
            <div className="flex flex-wrap gap-4">
              <a className={buttonVariants({ size: "lg" })} href="./index.html">
                Back to parent site
              </a>
              <a className={buttonVariants({ variant: "secondary", size: "lg" })} href="./about.html">
                Learn about JM Labs
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75 }}
            className="panel relative overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1600&q=80"
              alt="Upcoming product planning"
              className="h-[420px] w-full rounded-[28px] object-cover"
            />
            <div className="glass-card-strong absolute inset-x-8 bottom-8 rounded-[28px] border border-border p-5 backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <Rocket className="h-5 w-5 text-primary" />
                <p className="font-display text-xl text-foreground" style={{ fontWeight: 600 }}>
                  Connected to the JM Labs product system
                </p>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                Brand continuity, navigation, and page structure are already in place, so the next release can launch into a site that already feels established.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── What's already ready ─── */}
      <section className="px-4 md:px-6">
        <div className="mx-auto max-w-7xl space-y-8">
          <p className="eyebrow">What's already ready</p>
          <h2 className="section-heading max-w-3xl">
            The launch infrastructure is in place before the product ships.
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {readyItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.08, duration: 0.55 }}
                className="panel flex items-start gap-4"
              >
                <span className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary text-sm font-mono font-bold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-display text-lg font-semibold text-foreground" style={{ fontWeight: 600 }}>
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">{item.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="px-4 md:px-6">
        <div className="cta-panel mx-auto max-w-7xl rounded-[36px] px-6 py-10 md:px-10 md:py-14">
          <div className="grid gap-5 md:grid-cols-[1.1fr,0.9fr] md:items-center">
            <div className="space-y-5">
              <p className="eyebrow">Ready for launch</p>
              <h2 className="section-heading">
                When the new product is announced, its page can expand without changing the rest of the{" "}
                <em style={{ fontStyle: "italic" }} className="gradient-text">JM Labs website.</em>
              </h2>
            </div>
            <div className="glass-card panel flex items-start gap-4">
              <Sparkles className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
              <p className="text-sm leading-7 text-muted-foreground">
                This page marks an active product slot inside the JM Labs ecosystem, making space for the next release without breaking the parent-company structure.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

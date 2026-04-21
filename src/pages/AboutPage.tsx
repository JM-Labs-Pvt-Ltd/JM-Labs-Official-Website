import { motion } from "framer-motion";
import { Layers3, Shield, Workflow } from "lucide-react";

const values = [
  {
    icon: Layers3,
    title: "Operational software first",
    body: "JM Labs builds around real desks and daily workflows. Bullion Master already reflects that with ledger control, stock tracking, reports, and backup-heavy operations.",
  },
  {
    icon: Workflow,
    title: "Parent company with product depth",
    body: "The JM Labs site introduces the company first, then lets each product explain its own workflows. Bullion Master can speak in detail without losing the parent-company context.",
  },
  {
    icon: Shield,
    title: "Trust tied to real handling",
    body: "Privacy, terms, local-first storage, PIN security, backup, and restore are presented as part of the product reality instead of as disconnected legal filler.",
  },
] as const;

export function AboutPage() {
  return (
    <div className="space-y-20 pb-20 pt-10 md:space-y-28 md:pt-16">
      <section className="px-4 md:px-6">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.05fr,0.95fr] md:items-center">
          <div className="space-y-6">
            <p className="eyebrow">About the parent company</p>
            <h1 className="hero-title">
              JM Labs builds focused business software with product pages grounded in real operations.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
              JM Labs is the parent company behind a growing line of focused software products. Bullion Master is live today for bullion businesses, and future releases will sit in the same ecosystem with dedicated product pages, legal context, and company identity.
            </p>
          </div>

          <div className="image-shell relative overflow-hidden rounded-[36px] border border-border p-4">
            <img
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=80"
              alt="JM Labs collaborative design and product planning"
              className="h-[420px] w-full rounded-[26px] object-cover"
            />
            <div className="glass-card-strong absolute inset-x-8 bottom-8 rounded-[28px] border border-border p-5 backdrop-blur-xl">
              <p className="font-display text-xs uppercase tracking-[0.35em] text-primary/[0.7]">Company posture</p>
              <p className="mt-3 text-lg text-foreground">
                A parent-company site built to support live product detail, connected legal pages, and future JM Labs releases without another restructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 md:px-6">
        <div className="mx-auto max-w-7xl space-y-8">
          <p className="eyebrow">Operating principles</p>
          <div className="grid gap-5 md:grid-cols-3">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.08, duration: 0.55 }}
                className="panel"
              >
                <value.icon className="h-5 w-5 text-primary" />
                <h2 className="mt-5 font-display text-xl text-foreground">{value.title}</h2>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{value.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 md:px-6">
        <div className="surface-shell mx-auto grid max-w-7xl gap-6 rounded-[36px] border border-border p-6 md:grid-cols-2 md:p-10">
          <div className="space-y-5">
            <p className="eyebrow">Company structure</p>
            <h2 className="section-heading">JM Labs gives Bullion Master a company layer while keeping the product story specific.</h2>
          </div>
          <div className="space-y-4 text-base leading-8 text-muted-foreground">
            <p>
              Bullion Master sits under the JM Labs umbrella, but its page still has room to explain Daily Ledger, Net Daily Position, Inventory, Reports Center, and the product's security and backup model in its own language.
            </p>
            <p>
              That same structure leaves a clean slot for the next JM Labs product, so growth does not require rebuilding the site every time a new release is ready.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

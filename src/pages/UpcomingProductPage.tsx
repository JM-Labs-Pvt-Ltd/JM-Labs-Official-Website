import { Rocket, Sparkles } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";

export function UpcomingProductPage() {
  return (
    <div className="space-y-20 pb-20 pt-10 md:space-y-28 md:pt-16">
      <section className="px-4 md:px-6">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr,0.9fr] md:items-center">
          <div className="space-y-6">
            <p className="eyebrow">Product in development</p>
            <h1 className="hero-title">The next JM Labs product already has a place in the ecosystem.</h1>
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

          <div className="panel relative overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1600&q=80"
              alt="Upcoming product planning"
              className="h-[420px] w-full rounded-[28px] object-cover"
            />
            <div className="glass-card-strong absolute inset-x-8 bottom-8 rounded-[28px] border border-border p-5 backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <Rocket className="h-5 w-5 text-primary" />
                <p className="font-display text-xl text-foreground">Connected to the JM Labs product system</p>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                Brand continuity, navigation, and page structure are already in place, so the next release can launch into a site that already feels established.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 md:px-6">
        <div className="cta-panel mx-auto max-w-7xl rounded-[36px] px-6 py-10 md:px-10 md:py-14">
          <div className="grid gap-5 md:grid-cols-[1.1fr,0.9fr] md:items-center">
            <div className="space-y-5">
              <p className="eyebrow">Ready for launch</p>
              <h2 className="section-heading">When the new product is announced, its page can expand without changing the rest of the JM Labs website.</h2>
            </div>
            <div className="glass-card panel flex items-start gap-4">
              <Sparkles className="mt-1 h-5 w-5 text-primary" />
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

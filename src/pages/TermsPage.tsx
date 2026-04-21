import { termsSections } from "@/data/site-content";

export function TermsPage() {
  return (
    <div className="space-y-16 pb-20 pt-10 md:space-y-20 md:pt-16">
      <section className="px-4 md:px-6">
        <div className="surface-shell mx-auto max-w-6xl rounded-[36px] border border-border px-6 py-10 md:px-10 md:py-14">
          <p className="eyebrow">Terms and conditions</p>
          <h1 className="hero-title max-w-4xl">Terms and Conditions</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
            These terms govern the use of Bullion Master as a workflow-assistance product built by JM Labs for lawful business operations.
          </p>
          <p className="mt-4 text-sm uppercase tracking-[0.25em] text-primary/70">Last Updated: March 7, 2026</p>
        </div>
      </section>

      <section className="px-4 md:px-6">
        <div className="mx-auto grid max-w-6xl gap-5">
          {termsSections.map((section) => (
            <section key={section.number} className="panel">
              <div className="grid gap-4 md:grid-cols-[90px,1fr]">
                <div className="font-display text-3xl text-primary/65">{section.number}</div>
                <div>
                  <h2 className="font-display text-2xl text-foreground">{section.title}</h2>
                  {section.body.map((paragraph) => (
                    <p key={paragraph} className="mt-4 text-sm leading-7 text-muted-foreground md:text-base">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>
      </section>
    </div>
  );
}

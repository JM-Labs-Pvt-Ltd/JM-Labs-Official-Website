import { privacySections } from "@/data/site-content";

export function PrivacyPage() {
  return (
    <div className="space-y-16 pb-20 pt-10 md:space-y-20 md:pt-16">
      <section className="px-4 md:px-6">
        <div className="surface-shell mx-auto max-w-6xl rounded-[36px] border border-border px-6 py-10 md:px-10 md:py-14">
          <p className="eyebrow">Privacy and data handling</p>
          <h1 className="hero-title max-w-4xl">Privacy Policy</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
            Bullion Master uses a local-first approach, with cloud features used for specific account, backup, restore, sync, and subscription workflows.
          </p>
          <p className="mt-4 text-sm uppercase tracking-[0.25em] text-primary/70">Last Updated: March 7, 2026</p>
        </div>
      </section>

      <section className="px-4 md:px-6">
        <div className="mx-auto max-w-6xl">
          <article className="space-y-5">
            {privacySections.map((section) => (
              <section key={section.id} id={section.id} className="panel scroll-mt-28 space-y-5">
                <div className="flex items-start gap-4">
                  <span className="font-display text-3xl text-primary/65">{section.number}</span>
                  <div>
                    <h2 className="font-display text-2xl text-foreground">{section.title}</h2>
                    {section.body?.map((paragraph) => (
                      <p key={paragraph} className="mt-3 text-sm leading-7 text-muted-foreground md:text-base">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
                {section.bullets ? (
                  <div className="grid gap-3 md:grid-cols-2">
                    {section.bullets.map((bullet) => (
                      <div key={bullet} className="glass-card rounded-[22px] border border-border p-4 text-sm leading-7 text-muted-foreground">
                        {bullet}
                      </div>
                    ))}
                  </div>
                ) : null}
              </section>
            ))}
          </article>
        </div>
      </section>
    </div>
  );
}

import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen, Clock } from "lucide-react";

const articles = [
  {
    href: "/blog/daily-ledger-guide.html",
    category: "Ledger",
    categoryColor: "text-amber-600 dark:text-amber-400",
    title: "How Gold and Silver Traders Use a Daily Ledger",
    excerpt:
      "Every bullion trade starts with an entry. Learn what goes into a daily ledger — party name, item, purity, weight, rate, and settlement — and why this is the foundation of your business records.",
    readTime: "7 min",
    date: "Apr 24, 2026",
    feature: "Daily Ledger module",
  },
  {
    href: "/blog/net-daily-position.html",
    category: "Position Tracking",
    categoryColor: "text-blue-600 dark:text-blue-400",
    title: "What is Net Daily Position (NDP) in Bullion Trading?",
    excerpt:
      "Net Daily Position tells you exactly where you stand at end of day — how much gold or silver you are net long or short across all your trades. Here is how Indian traders calculate and use NDP.",
    readTime: "5 min",
    date: "Apr 24, 2026",
    feature: "Net Daily Position module",
  },
  {
    href: "/blog/badla-register-guide.html",
    category: "Carry Forward",
    categoryColor: "text-emerald-600 dark:text-emerald-400",
    title: "Badla in Bullion Trading: What It Is and How to Track It",
    excerpt:
      "Badla — the carry-forward position between parties — is central to daily settlement in Sarafa Bazaar and Zaveri Bazaar. Learn what it is, how badla charges work, and how traders track it digitally.",
    readTime: "6 min",
    date: "Apr 24, 2026",
    feature: "Badla Register module",
  },
  {
    href: "/blog/gold-inventory-management.html",
    category: "Inventory",
    categoryColor: "text-purple-600 dark:text-purple-400",
    title: "Gold and Silver Inventory: Purity, Weight, and Stock Control",
    excerpt:
      "Bullion inventory is not like regular stock. Purity, unit conversion, and form all matter. Learn how Indian traders manage gold and silver stock across bars, coins, and loose metal with full reconciliation.",
    readTime: "6 min",
    date: "Apr 24, 2026",
    feature: "Inventory module",
  },
  {
    href: "/blog/refinery-desk-guide.html",
    category: "Refinery",
    categoryColor: "text-rose-600 dark:text-rose-400",
    title: "The Refinery Desk: Tracking Gold Refining from Inward to Outward",
    excerpt:
      "Refinery operations — inward raw metal, melting, assaying, and outward delivery — create records that generic accounting tools miss entirely. Here is how a dedicated Refinery Desk module changes operations.",
    readTime: "5 min",
    date: "Apr 24, 2026",
    feature: "Refinery Desk module",
  },
];

export function BlogPage() {
  return (
    <div className="space-y-20 pb-20 pt-10 md:space-y-28 md:pt-16">

      {/* Hero */}
      <section className="hero-shell relative overflow-hidden px-4 py-14 md:px-6 md:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-20 -top-16 h-[400px] w-[400px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, var(--primary) 0%, transparent 70%)", filter: "blur(72px)" }}
        />
        <div className="relative mx-auto max-w-7xl space-y-6">
          <p className="eyebrow">From the JM Labs team</p>
          <h1 className="hero-title max-w-3xl">
            Practical guides for{" "}
            <em className="gradient-text" style={{ fontStyle: "italic" }}>
              Indian bullion traders
            </em>
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
            Every article here is written around how a real gold or silver trading business actually operates — what entries you make, why each record matters, and how digital tools replace manual registers without changing your workflow.
          </p>
          <div className="flex items-center gap-3">
            <BookOpen className="h-4 w-4 text-primary/60" />
            <span className="text-sm text-muted-foreground" style={{ fontFamily: "var(--font-mono, monospace)", letterSpacing: "0.08em" }}>
              {articles.length} articles · Updated regularly
            </span>
          </div>
        </div>
      </section>

      {/* Articles grid */}
      <section className="px-4 md:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, i) => (
              <motion.a
                key={article.href}
                href={article.href}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                className="panel group flex flex-col gap-4 no-underline transition-all duration-200 hover:-translate-y-0.5"
              >
                {/* Category + read time */}
                <div className="flex items-center justify-between">
                  <span
                    className={`text-[0.65rem] font-semibold uppercase ${article.categoryColor}`}
                    style={{ fontFamily: "var(--font-mono, monospace)", letterSpacing: "0.18em" }}
                  >
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    {article.readTime} read
                  </span>
                </div>

                {/* Title */}
                <h2
                  className="font-display text-lg text-foreground leading-snug group-hover:text-primary transition-colors duration-200"
                  style={{ fontWeight: 600 }}
                >
                  {article.title}
                </h2>

                {/* Excerpt */}
                <p className="text-sm leading-7 text-muted-foreground flex-1">{article.excerpt}</p>

                {/* Footer row */}
                <div className="flex items-center justify-between border-t border-border pt-4">
                  <span className="text-xs text-muted-foreground" style={{ fontFamily: "var(--font-mono, monospace)" }}>
                    {article.date}
                  </span>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                    Read
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 md:px-6">
        <div className="mx-auto max-w-7xl">
          <div
            className="relative overflow-hidden rounded-2xl border border-border p-8 md:p-12"
            style={{ background: "var(--cta-panel-background)" }}
          >
            <div className="absolute inset-x-0 top-0 h-px" style={{ background: "linear-gradient(90deg, transparent 0%, var(--primary) 50%, transparent 100%)" }} />
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="space-y-3">
                <p className="eyebrow">Try it yourself</p>
                <h2 className="section-heading max-w-lg">
                  See every guide in action inside{" "}
                  <span className="gradient-text italic">Bullion Master</span>
                </h2>
                <p className="max-w-md text-sm leading-7 text-muted-foreground">
                  Every feature described in these articles is live in the app. Daily Ledger, NDP, Badla Register, Refinery Desk, Inventory — all of it. 30-day free trial, no card required.
                </p>
              </div>
              <div className="flex flex-col gap-3 md:flex-shrink-0 md:items-end">
                <a
                  href="./bullion-master.html"
                  className="inline-flex items-center gap-2 rounded-xl px-6 py-3.5 font-semibold text-sm"
                  style={{ background: "var(--primary)", color: "#fff" }}
                >
                  View Bullion Master
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href="mailto:connect@jmlabs.in"
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                  style={{ fontFamily: "var(--font-mono, monospace)" }}
                >
                  connect@jmlabs.in
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

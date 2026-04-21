import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

export function SiteFooter() {
  return (
    <footer className="px-4 pb-10 pt-14 md:px-6">
      {/* Gold divider */}
      <div className="mx-auto mb-8 max-w-7xl">
        <div
          className="h-px w-full"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, var(--primary) 30%, var(--secondary) 70%, transparent 100%)",
            opacity: 0.35,
          }}
        />
      </div>

      <div className="footer-shell mx-auto grid max-w-7xl gap-8 rounded-2xl border border-border p-8 md:grid-cols-2 md:p-10 lg:grid-cols-12 lg:gap-10">
        {/* Brand column */}
        <div className="space-y-5 md:col-span-2 lg:col-span-5">
          <div className="flex items-center gap-3">
            <img src="./jm-labs-icon-final.svg" alt="JM Labs" className="h-8 w-8 object-contain" />
            <div>
              <p
                className="font-display text-lg text-foreground"
                style={{ fontWeight: 600, letterSpacing: "-0.01em" }}
              >
                JM Labs
              </p>
              <p className="text-xs text-muted-foreground" style={{ fontFamily: "var(--font-mono, monospace)", letterSpacing: "0.1em" }}>
                FOCUSED SOFTWARE SYSTEMS
              </p>
            </div>
          </div>
          <p className="max-w-xl text-sm leading-7 text-muted-foreground">
            JM Labs builds purpose-built business software. Bullion Master is live today — a
            complete operating system for bullion desks with ledger control, stock management,
            and on-device security. The next product is already in development.
          </p>
          <p
            className="text-xs text-muted-foreground"
            style={{ fontFamily: "var(--font-mono, monospace)", letterSpacing: "0.08em" }}
          >
            © 2026 JM LABS. ALL RIGHTS RESERVED.
          </p>
        </div>

        {/* Pages column */}
        <div className="space-y-4 lg:col-span-3 lg:justify-self-stretch">
          <p
            className="text-xs uppercase text-primary/70"
            style={{ fontFamily: "var(--font-mono, monospace)", letterSpacing: "0.28em" }}
          >
            Pages
          </p>
          <div className="grid gap-3">
            <FooterLink href="./index.html">Home</FooterLink>
            <FooterLink href="./about.html">About JM Labs</FooterLink>
            <FooterLink href="./bullion-master.html">Bullion Master</FooterLink>
            <FooterLink href="./next-product.html">Product in Development</FooterLink>
          </div>
        </div>

        {/* Policies column */}
        <div className="space-y-4 lg:col-span-4 lg:justify-self-stretch">
          <p
            className="text-xs uppercase text-primary/70"
            style={{ fontFamily: "var(--font-mono, monospace)", letterSpacing: "0.28em" }}
          >
            Legal &amp; Connect
          </p>
          <div className="grid gap-3">
            <FooterLink href="./privacy-policy.html">Privacy Policy</FooterLink>
            <FooterLink href="./terms-and-conditions.html">Terms and Conditions</FooterLink>
            <FooterLink href="./index.html#connect">Request a Demo</FooterLink>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
      href={href}
    >
      {children}
      <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  );
}

import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

export function SiteFooter() {
  return (
    <footer className="px-4 pb-10 pt-14 md:px-6">
      <div className="footer-shell mx-auto grid max-w-7xl gap-8 rounded-[32px] border border-border p-8 md:grid-cols-2 md:p-10 lg:grid-cols-12 lg:gap-10">
        <div className="space-y-4 md:col-span-2 lg:col-span-5">
          <div className="flex items-center gap-3">
            <img src="./jm-labs-icon-final.svg" alt="JM Labs" className="h-8 w-8 object-contain" />
            <div>
              <p className="font-display text-lg text-foreground">JM Labs</p>
              <p className="text-sm text-muted-foreground">Focused software for real operating environments.</p>
            </div>
          </div>
          <p className="max-w-xl text-sm leading-7 text-muted-foreground">
            JM Labs builds purpose-built business software. Bullion Master is live, and the next product is already in development inside the same ecosystem.
          </p>
        </div>

        <div className="space-y-3 lg:col-span-3 lg:justify-self-stretch">
          <p className="font-display text-sm uppercase tracking-[0.3em] text-primary/70">Pages</p>
          <div className="grid gap-3">
            <FooterLink href="./index.html">Home</FooterLink>
            <FooterLink href="./about.html">About JM Labs</FooterLink>
            <FooterLink href="./bullion-master.html">Bullion Master</FooterLink>
            <FooterLink href="./next-product.html">Product in Development</FooterLink>
          </div>
        </div>

        <div className="space-y-3 lg:col-span-4 lg:justify-self-stretch">
          <p className="font-display text-sm uppercase tracking-[0.3em] text-primary/70">Policies</p>
          <div className="grid gap-3">
            <FooterLink href="./privacy-policy.html">Privacy Policy</FooterLink>
            <FooterLink href="./terms-and-conditions.html">Terms and Conditions</FooterLink>
            <FooterLink href="./index.html#connect">Request a Demo</FooterLink>
          </div>
          <p className="pt-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            © 2026 JM Labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-foreground" href={href}>
      {children}
      <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  );
}

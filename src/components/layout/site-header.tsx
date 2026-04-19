import { Menu, Sparkles, X } from "lucide-react";
import { useState } from "react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type HeaderProps = {
  currentPage: string;
};

const navItems = [
  { label: "Home", href: "./index.html", key: "home" },
  { label: "Products", href: "./index.html#products", key: "products" },
  { label: "About", href: "./about.html", key: "about" },
  { label: "Privacy", href: "./privacy-policy.html", key: "privacy" },
  { label: "Terms", href: "./terms-and-conditions.html", key: "terms" },
];

export function SiteHeader({ currentPage }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-4 z-50 px-4 md:px-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-[rgba(9,14,23,0.72)] px-4 py-3 shadow-[0_22px_70px_rgba(2,8,20,0.35)] backdrop-blur-xl md:px-6">
        <a className="flex items-center gap-3" href="./index.html">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5">
            <img
              src="./jm-labs-icon-final.svg"
              alt="JM Labs"
              className="h-6 w-6 object-contain"
            />
          </span>
          <div>
            <p className="font-display text-sm uppercase tracking-[0.35em] text-primary/70">
              JM Labs
            </p>
            <p className="text-sm text-muted-foreground">Focused software systems</p>
          </div>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const active =
              currentPage === item.key || (currentPage === "bullion-master" && item.key === "products");

            return (
              <a
                key={item.label}
                href={item.href}
                className={cn(
                  buttonVariants({ variant: "ghost", size: "sm" }),
                  "rounded-full px-4",
                  active && "bg-white/10 text-foreground"
                )}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a className={buttonVariants({ variant: "secondary", size: "sm" })} href="./bullion-master.html">
            View flagship
          </a>
          <a className={buttonVariants({ size: "sm" })} href="./index.html#connect">
            <Sparkles className="h-4 w-4" />
            Request a demo
          </a>
        </div>

        <button
          className={cn(buttonVariants({ variant: "secondary", size: "sm" }), "md:hidden")}
          onClick={() => setIsOpen((value) => !value)}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          type="button"
        >
          {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {isOpen ? (
        <div className="mx-auto mt-3 max-w-7xl rounded-[28px] border border-white/10 bg-[rgba(9,14,23,0.92)] p-4 shadow-[0_22px_70px_rgba(2,8,20,0.35)] backdrop-blur-xl md:hidden">
          <nav className="grid gap-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={cn(buttonVariants({ variant: "ghost" }), "justify-start rounded-2xl")}
              >
                {item.label}
              </a>
            ))}
            <a className={buttonVariants({ variant: "secondary" })} href="./bullion-master.html">
              View flagship
            </a>
            <a className={buttonVariants({ size: "default" })} href="./index.html#connect">
              Request a demo
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

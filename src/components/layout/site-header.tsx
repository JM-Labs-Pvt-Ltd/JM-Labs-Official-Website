import { Menu, MoonStar, Sparkles, SunMedium, X } from "lucide-react";
import { useState } from "react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type HeaderProps = {
  currentPage: string;
  theme: "light" | "dark";
  onToggleTheme: () => void;
};

const navItems = [
  { label: "Home", href: "./index.html", key: "home" },
  { label: "Products", href: "./index.html#products", key: "products" },
  { label: "About", href: "./about.html", key: "about" },
  { label: "Privacy", href: "./privacy-policy.html", key: "privacy" },
  { label: "Terms", href: "./terms-and-conditions.html", key: "terms" },
];

export function SiteHeader({ currentPage, theme, onToggleTheme }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const isDark = theme === "dark";

  return (
    <header className="sticky top-4 z-50 px-4 md:px-6">
      <div className="chrome-shell mx-auto flex max-w-7xl items-center justify-between rounded-full border border-border px-4 py-2.5 backdrop-blur-xl md:px-6">

        {/* Logo */}
        <a className="flex items-center gap-3" href="./index.html">
          <span
            className="soft-pill inline-flex h-10 w-10 items-center justify-center rounded-full border border-border"
            style={{ background: "var(--glass-background)" }}
          >
            <img
              src="./jm-labs-icon-final.svg"
              alt="JM Labs"
              className="h-5.5 w-5.5 object-contain"
            />
          </span>
          <div>
            <p
              className="font-display text-sm uppercase text-primary/80"
              style={{
                letterSpacing: "0.3em",
                fontWeight: 600,
                fontSize: "0.72rem",
                fontFamily: "var(--font-mono, monospace)",
              }}
            >
              JM Labs
            </p>
            <p className="text-xs text-muted-foreground" style={{ marginTop: "1px" }}>
              Focused software systems
            </p>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-0.5 md:flex">
          {navItems.map((item) => {
            const active =
              currentPage === item.key ||
              (currentPage === "bullion-master" && item.key === "products");

            return (
              <a
                key={item.label}
                href={item.href}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200",
                  active
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {active && (
                  <span
                    className="absolute inset-0 rounded-full"
                    style={{ background: "var(--muted)", opacity: 0.7 }}
                  />
                )}
                <span className="relative">{item.label}</span>
                {active && (
                  <span
                    className="absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 w-4 rounded-full"
                    style={{ background: "var(--primary)", opacity: 0.8 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-2.5 md:flex">
          <button
            className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "gap-1.5")}
            onClick={onToggleTheme}
            type="button"
            aria-pressed={isDark}
            aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
          >
            {isDark ? <SunMedium className="h-3.5 w-3.5" /> : <MoonStar className="h-3.5 w-3.5" />}
            {isDark ? "Light" : "Dark"}
          </button>
          <a
            className={cn(buttonVariants({ variant: "secondary", size: "sm" }))}
            href="./bullion-master.html"
          >
            View flagship
          </a>
          <a
            className={buttonVariants({ size: "sm" })}
            href="./index.html#connect"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Request a demo
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          className={cn(buttonVariants({ variant: "secondary", size: "sm" }), "md:hidden")}
          onClick={() => setIsOpen((v) => !v)}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          type="button"
        >
          {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {/* Mobile menu panel */}
      {isOpen ? (
        <div className="chrome-shell mx-auto mt-2 max-w-7xl rounded-[28px] border border-border p-4 backdrop-blur-xl md:hidden">
          <nav className="grid gap-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "justify-start rounded-2xl"
                )}
              >
                {item.label}
              </a>
            ))}
            <div className="mt-1 border-t border-border pt-2 grid gap-2">
              <button
                className={cn(buttonVariants({ variant: "secondary" }), "justify-start")}
                onClick={onToggleTheme}
                type="button"
              >
                {isDark ? <SunMedium className="h-4 w-4" /> : <MoonStar className="h-4 w-4" />}
                {isDark ? "Light mode" : "Dark mode"}
              </button>
              <a className={buttonVariants({ variant: "secondary" })} href="./bullion-master.html">
                View flagship
              </a>
              <a className={buttonVariants({ size: "default" })} href="./index.html#connect">
                <Sparkles className="h-4 w-4" />
                Request a demo
              </a>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

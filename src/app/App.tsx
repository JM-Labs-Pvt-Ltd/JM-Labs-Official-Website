import { type ComponentType, useEffect, useState } from "react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import LoadingSpinner from "@/components/ui/snow-ball-loading-spinner";
import { AboutPage } from "@/pages/AboutPage";
import { BullionMasterPage } from "@/pages/BullionMasterPage";
import { HomePage } from "@/pages/HomePage";
import { PrivacyPage } from "@/pages/PrivacyPage";
import { TermsPage } from "@/pages/TermsPage";
import { UpcomingProductPage } from "@/pages/UpcomingProductPage";

type PageConfig = {
  key: "home" | "about" | "bullion-master" | "privacy" | "terms" | "upcoming";
  title: string;
  render: ComponentType;
};

const BOOT_CACHE_KEY = "jm-labs-loader-dismissed";
const THEME_CACHE_KEY = "jm-labs-theme";

type ThemeMode = "light" | "dark";

const pageMap: Record<string, PageConfig> = {
  "": {
    key: "home",
    title: "JM Labs | Parent Platform for Focused Software Products",
    render: HomePage,
  },
  "index.html": {
    key: "home",
    title: "JM Labs | Parent Platform for Focused Software Products",
    render: HomePage,
  },
  "about.html": {
    key: "about",
    title: "About JM Labs",
    render: AboutPage,
  },
  "bullion-master.html": {
    key: "bullion-master",
    title: "Bullion Master | JM Labs",
    render: BullionMasterPage,
  },
  "privacy-policy.html": {
    key: "privacy",
    title: "Privacy Policy | JM Labs",
    render: PrivacyPage,
  },
  "terms-and-conditions.html": {
    key: "terms",
    title: "Terms and Conditions | JM Labs",
    render: TermsPage,
  },
  "next-product.html": {
    key: "upcoming",
    title: "Product in Development | JM Labs",
    render: UpcomingProductPage,
  },
};

function getPageConfig(): PageConfig {
  const fileName = window.location.pathname.split("/").pop() ?? "";
  return pageMap[fileName] ?? pageMap["index.html"];
}

function getInitialTheme(): ThemeMode {
  if (typeof document === "undefined") {
    return "light";
  }

  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

export default function App() {
  const page = getPageConfig();
  const Page = page.render;
  const [theme, setTheme] = useState<ThemeMode>(getInitialTheme);
  const [isLoading, setIsLoading] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    const prefersReducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
    const hasSeenLoader = window.sessionStorage.getItem(BOOT_CACHE_KEY) === "1";

    return !prefersReducedMotion && !hasSeenLoader;
  });

  useEffect(() => {
    document.title = page.title;
  }, [page.title]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem(THEME_CACHE_KEY, theme);
  }, [theme]);

  useEffect(() => {
    if (!isLoading) {
      window.sessionStorage.setItem(BOOT_CACHE_KEY, "1");
      return;
    }

    const timer = window.setTimeout(() => {
      setIsLoading(false);
      window.sessionStorage.setItem(BOOT_CACHE_KEY, "1");
    }, 850);

    return () => window.clearTimeout(timer);
  }, [isLoading]);

  return (
    <div className="min-h-screen">
      <div className="app-background pointer-events-none fixed inset-0 -z-10" />
      <div
        className={`app-overlay fixed inset-0 z-50 flex items-center justify-center transition-all duration-700 ${
          isLoading ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!isLoading}
      >
        <div className="app-loading-card rounded-[32px] border border-border px-10 py-9 backdrop-blur-xl">
          <div className="flex flex-col items-center gap-3 text-center">
            <span className="eyebrow">JM Labs loading</span>
            <LoadingSpinner />
            <p className="max-w-xs text-sm leading-7 text-muted-foreground">
              Preparing the JM Labs experience and loading the current product page.
            </p>
          </div>
        </div>
      </div>
      <div className={`transition-opacity duration-500 ${isLoading ? "opacity-0" : "opacity-100"}`}>
        <SiteHeader
          currentPage={page.key}
          theme={theme}
          onToggleTheme={() => setTheme((current) => (current === "light" ? "dark" : "light"))}
        />
        <main>
          <Page />
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}

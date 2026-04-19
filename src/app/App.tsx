import { type ComponentType, useEffect, useState } from "react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { PrismFluxLoader } from "@/components/ui/prism-flux-loader";
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

export default function App() {
  const page = getPageConfig();
  const Page = page.render;
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
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(249,190,85,0.13),transparent_22%),radial-gradient(circle_at_80%_10%,rgba(79,111,255,0.12),transparent_26%),linear-gradient(180deg,#0d1420_0%,#070b12_100%)]" />
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-[radial-gradient(circle_at_top,rgba(247,186,83,0.16),transparent_24%),radial-gradient(circle_at_75%_18%,rgba(126,165,255,0.16),transparent_28%),linear-gradient(180deg,rgba(13,20,32,0.98),rgba(7,11,18,0.99))] transition-all duration-700 ${
          isLoading ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!isLoading}
      >
        <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(15,21,33,0.88),rgba(8,12,20,0.96))] px-10 py-9 shadow-[0_30px_90px_rgba(2,8,20,0.45)] backdrop-blur-xl">
          <div className="flex flex-col items-center gap-3 text-center">
            <span className="eyebrow">JM Labs loading</span>
            <PrismFluxLoader />
            <p className="max-w-xs text-sm leading-7 text-muted-foreground">
              Preparing the JM Labs experience and loading the current product page.
            </p>
          </div>
        </div>
      </div>
      <div className={`transition-opacity duration-500 ${isLoading ? "opacity-0" : "opacity-100"}`}>
        <SiteHeader currentPage={page.key} />
        <main>
          <Page />
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}

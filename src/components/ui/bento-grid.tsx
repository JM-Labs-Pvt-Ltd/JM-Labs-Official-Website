"use client";

import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export interface BentoItem {
  title: string;
  description: string;
  icon: ReactNode;
  href?: string;
  status?: string;
  tags?: string[];
  meta?: string;
  cta?: string;
  colSpan?: number;
  hasPersistentHover?: boolean;
}

interface BentoGridProps {
  items: BentoItem[];
  className?: string;
}

function BentoGrid({ items, className }: BentoGridProps) {
  return (
    <div className={cn("mx-auto grid max-w-7xl grid-cols-1 gap-3 p-4 md:grid-cols-3", className)}>
      {items.map((item, index) => (
        <a
          key={`${item.title}-${index}`}
          href={item.href ?? "#"}
          className={cn(
            "group relative overflow-hidden rounded-xl border border-border bg-[var(--bento-background)] p-4 transition-all duration-300 will-change-transform hover:-translate-y-0.5 hover:shadow-[var(--bento-shadow)]",
            item.colSpan === 2 ? "md:col-span-2" : "col-span-1",
            {
              "-translate-y-0.5 shadow-[var(--bento-shadow)]":
                item.hasPersistentHover,
              "cursor-pointer": Boolean(item.href),
            }
          )}
        >
          <div
            className={cn(
              "absolute inset-0 transition-opacity duration-300",
              item.hasPersistentHover ? "opacity-100" : "opacity-0 group-hover:opacity-100"
            )}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--bento-dot)_1px,transparent_1px)] bg-[length:4px_4px]" />
          </div>

          <div className="relative flex flex-col space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted/80 transition-all duration-300 group-hover:bg-gradient-to-br">
                {item.icon}
              </div>
              <span
                className={cn(
                  "rounded-lg bg-muted/80 px-2 py-1 text-xs font-medium text-muted-foreground backdrop-blur-sm transition-colors duration-300 group-hover:bg-muted"
                )}
              >
                {item.status || "Active"}
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="text-[15px] font-medium tracking-tight text-foreground">
                {item.title}
                {item.meta ? (
                  <span className="ml-2 text-xs font-normal text-muted-foreground">
                    {item.meta}
                  </span>
                ) : null}
              </h3>
              <p className="text-sm leading-snug font-[425] text-muted-foreground">
                {item.description}
              </p>
            </div>

            <div className="mt-2 flex items-center justify-between">
              <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                {item.tags?.map((tag, i) => (
                  <span
                    key={`${tag}-${i}`}
                    className="rounded-md bg-muted/80 px-2 py-1 backdrop-blur-sm transition-all duration-200 hover:bg-muted"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              <span className="text-xs text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100">
                {item.cta || "Explore →"}
              </span>
            </div>
          </div>

          <div
            className={cn(
              "absolute inset-0 -z-10 rounded-xl bg-gradient-to-br from-transparent via-[var(--bento-border-glow)] to-transparent p-px transition-opacity duration-300",
              item.hasPersistentHover ? "opacity-100" : "opacity-0 group-hover:opacity-100"
            )}
          />
        </a>
      ))}
    </div>
  );
}

export { BentoGrid };

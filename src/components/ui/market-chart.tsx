"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const VIEW_W = 400;
const VIEW_H = 180;

// Simulated bullion portfolio performance (lower y = higher price)
// Data spans most of the viewBox height for a dramatic, readable curve
const dataPoints = [
  { x: 0,   y: 170 },
  { x: 44,  y: 138 },
  { x: 88,  y: 155 },
  { x: 132, y: 108 },
  { x: 176, y: 120 },
  { x: 220, y: 72  },
  { x: 264, y: 88  },
  { x: 308, y: 44  },
  { x: 352, y: 28  },
  { x: 400, y: 10  },
] as const;

const GRID_Y = [40, 80, 120, 160];
const TIME_LABELS = ["Jan", "Mar", "May", "Jul", "Sep", "Nov"];

type Point = { x: number; y: number };

function smoothLinePath(pts: readonly Point[]): string {
  let d = `M ${pts[0].x},${pts[0].y}`;
  for (let i = 1; i < pts.length; i++) {
    const prev = pts[i - 1];
    const curr = pts[i];
    const cpX = (prev.x + curr.x) / 2;
    d += ` C ${cpX},${prev.y} ${cpX},${curr.y} ${curr.x},${curr.y}`;
  }
  return d;
}

function areaPath(pts: readonly Point[]): string {
  const line = smoothLinePath(pts);
  const last = pts[pts.length - 1];
  return `${line} L ${last.x},${VIEW_H} L 0,${VIEW_H} Z`;
}

const LINE_PATH = smoothLinePath(dataPoints);
const AREA_PATH = areaPath(dataPoints);

export interface MarketChartProps {
  className?: string;
}

export function MarketChart({ className }: MarketChartProps) {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;
    const length = path.getTotalLength();
    path.style.strokeDasharray = `${length}`;
    path.style.strokeDashoffset = `${length}`;
    // small delay so the card renders before drawing starts
    const t = window.setTimeout(() => {
      path.style.transition = "stroke-dashoffset 2.6s cubic-bezier(0.4, 0, 0.2, 1)";
      path.style.strokeDashoffset = "0";
    }, 400);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <div className={className}>
      <svg
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        className="w-full h-auto block"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="mcLineGrad" x1="0" y1="0" x2="1" y2="0" gradientUnits="objectBoundingBox">
            <stop offset="0%" stopColor="var(--secondary)" />
            <stop offset="100%" stopColor="var(--primary)" />
          </linearGradient>
          <linearGradient id="mcAreaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="var(--primary)" stopOpacity="0.28" />
            <stop offset="75%"  stopColor="var(--primary)" stopOpacity="0.06" />
            <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
          </linearGradient>
          <clipPath id="mcClip">
            <rect x="0" y="0" width={VIEW_W} height={VIEW_H} />
          </clipPath>
        </defs>

        {/* Horizontal grid lines */}
        {GRID_Y.map((y) => (
          <line
            key={y}
            x1="0" y1={y}
            x2={VIEW_W} y2={y}
            stroke="currentColor"
            strokeOpacity="0.07"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
        ))}

        {/* Y-value labels on right */}
        {GRID_Y.map((y, i) => {
          const price = 2000 + (GRID_Y.length - 1 - i) * 120;
          return (
            <text
              key={y}
              x={VIEW_W - 2}
              y={y - 3}
              textAnchor="end"
              fontSize="8"
              fontFamily="var(--font-mono, monospace)"
              fill="currentColor"
              fillOpacity="0.3"
            >
              {price.toLocaleString()}
            </text>
          );
        })}

        {/* Area fill */}
        <path
          d={AREA_PATH}
          fill="url(#mcAreaGrad)"
          clipPath="url(#mcClip)"
        />

        {/* Animated chart line */}
        <path
          ref={pathRef}
          d={LINE_PATH}
          fill="none"
          stroke="url(#mcLineGrad)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          clipPath="url(#mcClip)"
        />

        {/* Data point dots */}
        {dataPoints.map((pt, i) => (
          <motion.circle
            key={i}
            cx={pt.x}
            cy={pt.y}
            r={i === dataPoints.length - 1 ? 4.5 : 3}
            fill={i === dataPoints.length - 1 ? "var(--primary)" : "var(--background)"}
            stroke="var(--primary)"
            strokeWidth={i === dataPoints.length - 1 ? 0 : 1.5}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.4 + 0.22 * i,
              duration: 0.25,
              ease: "backOut",
            }}
          />
        ))}

        {/* Pulse ring on latest point */}
        <motion.circle
          cx={dataPoints[dataPoints.length - 1].x}
          cy={dataPoints[dataPoints.length - 1].y}
          r={8}
          fill="none"
          stroke="var(--primary)"
          strokeWidth="1.5"
          initial={{ scale: 0.6, opacity: 0.6 }}
          animate={{ scale: 2.2, opacity: 0 }}
          transition={{
            delay: 3.2,
            duration: 1.8,
            repeat: Infinity,
            repeatDelay: 1.2,
            ease: "easeOut",
          }}
        />

        {/* Time axis labels */}
        {TIME_LABELS.map((label, i) => (
          <text
            key={label}
            x={(i / (TIME_LABELS.length - 1)) * VIEW_W}
            y={VIEW_H - 2}
            textAnchor="middle"
            fontSize="8"
            fontFamily="var(--font-mono, monospace)"
            fill="currentColor"
            fillOpacity="0.3"
          >
            {label}
          </text>
        ))}
      </svg>
    </div>
  );
}

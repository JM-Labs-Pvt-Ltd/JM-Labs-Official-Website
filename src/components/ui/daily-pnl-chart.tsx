"use client";

import { motion } from "framer-motion";

const pnlData = [
  { day: "Mon", value:  24500 },
  { day: "Tue", value:  18200 },
  { day: "Wed", value:  -8400 },
  { day: "Thu", value:  31800 },
  { day: "Fri", value:  42100 },
  { day: "Sat", value:  15600 },
  { day: "Sun", value:  27300, isToday: true },
] as const;

const VIEW_W    = 280;
const VIEW_H    = 140;
const BASELINE  = 95;        // y where zero line sits
const MAX_POS_H = 72;        // max height for positive bars (px in viewBox)
const MAX_NEG_H = 28;        // max height for negative bars
const BAR_W     = 28;
const GAP       = (VIEW_W - pnlData.length * BAR_W) / (pnlData.length - 1); // ~14 px
const MAX_ABS   = 42100;     // max absolute value in dataset

function barMetrics(value: number) {
  const pos = value >= 0;
  const h   = pos
    ? (value  / MAX_ABS) * MAX_POS_H
    : (Math.abs(value) / MAX_ABS) * MAX_NEG_H;
  const y   = pos ? BASELINE - h : BASELINE;
  return { pos, h, y };
}

export interface DailyPnLChartProps {
  className?: string;
}

export function DailyPnLChart({ className }: DailyPnLChartProps) {
  return (
    <div className={className}>
      <svg
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        className="w-full h-auto block"
        preserveAspectRatio="xMidYMid meet"
        aria-label="Daily Net Position — this week"
        role="img"
      >
        <defs>
          {/* Positive bar gradient */}
          <linearGradient id="posGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="var(--primary)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.5" />
          </linearGradient>
          {/* Today highlight gradient */}
          <linearGradient id="todayGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="var(--primary)" stopOpacity="1"   />
            <stop offset="100%" stopColor="var(--secondary)" stopOpacity="0.7" />
          </linearGradient>
          {/* Negative bar gradient */}
          <linearGradient id="negGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#f87171" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#f87171" stopOpacity="0.4" />
          </linearGradient>
        </defs>

        {/* Zero baseline */}
        <line
          x1="0" y1={BASELINE}
          x2={VIEW_W} y2={BASELINE}
          stroke="currentColor"
          strokeOpacity="0.12"
          strokeWidth="1"
        />

        {/* Subtle grid above baseline */}
        {[BASELINE - 24, BASELINE - 48, BASELINE - 72].map((y) => (
          <line
            key={y}
            x1="0" y1={y}
            x2={VIEW_W} y2={y}
            stroke="currentColor"
            strokeOpacity="0.05"
            strokeWidth="1"
            strokeDasharray="3 4"
          />
        ))}

        {/* Bars */}
        {pnlData.map((d, i) => {
          const { pos, h, y } = barMetrics(d.value);
          const x = i * (BAR_W + GAP);
          const isToday = "isToday" in d && d.isToday;
          const fill = isToday
            ? "url(#todayGrad)"
            : pos
            ? "url(#posGrad)"
            : "url(#negGrad)";

          // Each bar's animation completes at: barDelay + barDuration
          const barDelay    = 0.15 * i;
          const barDuration = 1.1;
          const afterBar    = barDelay + barDuration;

          return (
            <g key={d.day}>
              {/* Animated bar — grows from baseline upward */}
              <motion.rect
                x={x}
                y={BASELINE}
                width={BAR_W}
                height={0}
                rx={4}
                fill={fill}
                initial={{ y: BASELINE, height: 0 }}
                whileInView={{ y, height: h }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  delay: barDelay,
                  duration: barDuration,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />

              {/* "Today" — small dot at top of bar, appears after bar finishes */}
              {isToday && (
                <motion.circle
                  cx={x + BAR_W / 2}
                  cy={y}
                  r={3.5}
                  fill="var(--primary)"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: afterBar, duration: 0.3, ease: "backOut" }}
                />
              )}

              {/* Value label — appears after bar finishes growing */}
              <motion.text
                x={x + BAR_W / 2}
                y={pos ? y - (isToday ? 9 : 4) : y + h + 9}
                textAnchor="middle"
                fontSize="6.5"
                fontFamily="var(--font-mono, monospace)"
                fill="currentColor"
                fillOpacity="0"
                whileInView={{ fillOpacity: isToday ? 0.9 : 0.5 }}
                viewport={{ once: true }}
                transition={{ delay: afterBar, duration: 0.35 }}
              >
                {pos ? "+" : "-"}
                {(Math.abs(d.value) / 1000).toFixed(0)}K
              </motion.text>

              {/* Day label */}
              <text
                x={x + BAR_W / 2}
                y={VIEW_H - 2}
                textAnchor="middle"
                fontSize="7"
                fontFamily="var(--font-mono, monospace)"
                fill="currentColor"
                fillOpacity={"isToday" in d && d.isToday ? 0.8 : 0.35}
                fontWeight={"isToday" in d && d.isToday ? "500" : "400"}
              >
                {d.day}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

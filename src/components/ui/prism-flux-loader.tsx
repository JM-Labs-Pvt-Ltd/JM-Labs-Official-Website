"use client";

import React, { useEffect, useState } from "react";
import { PlusIcon } from "lucide-react";

interface CubeLoaderProps {
  size?: number;
  speed?: number;
  textSize?: number;
}

const statuses = ["Fetching", "Fixing", "Updating", "Placing", "Syncing", "Processing"] as const;

export const PrismFluxLoader: React.FC<CubeLoaderProps> = ({
  size = 34,
  speed = 5,
  textSize = 15,
}) => {
  const [time, setTime] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTime((prev) => prev + 0.02 * speed);
    }, 16);

    return () => window.clearInterval(interval);
  }, [speed]);

  useEffect(() => {
    const statusInterval = window.setInterval(() => {
      setStatusIndex((prev) => (prev + 1) % statuses.length);
    }, 600);

    return () => window.clearInterval(statusInterval);
  }, []);

  const half = size / 2;
  const currentStatus = statuses[statusIndex];

  return (
    <div className="flex h-[220px] flex-col items-center justify-center gap-5">
      <div
        className="relative"
        style={{
          width: size,
          height: size,
          transformStyle: "preserve-3d",
          transform: `rotateY(${time * 30}deg) rotateX(${time * 30}deg)`,
        }}
      >
        {statuses.slice(0, 6).map((_, i) => {
          const faceTransforms = [
            `rotateY(0deg) translateZ(${half}px)`,
            `rotateY(180deg) translateZ(${half}px)`,
            `rotateY(90deg) translateZ(${half}px)`,
            `rotateY(-90deg) translateZ(${half}px)`,
            `rotateX(90deg) translateZ(${half}px)`,
            `rotateX(-90deg) translateZ(${half}px)`,
          ];

          return (
            <div
              key={i}
              className="absolute flex items-center justify-center font-semibold text-foreground"
              style={{
                width: size,
                height: size,
                fontSize: `${textSize}px`,
                border: "1px solid rgba(244, 247, 251, 0.85)",
                background:
                  "linear-gradient(180deg, rgba(16, 23, 35, 0.92), rgba(7, 11, 19, 0.98))",
                boxShadow: "0 10px 30px rgba(2, 8, 20, 0.3)",
                transform: faceTransforms[i],
                backfaceVisibility: "hidden",
              }}
            >
              <PlusIcon className="h-4 w-4 text-primary" />
            </div>
          );
        })}
      </div>

      <div className="font-display text-sm font-semibold uppercase tracking-[0.28em] text-foreground/90">
        {currentStatus}...
      </div>
    </div>
  );
};

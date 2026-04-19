import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-[0_18px_40px_rgba(242,178,78,0.22)] hover:-translate-y-0.5 hover:brightness-105",
        secondary:
          "bg-card/80 text-foreground ring-1 ring-border hover:bg-card hover:-translate-y-0.5",
        ghost: "text-muted-foreground hover:text-foreground hover:bg-white/5",
        outline: "ring-1 ring-border bg-transparent hover:bg-white/5 text-foreground",
      },
      size: {
        default: "h-11 px-5",
        lg: "h-12 px-6 text-[0.95rem]",
        sm: "h-9 px-4 text-xs",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };

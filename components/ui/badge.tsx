import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const badgeVariants = cva(
  "inline-flex items-center rounded-pill px-2.5 py-0.5 text-xs font-semibold transition-colors font-sans select-none tracking-wide",
  {
    variants: {
      variant: {
        default:
          "bg-slate-100 text-slate-800 border border-slate-200/80",
        primary:
          "bg-teal-50 text-teal-800 border border-teal-200",
        accent:
          "bg-gold-50 text-gold-900 border border-gold-300",
        muted:
          "bg-slate-50 text-slate-600 border border-slate-200/60",
        success:
          "bg-emerald-50 text-emerald-800 border border-emerald-200",
        warning:
          "bg-amber-50 text-amber-800 border border-amber-200",
        outline:
          "border border-slate-200 text-slate-700 bg-transparent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export interface EyebrowProps extends React.HTMLAttributes<HTMLSpanElement> {
  accent?: boolean;
}

/**
 * Editorial Eyebrow / Overline component for section headers.
 * Avoids heavy pill treatment; uses clean uppercase tracking.
 */
export function Eyebrow({ className, accent = false, ...props }: EyebrowProps) {
  return (
    <span
      className={cn(
        "type-eyebrow inline-block",
        accent ? "text-gold-700" : "text-teal-600",
        className
      )}
      {...props}
    />
  );
}

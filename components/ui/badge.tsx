import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const badgeVariants = cva(
  "inline-flex items-center rounded-pill px-2.5 py-0.5 text-xs font-semibold transition-colors font-sans select-none tracking-wide",
  {
    variants: {
      variant: {
        default: "bg-[#EAF9FB] text-[#0891B2] border border-[#C4EEF2]",
        primary: "bg-[#DDF7FA] text-[#0891B2] border border-[#B8E0E5]",
        accent: "bg-[#06B6D4]/10 text-[#0891B2] border border-[#06B6D4]/20",
        muted: "bg-[#F8FAFC] text-[#64748B] border border-[#E2E8F0]",
        success:
          "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30",
        warning:
          "bg-[#C79A4A]/15 text-[#DFC286] border border-[#C79A4A]/30",
        outline:
          "border border-[#232727] text-[#D1CBC1] bg-transparent",
        glass:
          "bg-white/[0.05] backdrop-blur-md text-[#F3EFE7] border border-white/[0.1] shadow-xs hover:bg-white/[0.08] transition-colors",
        "glass-teal":
          "bg-[#C79A4A]/15 backdrop-blur-md text-[#DFC286] border border-[#C79A4A]/30 shadow-xs",
        "glass-accent":
          "bg-[#C79A4A]/20 backdrop-blur-md text-[#DFC286] border border-[#C79A4A]/40 shadow-xs",
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
        "type-eyebrow inline-block font-mono uppercase tracking-widest text-xs",
        accent ? "text-[#DFC286]" : "text-[#C79A4A]",
        className
      )}
      {...props}
    />
  );
}

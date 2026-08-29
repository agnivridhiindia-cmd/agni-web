import * as React from "react";
import { Loader2 } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const spinnerVariants = cva("animate-spin shrink-0", {
  variants: {
    size: {
      xs: "h-3.5 w-3.5",
      sm: "h-4 w-4",
      default: "h-5 w-5",
      lg: "h-8 w-8",
      xl: "h-12 w-12",
    },
    variant: {
      primary: "text-teal-600",
      accent: "text-gold-600",
      muted: "text-slate-400",
      white: "text-white",
    },
  },
  defaultVariants: {
    size: "default",
    variant: "primary",
  },
});

export interface SpinnerProps
  extends React.HTMLAttributes<SVGElement>,
    VariantProps<typeof spinnerVariants> {
  label?: string;
}

export function Spinner({
  size,
  variant,
  className,
  label = "Loading content...",
  ...props
}: SpinnerProps) {
  return (
    <span className="inline-flex items-center gap-2" role="status" aria-live="polite">
      <Loader2
        className={cn(spinnerVariants({ size, variant, className }))}
        {...props}
      />
      <span className="sr-only">{label}</span>
    </span>
  );
}

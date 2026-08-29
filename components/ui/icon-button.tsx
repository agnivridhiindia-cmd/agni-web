import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

export const iconButtonVariants = cva(
  "inline-flex items-center justify-center rounded-md transition-all duration-200 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95 shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-teal-600 text-white hover:bg-teal-700 active:bg-teal-800 shadow-subtle hover:-translate-y-0.5 active:translate-y-0",
        accent:
          "bg-gold-600 text-white hover:bg-gold-700 active:bg-gold-800 shadow-subtle hover:-translate-y-0.5 active:translate-y-0",
        secondary:
          "bg-slate-100 text-slate-800 hover:bg-slate-200 active:bg-slate-300 hover:-translate-y-0.5 active:translate-y-0",
        outline:
          "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:border-slate-300 hover:-translate-y-0.5 active:translate-y-0",
        ghost:
          "text-slate-600 hover:bg-slate-100 hover:text-slate-900",
        glass:
          "btn-glass text-slate-900 hover:-translate-y-0.5 active:translate-y-0",
        "glass-teal":
          "btn-glass-teal text-white hover:-translate-y-0.5 active:translate-y-0",
        "glass-dark":
          "btn-glass-dark text-white hover:-translate-y-0.5 active:translate-y-0",
      },
      size: {
        sm: "h-8 w-8 rounded-sm",
        default: "h-10 w-10 rounded-md",
        lg: "h-12 w-12 rounded-md",
      },
    },
    defaultVariants: {
      variant: "ghost",
      size: "default",
    },
  }
);

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconButtonVariants> {
  "aria-label": string; // Explicitly mandatory for accessibility
  loading?: boolean;
  icon: React.ReactNode;
}

/**
 * Accessible Icon Button.
 * Enforces mandatory aria-label for screen reader compliance.
 */
export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      className,
      variant,
      size,
      loading = false,
      disabled,
      icon,
      "aria-label": ariaLabel,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type="button"
        aria-label={ariaLabel}
        disabled={disabled || loading}
        aria-busy={loading}
        className={cn(iconButtonVariants({ variant, size, className }))}
        {...props}
      >
        {loading ? (
          <Loader2 className="h-4 w-4 animate-spin text-current" />
        ) : (
          icon
        )}
      </button>
    );
  }
);
IconButton.displayName = "IconButton";

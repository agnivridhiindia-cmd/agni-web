import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

export const iconButtonVariants = cva(
  "inline-flex items-center justify-center rounded-md transition-all duration-200 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0891B2] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95 shrink-0 [transform:translateZ(0)] will-change-transform",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-r from-[#0AA5C7]/90 via-[#0891B2]/95 to-[#0E7490]/95 backdrop-blur-md border border-white/25 text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_4px_16px_rgba(8,145,178,0.22)] hover:from-[#0891B2] hover:to-[#155E75] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.6),0_6px_20px_rgba(8,145,178,0.32)] active:scale-95",
        accent:
          "bg-gradient-to-r from-[#0AA5C7]/90 via-[#0891B2]/95 to-[#0E7490]/95 backdrop-blur-md border border-white/25 text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_4px_16px_rgba(8,145,178,0.22)] hover:from-[#0891B2] hover:to-[#155E75] active:scale-95",
        secondary:
          "bg-white/80 backdrop-blur-md border border-cyan-200/90 text-[#0F0A1A] shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_2px_8px_rgba(8,145,178,0.06)] hover:bg-white/95 hover:border-cyan-300 active:scale-95",
        outline:
          "border border-cyan-200/90 bg-white/70 backdrop-blur-md text-[#0891B2] shadow-[inset_0_1px_1px_rgba(255,255,255,0.85),0_2px_8px_rgba(0,0,0,0.03)] hover:bg-white/90 hover:border-cyan-300 hover:text-[#0E7490] active:scale-95",
        ghost:
          "text-slate-600 hover:bg-cyan-50/70 hover:backdrop-blur-sm hover:text-slate-900 active:scale-95",
        glass:
          "bg-white/70 backdrop-blur-md border border-white/50 text-[#0F0A1A] shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_4px_16px_rgba(0,0,0,0.06)] hover:bg-white/85 hover:border-white/70 active:scale-95",
        "glass-teal":
          "bg-gradient-to-r from-[#0AA5C7]/85 to-[#0891B2]/90 backdrop-blur-md border border-white/30 text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.5),0_4px_16px_rgba(8,145,178,0.25)] hover:from-[#0891B2] hover:to-[#0E7490] active:scale-95",
        "glass-dark":
          "bg-[#0F0A1A]/80 backdrop-blur-md border border-white/15 text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_4px_16px_rgba(0,0,0,0.3)] hover:bg-[#0F0A1A]/95 hover:border-white/25 active:scale-95",
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

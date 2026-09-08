import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

export const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all duration-200 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] group cursor-pointer [transform:translateZ(0)]",
  {
    variants: {
      variant: {
        // Primary: Frosted Glass Brand Action with specular highlight
        primary:
          "bg-gradient-to-b from-[#0AA5C7]/90 via-[#0891B2]/95 to-[#0E7490]/95 backdrop-blur-md text-white font-semibold border border-white/25 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_4px_16px_rgba(8,145,178,0.22)] hover:from-[#0891B2] hover:to-[#0E7490] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.6),0_8px_24px_rgba(8,145,178,0.32)] active:from-[#0E7490] active:to-[#155E75] hover:-translate-y-0.5 active:translate-y-0",
        default:
          "bg-gradient-to-b from-[#0AA5C7]/90 via-[#0891B2]/95 to-[#0E7490]/95 backdrop-blur-md text-white font-semibold border border-white/25 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_4px_16px_rgba(8,145,178,0.22)] hover:from-[#0891B2] hover:to-[#0E7490] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.6),0_8px_24px_rgba(8,145,178,0.32)] active:from-[#0E7490] active:to-[#155E75] hover:-translate-y-0.5 active:translate-y-0",
        // Accent: Warm Cyan Glass Conversions
        accent:
          "bg-gradient-to-b from-[#22D3EE]/90 via-[#06B6D4]/95 to-[#0891B2]/95 backdrop-blur-md text-white font-semibold border border-white/25 shadow-[inset_0_1px_1px_rgba(255,255,255,0.45),0_4px_16px_rgba(6,182,212,0.25)] hover:from-[#06B6D4] hover:to-[#0891B2] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.65),0_8px_24px_rgba(6,182,212,0.35)] hover:-translate-y-0.5 active:translate-y-0",
        // Secondary: Frosted Pearl Surface
        secondary:
          "bg-white/80 backdrop-blur-md text-[#0F0A1A] border border-cyan-200/90 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_2px_8px_rgba(8,145,178,0.06)] hover:bg-white/95 hover:border-cyan-300 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,1),0_4px_16px_rgba(8,145,178,0.12)] active:bg-cyan-50/80 hover:-translate-y-0.5 active:translate-y-0",
        // Outline: Frosted Glass with Structural Border
        outline:
          "bg-white/70 backdrop-blur-md text-[#0F0A1A] border border-cyan-200/90 shadow-[inset_0_1px_1px_rgba(255,255,255,0.85),0_2px_8px_rgba(0,0,0,0.03)] hover:bg-white/95 hover:border-[#0891B2]/60 hover:text-[#0891B2] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,1),0_4px_14px_rgba(8,145,178,0.12)] active:bg-cyan-50/80 hover:-translate-y-0.5 active:translate-y-0",
        // Ghost: Subtle Surface
        ghost: "text-[#475569] hover:bg-white/75 hover:backdrop-blur-sm hover:text-[#0F0A1A] active:bg-white/90",
        // Destructive
        destructive:
          "bg-red-900/85 backdrop-blur-md text-white border border-red-700/50 shadow-[inset_0_1px_1px_rgba(255,255,255,0.35),0_4px_14px_rgba(220,38,38,0.25)] hover:bg-red-800 active:bg-red-900 hover:-translate-y-0.5 active:translate-y-0",
        // Link
        link: "text-[#0891B2] underline-offset-4 hover:underline hover:text-[#06B6D4] active:text-[#0E7490] p-0 h-auto",
        // Glassmorphic Variants
        glass:
          "bg-white/75 border border-white/60 text-[#0F0A1A] backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_4px_14px_rgba(8,145,178,0.08)] hover:bg-white/90 hover:border-cyan-200 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,1),0_6px_20px_rgba(8,145,178,0.15)] hover:-translate-y-0.5 active:translate-y-0",
        "glass-teal":
          "bg-cyan-50/80 border border-cyan-200/80 text-[#0891B2] backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.7),0_4px_14px_rgba(8,145,178,0.12)] hover:bg-cyan-100/90 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_6px_20px_rgba(8,145,178,0.18)] hover:-translate-y-0.5 active:translate-y-0",
        "glass-gold":
          "bg-cyan-100/80 border border-cyan-300/80 text-[#0891B2] backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.7),0_4px_14px_rgba(8,145,178,0.15)] hover:bg-cyan-200/80 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_6px_20px_rgba(8,145,178,0.22)] hover:-translate-y-0.5 active:translate-y-0",
        "glass-dark":
          "bg-white/90 border border-cyan-200/90 text-[#0F0A1A] backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_4px_14px_rgba(8,145,178,0.08)] hover:bg-white hover:shadow-[inset_0_1px_1px_rgba(255,255,255,1),0_6px_20px_rgba(8,145,178,0.15)] hover:-translate-y-0.5 active:translate-y-0",
      },
      size: {
        default: "h-10 px-4 py-2 text-sm",
        sm: "h-8 rounded-sm px-3 text-xs",
        lg: "h-12 rounded-md px-6 text-base font-medium",
        xl: "h-14 rounded-md px-8 text-base font-semibold",
        icon: "h-10 w-10 p-0",
        "icon-sm": "h-8 w-8 p-0 rounded-sm",
      },
      fullWidth: {
        true: "w-full",
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
      fullWidth: false,
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

/**
 * Pass-through helpers for backwards compatibility.
 * Eliminates character splitting and sr-only duplication for clean, semantic HTML.
 */
export function renderLetterSwipeText(text: string) {
  return text;
}

export function renderLetterSwipeChildren(children: React.ReactNode, _variant?: string | null): React.ReactNode {
  return children;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      fullWidth,
      loading = false,
      leftIcon,
      rightIcon,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, fullWidth, className }))}
        ref={ref}
        disabled={disabled || loading}
        aria-busy={loading}
        {...props}
      >
        {loading && (
          <Loader2 className="mr-2 h-4 w-4 animate-spin text-current shrink-0" />
        )}
        {!loading && leftIcon && (
          <span className="mr-2 inline-flex shrink-0 group-hover:-translate-x-1 transition-transform duration-200">{leftIcon}</span>
        )}
        {children}
        {!loading && rightIcon && (
          <span className="ml-2 inline-flex shrink-0 group-hover:translate-x-1 transition-transform duration-200">{rightIcon}</span>
        )}
      </button>
    );
  }
);
Button.displayName = "Button";

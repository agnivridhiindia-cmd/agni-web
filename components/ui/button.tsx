import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

export const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all duration-200 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] group cursor-pointer",
  {
    variants: {
      variant: {
        // Primary: Brass Gold Brand Action
        primary: "bg-[#0891B2] text-white font-semibold hover:bg-[#0E7490] active:bg-[#155E75] shadow-sm hover:shadow-cyan-900/20 hover:-translate-y-0.5 active:translate-y-0",
        default: "bg-[#0891B2] text-white font-semibold hover:bg-[#0E7490] active:bg-[#155E75] shadow-sm hover:shadow-cyan-900/20 hover:-translate-y-0.5 active:translate-y-0",
        // Accent: Warm Brass Key Conversions
        accent: "bg-[#06B6D4] text-white font-semibold hover:bg-[#6D28D9] active:bg-[#0891B2] shadow-sm hover:-translate-y-0.5 active:translate-y-0",
        // Secondary: Deep Charcoal Surface
        secondary: "bg-[#F8F7FD] text-[#0F0A1A] border border-[#DDF7FA] hover:bg-[#F1EEFB] hover:border-[#C4EEF2] active:bg-[#E9E4F7] hover:-translate-y-0.5 active:translate-y-0",
        // Outline: Dark Structural Border
        outline: "border border-[#DDF7FA] bg-white text-[#0F0A1A] hover:bg-[#F8F7FD] hover:border-[#C4EEF2] active:bg-[#F1EEFB] hover:-translate-y-0.5 active:translate-y-0",
        // Ghost: Subtle Surface
        ghost: "text-[#475569] hover:bg-[#F8F7FD] hover:text-[#0F0A1A] active:bg-[#F1EEFB]",
        // Destructive: For alert/deletion actions
        destructive:
          "bg-red-900/80 text-white border border-red-700/50 hover:bg-red-800 active:bg-red-900 shadow-sm hover:-translate-y-0.5 active:translate-y-0",
        // Link: Clean Brass Interaction
        link: "text-[#0891B2] underline-offset-4 hover:underline hover:text-[#06B6D4] active:text-[#0E7490] p-0 h-auto",
        // Glassmorphic Variants
        glass:
          "bg-white/80 border border-cyan-100 text-[#0F0A1A] backdrop-blur-md hover:bg-cyan-50 hover:-translate-y-0.5 active:translate-y-0",
        "glass-teal":
          "bg-cyan-50/80 border border-cyan-200 text-[#0891B2] backdrop-blur-md hover:bg-cyan-100/80 hover:-translate-y-0.5 active:translate-y-0",
        "glass-gold":
          "bg-cyan-100/80 border border-cyan-300 text-[#0891B2] backdrop-blur-md hover:bg-cyan-200/80 hover:-translate-y-0.5 active:translate-y-0",
        "glass-dark":
          "bg-white/90 border border-cyan-200 text-[#0F0A1A] backdrop-blur-md hover:bg-cyan-50 hover:-translate-y-0.5 active:translate-y-0",
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

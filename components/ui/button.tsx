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
        primary:
          "bg-[#C79A4A] text-[#080909] font-bold hover:bg-[#DFC286] active:bg-[#B3873C] shadow-sm hover:-translate-y-0.5 active:translate-y-0",
        default:
          "bg-[#C79A4A] text-[#080909] font-bold hover:bg-[#DFC286] active:bg-[#B3873C] shadow-sm hover:-translate-y-0.5 active:translate-y-0",
        // Accent: Warm Brass Key Conversions
        accent:
          "bg-[#DFC286] text-[#080909] font-bold hover:bg-[#F3EFE7] active:bg-[#C79A4A] shadow-sm hover:-translate-y-0.5 active:translate-y-0",
        // Secondary: Deep Charcoal Surface
        secondary:
          "bg-[#181A1A] text-[#F3EFE7] border border-[#232727] hover:bg-[#202323] hover:border-[#C79A4A]/40 active:bg-[#141616] hover:-translate-y-0.5 active:translate-y-0",
        // Outline: Dark Structural Border
        outline:
          "border border-[#232727] bg-[#111313] text-[#F3EFE7] hover:bg-[#181A1A] hover:border-[#C79A4A]/50 active:bg-[#141616] hover:-translate-y-0.5 active:translate-y-0",
        // Ghost: Subtle Surface
        ghost:
          "text-[#D1CBC1] hover:bg-[#181A1A] hover:text-[#F3EFE7] active:bg-[#141616]",
        // Destructive: For alert/deletion actions
        destructive:
          "bg-red-900/80 text-white border border-red-700/50 hover:bg-red-800 active:bg-red-900 shadow-sm hover:-translate-y-0.5 active:translate-y-0",
        // Link: Clean Brass Interaction
        link:
          "text-[#C79A4A] underline-offset-4 hover:underline hover:text-[#DFC286] active:text-[#B3873C] p-0 h-auto",
        // Glassmorphic Variants
        glass:
          "bg-white/[0.05] border border-white/[0.1] text-[#F3EFE7] backdrop-blur-md hover:bg-white/[0.1] hover:-translate-y-0.5 active:translate-y-0",
        "glass-teal":
          "bg-[#C79A4A]/15 border border-[#C79A4A]/30 text-[#DFC286] backdrop-blur-md hover:bg-[#C79A4A]/25 hover:-translate-y-0.5 active:translate-y-0",
        "glass-gold":
          "bg-[#C79A4A]/20 border border-[#C79A4A]/40 text-[#DFC286] backdrop-blur-md hover:bg-[#C79A4A]/30 hover:-translate-y-0.5 active:translate-y-0",
        "glass-dark":
          "bg-[#080909]/80 border border-[#232727] text-[#F3EFE7] backdrop-blur-md hover:bg-[#111313] hover:-translate-y-0.5 active:translate-y-0",
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

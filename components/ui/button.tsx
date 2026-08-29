import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all duration-200 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        // Primary: Teal Brand Action
        primary:
          "bg-teal-600 text-white hover:bg-teal-700 active:bg-teal-800 shadow-subtle hover:shadow-card",
        default:
          "bg-teal-600 text-white hover:bg-teal-700 active:bg-teal-800 shadow-subtle hover:shadow-card",
        // Accent: Sophisticated Gold Action (Key conversions, prestige moments)
        accent:
          "bg-gold-600 text-white hover:bg-gold-700 active:bg-gold-800 shadow-subtle hover:shadow-card",
        // Secondary: Quiet slate surface
        secondary:
          "bg-slate-100 text-slate-900 hover:bg-slate-200 active:bg-slate-300",
        // Outline: Structural border
        outline:
          "border border-slate-200 bg-white text-slate-800 hover:bg-slate-50 hover:border-slate-300 active:bg-slate-100",
        // Ghost: Zero surface until hover
        ghost:
          "text-slate-700 hover:bg-slate-100 hover:text-slate-900 active:bg-slate-200",
        // Link: Clean inline interaction
        link:
          "text-teal-600 underline-offset-4 hover:underline hover:text-teal-700 active:text-teal-800 p-0 h-auto",
      },
      size: {
        default: "h-10 px-4 py-2 text-sm",
        sm: "h-8 rounded-sm px-3 text-xs",
        lg: "h-12 rounded-md px-6 text-base font-medium",
        xl: "h-14 rounded-md px-8 text-base font-semibold",
        icon: "h-10 w-10 p-0",
        "icon-sm": "h-8 w-8 p-0 rounded-sm",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

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

export { Button, buttonVariants };

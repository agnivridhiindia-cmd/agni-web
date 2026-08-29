import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const cardVariants = cva(
  "rounded-lg transition-all duration-200 text-slate-900",
  {
    variants: {
      variant: {
        // Default / Standard: Quiet structural border with subtle shadow
        default:
          "bg-white border border-slate-200 shadow-card hover:border-slate-300",
        standard:
          "bg-white border border-slate-200 shadow-card hover:border-slate-300",
        // Static: Zero hover or lift (purely informational container)
        static:
          "bg-white border border-slate-200 shadow-card",
        // Interactive: Subtle lift, border emphasis, and cursor feedback
        interactive:
          "bg-white border border-slate-200 shadow-card hover:border-teal-500/60 hover:shadow-elevated hover:-translate-y-0.5 active:translate-y-0 cursor-pointer",
        // Elevated: More prominent depth for interactive service/story cards
        elevated:
          "bg-white border border-slate-200/80 shadow-elevated hover:shadow-floating hover:-translate-y-0.5",
        // Subtle: Low contrast background for secondary groupings
        subtle:
          "bg-slate-50 border border-slate-200/60 shadow-none hover:bg-white hover:border-slate-200",
        // Glass: Selective translucent backdrop blur with luminous edge and hover lift
        glass:
          "bg-white/80 backdrop-blur-md border border-white/70 shadow-card hover:bg-white/92 hover:border-teal-500/30 hover:shadow-elevated hover:-translate-y-0.5 transition-all duration-300 supports-[-webkit-backdrop-filter:none]:bg-white/95",
        "glass-dark":
          "glass-surface-dark text-white hover:border-slate-600 hover:shadow-floating hover:-translate-y-0.5 transition-all duration-300",
        // Featured: Prestige frame with signature teal-gold gradient border line
        featured:
          "bg-white border border-slate-200 shadow-elevated relative overflow-hidden before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-gradient-to-r before:from-teal-600 before:to-gold-500 hover:border-slate-300",
        // Glow: Restrained teal glow for flagship conversion cards
        glow:
          "bg-white border border-slate-200 shadow-card hover:border-teal-500/50 hover:shadow-glow-teal hover:-translate-y-0.5 transition-all duration-200",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardVariants({ variant, className }))}
      {...props}
    />
  )
);
Card.displayName = "Card";

export const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

export const CardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "font-serif text-xl font-semibold leading-snug tracking-tight text-slate-900",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

export const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-slate-600 leading-relaxed font-sans", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

export const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

export const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0 border-t border-slate-100 mt-auto", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

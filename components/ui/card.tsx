import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const cardVariants = cva(
  "rounded-2xl transition-all duration-300 text-[#0F0A1A] [transform:translateZ(0)]",
  {
    variants: {
      variant: {
        default:
          "bg-white/80 border border-cyan-100/90 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_8px_24px_rgba(8,145,178,0.06)] hover:border-cyan-200 hover:bg-white/95 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,1),0_12px_32px_rgba(8,145,178,0.1)]",
        standard:
          "bg-white/80 border border-cyan-100/90 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_8px_24px_rgba(8,145,178,0.06)] hover:border-cyan-200 hover:bg-white/95 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,1),0_12px_32px_rgba(8,145,178,0.1)]",
        static:
          "bg-[#111313]/90 border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),0_8px_24px_rgba(0,0,0,0.4)]",
        interactive:
          "bg-white/80 border border-cyan-100/90 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_8px_24px_rgba(8,145,178,0.06)] hover:border-cyan-300 hover:bg-white/95 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,1),0_12px_32px_rgba(8,145,178,0.12)] hover:-translate-y-1 active:translate-y-0 cursor-pointer",
        elevated:
          "bg-white/90 border border-cyan-200/90 shadow-[inset_0_1px_1px_rgba(255,255,255,1),0_12px_36px_rgba(8,145,178,0.08)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,1),0_16px_44px_rgba(8,145,178,0.12)] hover:-translate-y-1",
        subtle:
          "bg-white/60 border border-cyan-100/70 shadow-[inset_0_1px_1px_rgba(255,255,255,0.85)] hover:bg-white/85 hover:border-cyan-200",
        glass:
          "bg-white/80 backdrop-blur-xs border border-white/60 shadow-[inset_0_1px_1px_rgba(255,255,255,0.95),0_8px_24px_rgba(8,145,178,0.06)] hover:bg-white/90 hover:border-cyan-200 hover:-translate-y-1",
        "glass-dark":
          "bg-[#111313]/85 backdrop-blur-xs border border-white/15 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_8px_24px_rgba(0,0,0,0.3)] hover:border-[#0891B2]/50 hover:-translate-y-1",
        featured:
          "bg-white/85 border border-cyan-200/90 shadow-[inset_0_1px_1px_rgba(255,255,255,0.95),0_12px_32px_rgba(8,145,178,0.1)] relative overflow-hidden before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-gradient-to-r before:from-[#0891B2] before:to-[#10B981]",
        glow:
          "bg-white/85 border border-cyan-200/90 shadow-[inset_0_1px_1px_rgba(255,255,255,0.95),0_8px_24px_rgba(8,145,178,0.08)] hover:border-[#0891B2]/50 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,1),0_12px_32px_rgba(8,145,178,0.18)] hover:-translate-y-1",
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
      "font-serif text-lg font-semibold leading-none tracking-tight text-[#F3EFE7]",
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
    className={cn("text-xs text-[#8E8B82] font-sans leading-relaxed", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

export const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0 text-[#D1CBC1]", className)} {...props} />
));
CardContent.displayName = "CardContent";

export const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex items-center p-6 pt-0 border-t border-[#232727] mt-4",
      className
    )}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

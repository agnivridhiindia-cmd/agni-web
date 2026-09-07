import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const cardVariants = cva(
  "rounded-xl transition-all duration-200 text-[#0F0A1A]",
  {
    variants: {
      variant: {
        default: "bg-white border border-[#EDE9FE] shadow-sm hover:border-[#C4B5FD]",
        standard: "bg-white border border-[#EDE9FE] shadow-sm hover:border-[#C4B5FD]",
        static:
          "bg-[#111313] border border-[#232727] shadow-lg",
        interactive: "bg-white border border-[#EDE9FE] shadow-sm hover:border-[#7C3AED]/40 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 cursor-pointer",
        elevated: "bg-[#FBF9FE] border border-[#EDE9FE] shadow-md hover:shadow-lg hover:border-[#7C3AED]/30 hover:-translate-y-0.5",
        subtle:
          "bg-[#0E0F0F] border border-[#232727] shadow-none hover:bg-[#111313] hover:border-[#333737]",
        glass:
          "bg-[#111313]/80 backdrop-blur-md border border-[#232727] shadow-lg hover:border-[#C79A4A]/40 hover:-translate-y-0.5 transition-all duration-300",
        "glass-dark":
          "glass-surface-dark text-white hover:border-[#C79A4A]/50 hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300",
        featured:
          "bg-[#111313] border border-[#232727] shadow-xl relative overflow-hidden before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-gradient-to-r before:from-[#2DD4BF] before:to-[#C79A4A] hover:border-[#C79A4A]/50",
        glow:
          "bg-[#111313] border border-[#232727] shadow-lg hover:border-[#C79A4A]/50 hover:shadow-[0_0_25px_rgba(199,154,74,0.15)] hover:-translate-y-0.5 transition-all duration-200",
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

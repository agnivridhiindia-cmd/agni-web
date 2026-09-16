import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const cardVariants = cva(
 "rounded-2xl transition-all duration-300 text-slate-100 [transform:translateZ(0)]",
 {
 variants: {
 variant: {
 default:
 "bg-slate-900/80 border border-slate-800/90 text-slate-100 shadow-[0_8px_24px_rgba(0,0,0,0.4)] hover:border-amber-500/40 hover:bg-slate-900/95 hover:shadow-[0_12px_32px_rgba(0,0,0,0.5)]",
 standard:
 "bg-slate-900/80 border border-slate-800/90 text-slate-100 shadow-[0_8px_24px_rgba(0,0,0,0.4)] hover:border-amber-500/40 hover:bg-slate-900/95 hover:shadow-[0_12px_32px_rgba(0,0,0,0.5)]",
 static:
 "bg-slate-950/90 border border-slate-800/80 shadow-[0_8px_24px_rgba(0,0,0,0.5)]",
 interactive:
 "bg-slate-900/80 border border-slate-800/90 text-slate-100 shadow-[0_8px_24px_rgba(0,0,0,0.4)] hover:border-amber-400/50 hover:bg-slate-900/95 hover:shadow-[0_12px_32px_rgba(0,0,0,0.6),0_0_20px_rgba(245,158,11,0.1)] hover:-translate-y-1 active:translate-y-0 cursor-pointer",
 elevated:
 "bg-slate-900/90 border border-slate-800/90 text-slate-100 shadow-[0_12px_36px_rgba(0,0,0,0.6)] hover:border-amber-500/40 hover:shadow-[0_16px_44px_rgba(0,0,0,0.7)] hover:-translate-y-1",
 subtle:
 "bg-slate-900/50 border border-slate-800/60 shadow-[0_4px_16px_rgba(0,0,0,0.3)] hover:bg-slate-900/75 hover:border-slate-700",
 glass:
 "bg-slate-900/70  border border-slate-800/80 text-slate-100 shadow-[0_8px_24px_rgba(0,0,0,0.4)] hover:bg-slate-900/85 hover:border-amber-500/40 hover:-translate-y-1",
 "glass-dark":
 "bg-slate-950/85  border border-slate-800/90 shadow-[0_8px_24px_rgba(0,0,0,0.5)] hover:border-cyan-500/40 hover:-translate-y-1",
 featured:
 "bg-slate-900/90 border border-amber-500/30 text-white shadow-[0_12px_32px_rgba(0,0,0,0.5)] relative overflow-hidden before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-gradient-to-r before:from-amber-400 before:via-amber-500 before:to-cyan-400",
 glow:
 "bg-slate-900/90 border border-amber-500/30 text-white shadow-[0_8px_24px_rgba(0,0,0,0.5),0_0_20px_rgba(245,158,11,0.15)] hover:border-amber-400/60 hover:shadow-[0_12px_32px_rgba(0,0,0,0.6),0_0_30px_rgba(245,158,11,0.25)] hover:-translate-y-1",
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

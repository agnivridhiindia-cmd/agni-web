import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

export const buttonVariants = cva(
 "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all duration-200 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] group cursor-pointer [transform:translateZ(0)]",
 {
 variants: {
 variant: {
 // Primary: Apple Liquid Glass Cyan Action with high-refraction specular highlight
 primary:
 "bg-gradient-to-b from-[#06B6D4]/90 via-[#0891B2]/95 to-[#0E7490]/95  text-white font-semibold border border-white/30 shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.65),0_8px_24px_rgba(8,145,178,0.28)] hover:from-[#0891B2] hover:to-[#0E7490] hover:border-white/50 hover:shadow-[inset_0_1px_2px_rgba(255,255,255,0.85),0_12px_32px_rgba(8,145,178,0.38)] active:from-[#0E7490] active:to-[#155E75] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
 default:
 "bg-gradient-to-b from-[#06B6D4]/90 via-[#0891B2]/95 to-[#0E7490]/95  text-white font-semibold border border-white/30 shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.65),0_8px_24px_rgba(8,145,178,0.28)] hover:from-[#0891B2] hover:to-[#0E7490] hover:border-white/50 hover:shadow-[inset_0_1px_2px_rgba(255,255,255,0.85),0_12px_32px_rgba(8,145,178,0.38)] active:from-[#0E7490] active:to-[#155E75] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
 // Accent: Apple Liquid Cyan Conversion
 accent:
 "bg-gradient-to-b from-[#22D3EE]/90 via-[#06B6D4]/95 to-[#0891B2]/95  text-white font-semibold border border-white/35 shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.7),0_8px_24px_rgba(6,182,212,0.3)] hover:from-[#06B6D4] hover:to-[#0891B2] hover:border-white/55 hover:shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),0_14px_36px_rgba(6,182,212,0.4)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
 // Secondary: Apple Translucent Dark Glass Surface
 secondary:
 "bg-white/[0.08] hover:bg-white/[0.14] text-white  border border-white/15 hover:border-white/30 shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_8px_20px_rgba(0,0,0,0.35)] active:bg-white/[0.06] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
 // Outline: Frosted Glass with Structural Hairline Border
 outline:
 "bg-white/[0.05] hover:bg-white/[0.10] text-slate-100  border border-white/15 hover:border-amber-400/50 hover:text-amber-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.18),0_4px_16px_rgba(0,0,0,0.25)] active:bg-white/[0.04] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
 // Ghost: Subtle Surface
 ghost: "text-slate-300 hover:bg-white/[0.08] hover: hover:text-white active:bg-white/[0.04]",
 // Destructive
 destructive:
 "bg-red-900/80  text-white border border-red-500/40 shadow-[inset_0_1px_1px_rgba(255,255,255,0.35),0_6px_20px_rgba(220,38,38,0.25)] hover:bg-red-800 active:bg-red-900 hover:-translate-y-0.5 active:translate-y-0",
 // Link
 link: "text-[#22D3EE] underline-offset-4 hover:underline hover:text-cyan-300 active:text-cyan-400 p-0 h-auto",
 // Apple Liquid Glass Variants
 glass:
 "bg-white/[0.08]  border border-white/20 text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),0_10px_25px_-5px_rgba(0,0,0,0.4)] hover:bg-white/[0.15] hover:border-white/40 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
 "glass-gold":
 "bg-gradient-to-b from-amber-400/90 via-amber-500/95 to-amber-600/95 text-slate-950 font-bold  border border-white/50 shadow-[inset_0_1px_2px_rgba(255,255,255,0.8),0_10px_28px_-4px_rgba(245,158,11,0.45)] hover:shadow-[inset_0_1px_2px_rgba(255,255,255,1),0_14px_36px_-4px_rgba(245,158,11,0.6)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
 "glass-teal":
 "bg-cyan-950/60 border border-cyan-400/40 text-cyan-300  shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_6px_20px_rgba(6,182,212,0.2)] hover:bg-cyan-900/80 hover:border-cyan-300 hover:shadow-[0_8px_24px_rgba(6,182,212,0.3)] hover:-translate-y-0.5 active:translate-y-0",
 "glass-light":
 "bg-white/70 hover:bg-white/90 text-slate-800  border border-white shadow-[inset_0_1px_2px_rgba(255,255,255,1),0_8px_20px_rgba(15,23,42,0.06)] hover:border-white hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
 "glass-dark":
 "bg-slate-900/80 border border-white/15 text-slate-100  shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_8px_24px_rgba(0,0,0,0.5)] hover:border-cyan-400/50 hover:shadow-[0_10px_30px_rgba(0,0,0,0.6)] hover:-translate-y-0.5 active:translate-y-0",
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

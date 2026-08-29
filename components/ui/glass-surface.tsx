import * as React from "react";
import { cn } from "@/lib/utils";

export interface GlassSurfaceProps extends React.HTMLAttributes<HTMLDivElement> {
  interactive?: boolean;
  intensity?: "subtle" | "default" | "dark";
}

/**
 * Selective Glass Surface Primitive.
 * Features:
 * - Fallback opaque background for non-backdrop-filter browsers
 * - Restrained blur (12px max)
 * - Optional interactive hover elevation
 */
export const GlassSurface = React.forwardRef<HTMLDivElement, GlassSurfaceProps>(
  ({ className, interactive = false, intensity = "default", children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-lg border transition-all duration-200",
          intensity === "default" &&
            "bg-white/85 backdrop-blur-md border-slate-200/80 shadow-card supports-[-webkit-backdrop-filter:none]:bg-white/95",
          intensity === "subtle" &&
            "bg-white/60 backdrop-blur-sm border-slate-200/50 shadow-subtle supports-[-webkit-backdrop-filter:none]:bg-white/90",
          intensity === "dark" &&
            "bg-slate-900/85 text-white backdrop-blur-md border-slate-700/60 shadow-floating supports-[-webkit-backdrop-filter:none]:bg-slate-900/95",
          interactive &&
            "hover:border-slate-300 hover:shadow-elevated cursor-pointer active:scale-[0.99]",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
GlassSurface.displayName = "GlassSurface";

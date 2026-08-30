import * as React from "react";
import { cn } from "@/lib/utils";

export interface OutcomeStatsProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
  label: string;
  context?: string;
  size?: "default" | "large";
  variant?: "teal" | "gold" | "neutral";
}

export function OutcomeStats({
  value,
  label,
  context,
  size = "default",
  variant = "teal",
  className,
  ...props
}: OutcomeStatsProps) {
  const isLarge = size === "large";

  const colorVariants = {
    teal: "text-teal-700",
    gold: "text-gold-600",
    neutral: "text-slate-900",
  };

  return (
    <div
      className={cn(
        "rounded-xl p-4 sm:p-5 border transition-colors",
        variant === "gold"
          ? "bg-gold-50/50 border-gold-200/60"
          : variant === "teal"
          ? "bg-teal-50/40 border-teal-200/60"
          : "bg-slate-50/80 border-slate-200/80",
        className
      )}
      {...props}
    >
      <div className="space-y-1">
        <span
          className={cn(
            "font-serif font-bold tracking-tight block leading-none",
            colorVariants[variant],
            isLarge ? "text-3xl sm:text-4xl lg:text-5xl" : "text-2xl sm:text-3xl"
          )}
        >
          {value}
        </span>

        <span className="text-xs font-bold tracking-wider uppercase text-slate-700 block font-sans pt-1">
          {label}
        </span>

        {context && (
          <span className="text-xs text-slate-500 block font-sans leading-normal">
            {context}
          </span>
        )}
      </div>
    </div>
  );
}

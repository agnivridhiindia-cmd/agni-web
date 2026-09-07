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
    teal: "text-[#7C3AED]",
    gold: "text-[#581C87]",
    neutral: "text-[#0F0A1A]",
  };

  return (
    <div
      className={cn(
        "rounded-xl p-4 sm:p-5 border border-purple-100 bg-white hover:border-purple-300 transition-colors",
        variant === "gold"
          ? "border-purple-200 bg-white"
          : variant === "teal"
          ? "border-purple-200 bg-white"
          : "border-purple-100 bg-white",
        className
      )}
      {...props}
    >
      <div className="space-y-1">
        <span
          className={cn(
            "font-mono font-bold tracking-tight block leading-none",
            colorVariants[variant],
            isLarge ? "text-3xl sm:text-4xl lg:text-5xl" : "text-2xl sm:text-3xl"
          )}
        >
          {value}
        </span>

        <span className="text-xs font-bold tracking-wider uppercase text-[#64748B] block font-mono pt-1">
          {label}
        </span>

        {context && (
          <span className="text-xs text-[#475569] block font-sans leading-normal">
            {context}
          </span>
        )}
      </div>
    </div>
  );
}

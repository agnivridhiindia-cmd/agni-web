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
    teal: "text-[#DFC286]",
    gold: "text-[#C79A4A]",
    neutral: "text-[#F3EFE7]",
  };

  return (
    <div
      className={cn(
        "rounded-xl p-4 sm:p-5 border border-[#232727] bg-[#111313] hover:border-[#C79A4A]/40 transition-colors",
        variant === "gold"
          ? "border-[#C79A4A]/30 bg-[#161818]"
          : variant === "teal"
          ? "border-[#C79A4A]/20 bg-[#111313]"
          : "border-[#232727] bg-[#111313]",
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

        <span className="text-xs font-bold tracking-wider uppercase text-[#8E8B82] block font-mono pt-1">
          {label}
        </span>

        {context && (
          <span className="text-xs text-[#D1CBC1] block font-sans leading-normal">
            {context}
          </span>
        )}
      </div>
    </div>
  );
}

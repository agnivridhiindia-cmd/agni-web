import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const statDisplayVariants = cva(
  "flex flex-col transition-all rounded-lg p-6",
  {
    variants: {
      variant: {
        default: "bg-[#111313] border border-[#232727] shadow-lg hover:border-[#C79A4A]/50 hover:-translate-y-0.5 transition-all duration-300",
        subtle: "bg-[#141616] border border-[#232727] shadow-none hover:border-[#333737] hover:-translate-y-0.5 transition-all duration-300",
        accent: "bg-[#111313] border border-[#C79A4A]/50 shadow-xl hover:-translate-y-0.5 transition-all duration-300",
        glass: "glass-surface shadow-card hover:border-teal-400/50 hover:shadow-elevated hover:-translate-y-0.5 transition-all duration-300",
        compact: "p-4 bg-transparent border-0 shadow-none",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface StatDisplayProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof statDisplayVariants> {
  value: string;
  label: string;
  supportingText?: string;
  icon?: React.ReactNode;
  prefix?: string;
  suffix?: string;
}

/**
 * Presentational Metric Component.
 * Purely presentational; strictly receives dynamic or configured values as props.
 */
export function StatDisplay({
  value,
  label,
  supportingText,
  icon,
  prefix,
  suffix,
  variant,
  className,
  ...props
}: StatDisplayProps) {
  return (
    <div
      className={cn(statDisplayVariants({ variant }), className)}
      {...props}
    >
      <div className="flex items-center justify-between gap-2 mb-2">
        <span className="type-eyebrow text-[#8E8B82] font-sans">{label}</span>
        {icon && <span className="text-[#2DD4BF] shrink-0">{icon}</span>}
      </div>

      <div className="flex items-baseline gap-0.5">
        {prefix && (
          <span className="font-serif text-2xl font-semibold text-[#C79A4A]">
            {prefix}
          </span>
        )}
        <span className="font-serif text-4xl font-bold tracking-tight text-[#F3EFE7]">
          {value}
        </span>
        {suffix && (
          <span className="font-serif text-xl font-semibold text-[#C79A4A] ml-1">
            {suffix}
          </span>
        )}
      </div>

      {supportingText && (
        <p className="type-body-sm text-[#8E8B82] font-sans mt-2 leading-relaxed">
          {supportingText}
        </p>
      )}
    </div>
  );
}

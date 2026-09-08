import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const statDisplayVariants = cva(
  "flex flex-col transition-all rounded-lg p-6",
  {
    variants: {
      variant: {
        default: "bg-white border border-cyan-100 shadow-sm hover:border-[#0891B2]/40 hover:-translate-y-0.5 transition-all duration-300",
        subtle: "bg-cyan-50/50 border border-cyan-100 shadow-none hover:border-cyan-200 hover:-translate-y-0.5 transition-all duration-300",
        accent: "bg-white border border-cyan-200 shadow-md hover:border-[#0891B2] hover:-translate-y-0.5 transition-all duration-300",
        glass: "bg-white/80 border border-cyan-100 backdrop-blur-md shadow-sm hover:border-[#0891B2]/40 hover:-translate-y-0.5 transition-all duration-300",
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
        <span className="type-eyebrow text-[#64748B] font-sans">{label}</span>
        {icon && <span className="text-[#0891B2] shrink-0">{icon}</span>}
      </div>

      <div className="flex items-baseline gap-0.5">
        {prefix && (
          <span className="font-serif text-2xl font-semibold text-[#0891B2]">
            {prefix}
          </span>
        )}
        <span className="font-serif text-4xl font-bold tracking-tight text-[#0F0A1A]">
          {value}
        </span>
        {suffix && (
          <span className="font-serif text-xl font-semibold text-[#0891B2] ml-1">
            {suffix}
          </span>
        )}
      </div>

      {supportingText && (
        <p className="type-body-sm text-[#64748B] font-sans mt-2 leading-relaxed">
          {supportingText}
        </p>
      )}
    </div>
  );
}

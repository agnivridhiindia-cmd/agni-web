import * as React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CtaArrowProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  size?: number;
}

/**
 * Consistent micro-animated directional arrow indicator.
 * Moves subtly by 3px on parent group hover with zero layout shift.
 */
export function CtaArrow({ className, size = 16, ...props }: CtaArrowProps) {
  return (
    <ArrowRight
      size={size}
      className={cn(
        "inline-block transition-transform duration-200 ease-out group-hover:translate-x-1 shrink-0",
        className
      )}
      {...props}
    />
  );
}

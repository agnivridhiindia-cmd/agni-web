import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const containerVariants = cva("mx-auto min-w-0 w-full", {
  variants: {
    width: {
      standard: "max-w-content", // 1200px
      wide: "max-w-wide", // 1440px
      reading: "max-w-reading", // 65ch
      full: "max-w-full",
    },
    gutters: {
      true: "page-gutters",
      false: "",
    },
  },
  defaultVariants: {
    width: "standard",
    gutters: true,
  },
});

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {
  as?: React.ElementType;
}

/**
 * Reusable layout container adhering to design tokens.
 */
export function Container({
  as: Component = "div",
  width,
  gutters,
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <Component
      className={cn(containerVariants({ width, gutters }), className)}
      {...props}
    >
      {children}
    </Component>
  );
}

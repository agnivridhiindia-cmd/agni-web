import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Eyebrow } from "@/components/ui/badge";

export const sectionHeadingVariants = cva("space-y-3", {
  variants: {
    align: {
      left: "text-left",
      center: "text-center mx-auto items-center",
      editorial: "text-left max-w-reading",
    },
    size: {
      default: "",
      large: "space-y-4",
    },
  },
  defaultVariants: {
    align: "left",
    size: "default",
  },
});

export interface SectionHeadingProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof sectionHeadingVariants> {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: React.ReactNode;
  eyebrowAccent?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  action,
  align = "left",
  size = "default",
  eyebrowAccent = false,
  className,
  ...props
}: SectionHeadingProps) {
  const isCentered = align === "center";
  const isLarge = size === "large";

  return (
    <div
      className={cn(
        sectionHeadingVariants({ align, size }),
        isCentered && "max-w-2xl",
        className
      )}
      {...props}
    >
      {eyebrow && (
        <div>
          <Eyebrow accent={eyebrowAccent}>{eyebrow}</Eyebrow>
        </div>
      )}

      <div className={cn("space-y-2", isCentered && "text-center")}>
        <h2
          className={cn(
            isLarge ? "type-h1" : "type-h2",
            "text-[#0F0A1A] tracking-tight font-serif"
          )}
        >
          {title}
        </h2>

        {description && (
          <p
            className={cn(
              "type-body text-[#475569] font-sans leading-relaxed",
              isCentered ? "max-w-xl mx-auto" : "max-w-reading"
            )}
          >
            {description}
          </p>
        )}
      </div>

      {action && <div className="pt-2">{action}</div>}
    </div>
  );
}

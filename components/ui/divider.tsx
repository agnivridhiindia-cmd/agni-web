import * as React from "react";
import { cn } from "@/lib/utils";

export interface DividerProps extends React.HTMLAttributes<HTMLHRElement | HTMLDivElement> {
  orientation?: "horizontal" | "vertical";
  decorative?: boolean;
}

export function Divider({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: DividerProps) {
  if (orientation === "vertical") {
    return (
      <div
        role={decorative ? "none" : "separator"}
        aria-orientation="vertical"
        className={cn("w-px bg-slate-200 self-stretch shrink-0", className)}
        {...props}
      />
    );
  }

  return (
    <hr
      role={decorative ? "none" : "separator"}
      aria-orientation="horizontal"
      className={cn("border-0 border-t border-slate-200 w-full shrink-0 my-4", className)}
      {...props}
    />
  );
}

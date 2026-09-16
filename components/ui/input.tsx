import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean | string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", error, disabled, ...props }, ref) => {
    return (
      <input
        type={type}
        suppressHydrationWarning
        className={cn(
          "flex h-10 w-full rounded-lg border bg-white px-3.5 py-2 text-sm text-[#0F0A1A] placeholder:text-[#64748B] transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#0891B2] focus-visible:border-[#0891B2] disabled:cursor-not-allowed disabled:opacity-50 font-sans",
          error
            ? "border-red-500 focus-visible:ring-red-500 text-red-700 placeholder:text-red-400"
            : "border-cyan-200 hover:border-cyan-300",
          className
        )}
        ref={ref}
        disabled={disabled}
        aria-invalid={Boolean(error)}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

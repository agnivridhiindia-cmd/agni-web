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
        className={cn(
          "flex h-10 w-full rounded-lg border bg-[#161818] px-3.5 py-2 text-sm text-[#F3EFE7] placeholder:text-[#8E8B82] transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C79A4A] focus-visible:border-[#C79A4A] disabled:cursor-not-allowed disabled:opacity-50 font-sans",
          error
            ? "border-red-500 focus-visible:ring-red-500 text-red-200 placeholder:text-red-400"
            : "border-[#232727] hover:border-[#333737]",
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

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
          "flex h-10 w-full rounded-md border bg-white px-3.5 py-2 text-sm text-slate-900 placeholder:text-slate-400 transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 font-sans",
          error
            ? "border-red-500 focus-visible:ring-red-500 text-red-950 placeholder:text-red-300"
            : "border-slate-200 hover:border-slate-300 focus-visible:ring-teal-600 focus-visible:border-teal-600",
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

import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean | string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, disabled, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[96px] w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm text-[#0F0A1A] placeholder:text-[#64748B] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#0891B2] focus-visible:border-[#0891B2] disabled:cursor-not-allowed disabled:opacity-50 font-sans resize-y",
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
Textarea.displayName = "Textarea";

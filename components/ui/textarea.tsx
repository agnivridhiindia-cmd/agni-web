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
          "flex min-h-[96px] w-full rounded-md border bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 font-sans resize-y",
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
Textarea.displayName = "Textarea";

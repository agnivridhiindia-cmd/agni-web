import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Info, CheckCircle2, AlertTriangle, XCircle } from "lucide-react";

export const alertVariants = cva(
  "relative w-full rounded-md border p-4 font-sans text-sm transition-all [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        info:
          "bg-sky-50/70 border-sky-200 text-sky-900 [&>svg]:text-sky-600",
        success:
          "bg-emerald-50/70 border-emerald-200 text-emerald-900 [&>svg]:text-emerald-600",
        warning:
          "bg-amber-50/70 border-amber-200 text-amber-900 [&>svg]:text-amber-600",
        error:
          "bg-red-50/70 border-red-200 text-red-900 [&>svg]:text-red-600",
      },
    },
    defaultVariants: {
      variant: "info",
    },
  }
);

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  icon?: React.ReactNode;
}

export function Alert({
  className,
  variant = "info",
  icon,
  children,
  ...props
}: AlertProps) {
  const defaultIcon = {
    info: <Info className="h-4 w-4" />,
    success: <CheckCircle2 className="h-4 w-4" />,
    warning: <AlertTriangle className="h-4 w-4" />,
    error: <XCircle className="h-4 w-4" />,
  }[variant || "info"];

  return (
    <div
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    >
      {icon || defaultIcon}
      {children}
    </div>
  );
}

export function AlertTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h5
      className={cn("mb-1 font-semibold leading-none tracking-tight font-serif", className)}
      {...props}
    />
  );
}

export function AlertDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <div
      className={cn("text-xs leading-relaxed opacity-90 font-sans", className)}
      {...props}
    />
  );
}

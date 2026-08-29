import * as React from "react";
import { cn } from "@/lib/utils";
import { AlertCircle } from "lucide-react";

export interface FormFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function FormField({ className, children, ...props }: FormFieldProps) {
  return (
    <div className={cn("space-y-1.5", className)} {...props}>
      {children}
    </div>
  );
}

export interface FieldDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

export function FieldDescription({
  className,
  children,
  ...props
}: FieldDescriptionProps) {
  return (
    <p className={cn("text-xs text-slate-500 font-sans", className)} {...props}>
      {children}
    </p>
  );
}

export interface FieldErrorProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  children?: React.ReactNode;
}

export function FieldError({ className, children, ...props }: FieldErrorProps) {
  if (!children) return null;

  return (
    <p
      className={cn(
        "flex items-center gap-1 text-xs text-red-600 font-medium font-sans mt-1",
        className
      )}
      role="alert"
      {...props}
    >
      <AlertCircle className="h-3.5 w-3.5 shrink-0" />
      <span>{children}</span>
    </p>
  );
}

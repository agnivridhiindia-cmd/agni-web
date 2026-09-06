import * as React from "react";
import { cn } from "@/lib/utils";
import { FolderSearch } from "lucide-react";

export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  title: string;
  description: string;
  action?: React.ReactNode;
}

export function EmptyState({
  icon,
  title,
  description,
  action,
  className,
  ...props
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center p-8 sm:p-12 text-center rounded-2xl border border-dashed border-[#232727] bg-[#111313]",
        className
      )}
      {...props}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#181A1A] border border-[#232727] text-[#C79A4A] mb-4">
        {icon || <FolderSearch className="h-6 w-6" />}
      </div>
      <h3 className="font-serif text-lg font-semibold text-[#F3EFE7] mb-1">
        {title}
      </h3>
      <p className="type-body-sm text-[#D1CBC1] max-w-sm mb-6 leading-relaxed font-sans">
        {description}
      </p>
      {action && <div className="inline-flex items-center">{action}</div>}
    </div>
  );
}

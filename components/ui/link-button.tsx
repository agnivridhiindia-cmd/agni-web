import * as React from "react";
import Link from "next/link";
import { type VariantProps } from "class-variance-authority";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";

export interface LinkButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof buttonVariants> {
  href: string;
  isExternal?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  showExternalIcon?: boolean;
}

/**
 * Semantic LinkButton hybrid.
 * Automatically delegates to Next.js Link for internal navigation,
 * and standard anchor tags for external/protocol targets.
 */
export const LinkButton = React.forwardRef<HTMLAnchorElement, LinkButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "default",
      fullWidth = false,
      href,
      isExternal,
      leftIcon,
      rightIcon,
      showExternalIcon = false,
      children,
      ...props
    },
    ref
  ) => {
    const isExplicitExternal =
      isExternal ??
      (href.startsWith("http://") ||
        href.startsWith("https://") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:"));

    const combinedClassName = cn(
      buttonVariants({ variant, size, fullWidth, className })
    );

    if (isExplicitExternal) {
      return (
        <a
          ref={ref}
          href={href}
          className={combinedClassName}
          target="_blank"
          rel="noopener noreferrer"
          {...props}
        >
          {leftIcon && <span className="mr-2 inline-flex shrink-0">{leftIcon}</span>}
          <span>{children}</span>
          {showExternalIcon && (
            <ExternalLink className="ml-1.5 h-3.5 w-3.5 opacity-70 shrink-0" />
          )}
          {rightIcon && <span className="ml-2 inline-flex shrink-0">{rightIcon}</span>}
        </a>
      );
    }

    return (
      <Link ref={ref} href={href} className={combinedClassName} {...props}>
        {leftIcon && <span className="mr-2 inline-flex shrink-0">{leftIcon}</span>}
        <span>{children}</span>
        {rightIcon && <span className="ml-2 inline-flex shrink-0">{rightIcon}</span>}
      </Link>
    );
  }
);
LinkButton.displayName = "LinkButton";

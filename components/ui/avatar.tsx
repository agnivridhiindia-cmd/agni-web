"use client";

import * as React from "react";
import Image, { type ImageProps } from "next/image";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { User } from "lucide-react";

export const avatarVariants = cva(
  "relative flex shrink-0 overflow-hidden bg-slate-100 border border-slate-200 select-none items-center justify-center text-slate-600 font-medium font-sans",
  {
    variants: {
      size: {
        sm: "h-8 w-8 text-xs rounded-full",
        default: "h-10 w-10 text-sm rounded-full",
        lg: "h-14 w-14 text-base rounded-full",
        xl: "h-20 w-20 text-xl rounded-full",
        square: "h-12 w-12 text-sm rounded-md",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

export interface AvatarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof avatarVariants> {
  src?: string | null;
  alt?: string;
  initials?: string;
}

export function Avatar({
  src,
  alt = "User avatar",
  initials,
  size,
  className,
  ...props
}: AvatarProps) {
  const [imageError, setImageError] = React.useState(false);

  return (
    <div className={cn(avatarVariants({ size }), className)} {...props}>
      {src && !imageError ? (
        <Image
          src={src}
          alt={alt}
          fill
          className="aspect-square h-full w-full object-cover"
          onError={() => setImageError(true)}
        />
      ) : initials ? (
        <span>{initials.slice(0, 2).toUpperCase()}</span>
      ) : (
        <User className="h-1/2 w-1/2 text-slate-400" />
      )}
    </div>
  );
}

export const imageWrapperVariants = cva(
  "relative overflow-hidden bg-slate-100 border border-slate-200/80 transition-all",
  {
    variants: {
      aspectRatio: {
        square: "aspect-square",
        portrait: "aspect-[3/4]",
        landscape: "aspect-[16/9]",
        editorial: "aspect-[4/5]",
        wide: "aspect-[21/9]",
      },
      radius: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
      },
    },
    defaultVariants: {
      aspectRatio: "landscape",
      radius: "md",
    },
  }
);

export interface ImageWrapperProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof imageWrapperVariants> {
  src?: string | null;
  alt?: string;
  imageProps?: Omit<ImageProps, "src" | "alt">;
  fallbackIcon?: React.ReactNode;
}

export function ImageWrapper({
  src,
  alt = "Image",
  aspectRatio,
  radius,
  className,
  fallbackIcon,
  imageProps,
  ...props
}: ImageWrapperProps) {
  const [imageError, setImageError] = React.useState(false);

  return (
    <div
      className={cn(imageWrapperVariants({ aspectRatio, radius }), className)}
      {...props}
    >
      {src && !imageError ? (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
          onError={() => setImageError(true)}
          {...imageProps}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400 bg-slate-100 p-4 text-center">
          {fallbackIcon || <User className="h-8 w-8 mb-1 opacity-50" />}
          <span className="text-xs font-sans text-slate-400">{alt}</span>
        </div>
      )}
    </div>
  );
}

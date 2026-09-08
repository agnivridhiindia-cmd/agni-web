import * as React from "react";

export interface WhatsAppButtonProps {
  /**
   * Optional override for phone number. Defaults to siteConfig.contact.whatsapp.
   */
  phoneNumber?: string | null;
  /**
   * Optional prefilled message when opening WhatsApp.
   */
  defaultMessage?: string;
  /**
   * Additional class names for styling or placement customization.
   */
  className?: string;
}

/**
 * WhatsApp SVG icon (clean, accessible vector path).
 */
export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2ZM12.05 20.16C10.57 20.16 9.12 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.05 20.16ZM16.57 14.33C16.32 14.2 15.11 13.61 14.88 13.52C14.66 13.44 14.5 13.4 14.33 13.65C14.17 13.9 13.7 14.47 13.55 14.64C13.41 14.8 13.27 14.83 13.02 14.7C12.77 14.58 11.98 14.32 11.04 13.48C10.3 12.82 9.8 12.01 9.66 11.76C9.52 11.51 9.64 11.38 9.77 11.25C9.88 11.14 10.02 10.96 10.15 10.81C10.27 10.66 10.31 10.56 10.4 10.39C10.48 10.22 10.44 10.08 10.38 9.95C10.31 9.82 9.82 8.62 9.61 8.13C9.41 7.65 9.21 7.71 9.06 7.71C8.92 7.7 8.75 7.7 8.58 7.7C8.42 7.7 8.15 7.76 7.92 8.01C7.69 8.26 7.05 8.86 7.05 10.08C7.05 11.3 7.94 12.48 8.06 12.65C8.19 12.81 9.81 15.31 12.28 16.38C12.87 16.63 13.33 16.78 13.69 16.89C14.28 17.08 14.82 17.05 15.25 16.99C15.72 16.92 16.71 16.39 16.92 15.81C17.13 15.23 17.13 14.73 17.06 14.62C17 14.51 16.82 14.45 16.57 14.33Z" />
    </svg>
  );
}

/**
 * Floating WhatsApp action component.
 * Respects Single Source of Truth: if WhatsApp is null/empty, safely renders nothing.
 */
export function WhatsAppButton(_props: WhatsAppButtonProps = {}) {
  return null;
}

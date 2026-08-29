import { z } from "zod";

/**
 * Contact Form Validation Schema
 * Single source of truth for inbound inquiry validation across the website.
 */
export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Full name must be at least 2 characters." })
    .max(100, { message: "Full name cannot exceed 100 characters." }),
  email: z
    .string()
    .trim()
    .email({ message: "Please provide a valid corporate or personal email address." })
    .max(255, { message: "Email address is too long." }),
  phone: z
    .string()
    .trim()
    .min(10, { message: "Please provide a valid contact number (at least 10 digits)." })
    .regex(/^[0-9+\s()-]{10,20}$/, {
      message: "Phone number format is invalid. Please use only numbers, +, -, and spaces.",
    }),
  company: z
    .string()
    .trim()
    .max(120, { message: "Company name cannot exceed 120 characters." })
    .optional()
    .or(z.literal("")),
  service: z
    .string()
    .trim()
    .min(1, { message: "Please select a primary service of interest." }),
  message: z
    .string()
    .trim()
    .min(10, { message: "Inquiry message must be at least 10 characters." })
    .max(2000, { message: "Inquiry message cannot exceed 2000 characters." }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

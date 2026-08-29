import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Full name must be at least 2 characters." })
    .max(100, { message: "Full name cannot exceed 100 characters." }),
  email: z
    .string()
    .email({ message: "Please provide a valid business email address." }),
  phone: z
    .string()
    .min(10, { message: "Please provide a valid contact number (min 10 digits)." })
    .regex(/^[0-9+\s()-]+$/, { message: "Invalid phone number format." }),
  companyName: z
    .string()
    .max(120, { message: "Company name cannot exceed 120 characters." })
    .optional(),
  serviceInterest: z.string().min(1, { message: "Please select a service of interest." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters long." })
    .max(2000, { message: "Message cannot exceed 2000 characters." }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

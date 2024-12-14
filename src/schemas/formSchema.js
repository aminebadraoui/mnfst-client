import { z } from 'zod';

export const formSchema = z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    phone: z.string()
        .min(1, "Phone number is required")
        .regex(/^[0-9+-]+$/, "Please enter a valid phone number"),
    email: z.string()
        .min(1, "Email is required")
        .email("Please enter a valid email address"),
    // src/schemas/formSchema.js
    industry: z.string().min(1, "Please enter your industry"),
    revenue: z.string().min(1, "Please select your revenue range"),
    terms: z.literal(true, {
        errorMap: () => ({ message: "You must accept the terms and conditions" }),
    }),
});
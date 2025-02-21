import { z } from "zod";
import { RegisterArg } from "@/GraphQL/generated/graphql";

export type RegisterArgValidator = z.ZodType<RegisterArg & { confirmPassword: string }>;

export const registrationValidator: RegisterArgValidator = z
  .object({
    name: z.string().min(1, "Name is required").max(50, "Name must be less than 50 characters"),
    username: z.string().min(1, "Username is required").max(20, "Username must be less than 20 characters"),
    password: z.string().min(6, "Password must be at least 6 characters long").max(20, "Password must be less than 20 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type RegistrationFormData = z.infer<typeof registrationValidator>;

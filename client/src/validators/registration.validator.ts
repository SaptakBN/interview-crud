import { RegisterArg } from "@/interfaces/register.interface";
import { z } from "zod";
export type RegisterArgValidator = z.ZodType<RegisterArg & { confirmPassword: string }>;

export const registrationValidator: RegisterArgValidator = z
  .object({
    email: z.string().min(1, { message: "Email has to be filled." }).email("This is not a valid email."),
    password: z
      .string()
      .min(6, "Password must be 6 characters long")
      .max(20, "Password must be less than 20 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type RegistrationFormData = z.infer<typeof registrationValidator>;

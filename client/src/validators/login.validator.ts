import { LoginArg } from "@/interfaces/login.interface";
import { z } from "zod";

export const loginValidator: z.ZodType<LoginArg> = z.object({
  email: z.string().nonempty("Email has to be filled.").email("This is not a valid email."),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

export type LoginFormData = z.infer<typeof loginValidator>;

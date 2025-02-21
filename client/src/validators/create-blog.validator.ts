import { BlogArg } from "@/interfaces/blog.interface";
import { z } from "zod";

export const blogValidator: z.ZodType<BlogArg> = z.object({
  title: z.string().min(6, "Title must be at least 6 characters long"),
  content: z.string().min(6, "Content must be at least 10 characters long"),
});

export type BlogFormData = z.infer<typeof blogValidator>;

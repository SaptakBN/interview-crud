import { PostArg } from "@/GraphQL/generated/graphql";
import { z } from "zod";

export const postValidator: z.ZodType<PostArg> = z.object({
  title: z.string().min(6, "Title must be at least 6 characters long"),
  content: z.string().min(6, "Content must be at least 10 characters long"),
});

export type PostFormData = z.infer<typeof postValidator>;

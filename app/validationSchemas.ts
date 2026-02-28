import z from "zod";

export const createIssueSchema = z.object({
  title: z
    .string()
    .min(3, "title must be at least 3 characters")
    .max(255, "title must be at most 255 characters"),
  description: z.string().min(1, "description is required"),
});

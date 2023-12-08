import { z } from "zod";

export const createIssueSchema = z.object({
  title: z
    .string()
    .min(1, "Längden ska vara minst vara 1 tecken")
    .max(255, "Längden ska vara minst vara 255 tecken"),
  description: z.string().min(1),
});

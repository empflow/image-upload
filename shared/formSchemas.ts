import { z } from "zod";

export const uploadFormSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
});
export type TUploadFormSchema = z.infer<typeof uploadFormSchema>;

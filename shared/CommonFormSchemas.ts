import { z } from "zod";

export const uploadFormSchemaBase = z.object({
  firstName: z.string(),
  lastName: z.string(),
});
export type TUploadFormSchemaBase = z.infer<typeof uploadFormSchemaBase>;

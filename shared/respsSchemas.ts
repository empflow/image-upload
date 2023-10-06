import { z } from "zod";

export const uploadRespSchema = z.object({
  ETag: z.string(),
  Location: z.string().url(),
  key: z.string(),
  Bucket: z.string(),
});

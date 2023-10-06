import { z } from "zod";
import { uploadFormSchemaBase } from "./CommonFormSchemas";

export const uploadFormSchemaClient = uploadFormSchemaBase.extend({
  img: z.instanceof(File),
});
export type TUploadFormSchemaClient = z.infer<typeof uploadFormSchemaClient>;

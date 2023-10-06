import { z } from "zod";
import { uploadFormSchemaBase } from "./CommonFormSchemas";

export const uploadFormSchemaServer = uploadFormSchemaBase.extend({
  // TODO
});
export type TUploadFormSchemaServer = z.infer<typeof uploadFormSchemaServer>;

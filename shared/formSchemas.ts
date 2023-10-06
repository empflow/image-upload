import { z } from "zod";

const string = z.string().array().length(1);
const number = z.number().array().length(1);

export const formidableFile = z
  .object({
    size: z.number(),
    filepath: z.string(),
    newFilename: z.string(),
    mimetype: z.string(),
    mtime: z.string(),
    originalFilename: z.string(),
  })
  .array()
  .length(1);

export const uploadFormSchema = z.object({
  fields: z.object({
    name: string,
    phoneNumber: string,
  }),
  files: z.object({
    img: formidableFile,
  }),
});

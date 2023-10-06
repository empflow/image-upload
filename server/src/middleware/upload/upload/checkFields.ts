import { Request, Response, NextFunction } from "express";
import { uploadFormSchema } from "@/shared/formSchemas";

export default async function uploadCheckFields(
  _req: Request,
  res: Response,
  next: NextFunction
) {
  const { formData } = res.locals;

  const test = uploadFormSchema.parse(formData);
  console.log(test);

  next();
}

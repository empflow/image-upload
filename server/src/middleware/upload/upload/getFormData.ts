import { Request, Response, NextFunction } from "express";
import formidable from "formidable";

export default async function uploadGetFormData(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const form = formidable();
  const formData = await form.parse(req);
  const [fields, files] = formData;

  res.locals.formData = formData;
  res.locals.files = files;
  res.locals.fields = fields;

  next();
}

import { Request, Response, NextFunction } from "express";
import { uploadFormSchema } from "@/shared/formSchemas";
import { BadRequestErr } from "@/server/src/utils/errs";

export default async function uploadImgCheckTextFields(
  req: Request,
  _res: Response,
  next: NextFunction
) {
  const validTextFields = uploadFormSchema.safeParse(req.body).success;
  if (!validTextFields) throw new BadRequestErr("Invalid data");

  next();
}

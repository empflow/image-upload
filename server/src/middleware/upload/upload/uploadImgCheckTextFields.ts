import { Request, Response, NextFunction } from "express";
import { uploadFormSchemaServer } from "@/shared/ServerFormSchemas";
import { BadRequestErr } from "@/server/src/utils/errs";

export default async function uploadImgCheckTextFields(
  req: Request,
  _res: Response,
  next: NextFunction
) {
  const validTextFields = uploadFormSchemaServer.safeParse(req.body).success;
  if (!validTextFields) throw new BadRequestErr("Invalid data");

  next();
}

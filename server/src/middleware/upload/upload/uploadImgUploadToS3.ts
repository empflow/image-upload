import { BadRequestErr } from "@/server/src/utils/errs";
import { s3Upload } from "@/server/src/utils/s3";
import { Request, Response, NextFunction } from "express";

export default async function uploadImgUploadToS3(
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (!req.file) throw new BadRequestErr("No image provided");

  const { buffer, originalname: filename } = req.file;
  res.locals.uploadResult = await s3Upload(buffer, filename);

  next();
}

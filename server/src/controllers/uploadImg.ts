import { Request, Response } from "express";

export default async function uploadImg(req: Request, res: Response) {
  const { uploadResult } = res.locals;
  res.json(uploadResult);
}

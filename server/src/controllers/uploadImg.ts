import { Request, Response } from "express";
import formidable from "formidable";

export default async function uploadImg(req: Request, res: Response) {
  const form = formidable({});

  const [fields, files] = await form.parse(req);

  res.json({ fields, files });
}

import express from "express";
const fileUploadRouter = express.Router();
import path from "path";
import { BadRequestErr, NotFoundErr } from "../utils/errs";
import { promisify } from "util";
import fs from "fs";
const readFile = promisify(fs.readFile);

const IMG_EXTS = ["jpeg", "jpg", "png", "webp", "avif", "gif", "svg"];

fileUploadRouter.get("/:fileName", async (req, res) => {
  const { fileName } = req.params;
  checkFileFormat(fileName);
  checkFileExists(fileName);

  const filePath = getAbsoluteFilePath(fileName);
  const fileExt = getFileExt(fileName);
  const file = await readFile(filePath);

  const imgMimeType = getImgMimeType(fileExt);

  res.set("Content-Type", `image/${imgMimeType}`);
  res.send(file);
});

function checkFileFormat(fileName: string) {
  const fileExt = getFileExt(fileName);
  if (!IMG_EXTS.includes(fileExt)) {
    throw new BadRequestErr("File format not supported");
  }
}

function getAbsoluteFilePath(fileName: string) {
  return path.resolve(`./src/assets/${fileName}`);
}

function checkFileExists(fileName: string) {
  const filePath = getAbsoluteFilePath(fileName);
  const fileExists = fs.existsSync(filePath);
  if (!fileExists) throw new NotFoundErr("Image not found");
}

function getFileExt(fileName: string) {
  const extWithDot = path.extname(fileName);
  return extWithDot.replace(".", "");
}

function getImgMimeType(extName: string) {
  switch (extName) {
    case "jpeg":
    case "jpg":
      return "jpeg";
    case "svg":
      return "svg+xml";

    default:
      return extName;
  }
}

export default fileUploadRouter;

import express from "express";
import uploadImg from "../controllers/uploadImg";
import uploadImgCheckTextFields from "../middleware/upload/upload/uploadImgCheckTextFields";
import imgUpload from "../config/upload/imgUpload";
import uploadImgUploadToS3 from "../middleware/upload/upload/uploadImgUploadToS3";
const uploadRouter = express.Router();

uploadRouter.post(
  "/",
  imgUpload.single("img"),
  uploadImgCheckTextFields,
  uploadImgUploadToS3,
  uploadImg
);

export default uploadRouter;

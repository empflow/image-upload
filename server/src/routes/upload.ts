import express from "express";
import uploadImg from "../controllers/uploadImg";
import uploadCheckFields from "../middleware/upload/upload/checkFields";
import uploadGetFormData from "../middleware/upload/upload/getFormData";
const uploadRouter = express.Router();

uploadRouter.post("/", uploadGetFormData, uploadCheckFields, uploadImg);

export default uploadRouter;

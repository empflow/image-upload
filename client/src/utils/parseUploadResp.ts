import { uploadRespSchema } from "@/shared/respsSchemas";

export default function parseUploadRespData(data: unknown) {
  try {
    return uploadRespSchema.parse(data);
  } catch (err) {
    return null;
  }
}

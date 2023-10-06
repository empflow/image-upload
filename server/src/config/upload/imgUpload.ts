import getMulterUploadMw from "../../utils/getMulterUploadMw";

const IMG_ALLOWED_FILE_EXTS = ["jpeg", "jpg", "png", "webp", "avif", "gif"];

export default getMulterUploadMw(IMG_ALLOWED_FILE_EXTS);

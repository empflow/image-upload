import S3 from "aws-sdk/clients/s3";
import getEnvVar from "./getEnvVar";
import getS3FileNames from "./getS3FileNames";

const accessKeyId = getEnvVar("S3_ACCESS_KEY_ID");
const secretAccessKey = getEnvVar("S3_SECRET_ACCESS_KEY");
const endpoint = getEnvVar("S3_ENDPOINT");
const bucketName = getEnvVar("S3_BUCKET_NAME");

const s3 = new S3({
  credentials: {
    accessKeyId,
    secretAccessKey,
  },
  endpoint,
  apiVersion: "latest",
  s3ForcePathStyle: true,
});

export async function s3Upload(
  body: Buffer | Uint8Array | Blob | string,
  ext: string
) {
  try {
    const key = getS3FileNames(ext);
    const result = await s3
      .upload({ Bucket: bucketName, Key: key, Body: body })
      .promise();
    return result;
  } catch (err) {
    throw new Error("upload error");
  }
}

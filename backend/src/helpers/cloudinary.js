import { v2 as cloudinary } from "cloudinary";

const CLOUD_NAME = "ddwriwzgm";
const API_KEY = "689514566951155";
const API_SECRET = "NS1N43594cHMMeCyApO_54HVsEw";

cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: API_KEY,
  api_secret: API_SECRET,
  secure: true,
});

export const uploadImage = async (filesPath) => {
  return await cloudinary.uploader.upload(filesPath, {
    folder: "imagenProyect",
    resource_type: "image",
  });
};

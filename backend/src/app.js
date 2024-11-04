import express from "express";
import cors from "cors";
import morgan from "morgan";
import upload from "express-fileupload";
import { uploadImage } from "./helpers/cloudinary.js";

const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(
  upload({
    tempFileDir: "./src/upload",
    useTempFiles: true,
  })
);
app.use(cors());
app.post("/", async (req, res) => {
  try {
    console.log(req.files.image);
    const ruta = req.files.image.tempFilePath;
    const result = await uploadImage(ruta);
    res.json([req.files.image, result, { url: result.secure_url }]);
  } catch (error) {
    console.log(error);
  }
});

app.listen(4000, () => {
  console.log("server running on http://localhost:4000");
});

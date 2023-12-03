import multer, { FileFilterCallback } from "multer";
import { Request } from "express";
import path from "path";
import { v4 } from "uuid";
import fs from "fs";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const pathToReactPublic = path.join(
      __dirname,
      "..",
      "..",
      "frontend",
      "public",
      "uploads"
    );
    if (!fs.existsSync(pathToReactPublic)) {
      fs.mkdirSync(pathToReactPublic, { recursive: true }); // creates folders if don't exist
    }
    cb(null, pathToReactPublic); // img filepath
  },

  filename: (req, file, cb) => {
    cb(null, `${v4()}-${Date.now()}${path.extname(file.originalname)}`); // img filename
  },
});

const fileFilter = (
  req: Request,
  file: Express.Multer.File,
  cb: FileFilterCallback
) => {
  const allowedFileTypes = ["image/jpeg", "image/jpg", "image/png"];

  if (allowedFileTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 1024 * 1024 * 5 },
});

export default upload;

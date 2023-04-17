import path from "path";
import { fileURLToPath } from "url";
import multer from "multer";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const __dirsource = path.join(__dirname, "..");

export const storage = multer.diskStorage({
  destination: function (req: any, file: any, callback: any) {
    if (file.mimetype == "image/png") {
      callback(null, __dirsource + "/files" + "/png");
    }
    if (
      file.mimetype == "application/zip" ||
      file.mimetype == "application/x-7z-compressed"
    ) {
      callback(null, __dirsource + "/files" + "/zip");
    }
    if (file.mimetype == "video/mp4") {
      callback(null, __dirsource + "/files" + "/mp4");
    }
    if (file.mimetype == "application/vnd.rar") {
      callback(null, __dirsource + "/files" + "/rar");
    }
    if (file.mimetype == "application/pdf") {
      callback(null, __dirsource + "/files" + "/pdf");
    }
    if (file.mimetype == "image/jpeg") {
      callback(null, __dirsource + "/files" + "/jpg");
    }
    if (file.mimetype == "image/webp") {
      callback(null, __dirsource + "/files" + "/webp");
    }
    if (
      file.mimetype ==
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ||
      file.mimetype == "application/vnd.ms-excel"
    ) {
      callback(null, __dirsource + "/files" + "/excel");
    }
    if (
      file.mimetype == "application/msword" ||
      file.mimetype ==
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {
      callback(null, __dirsource + "/files" + "/word");
    }
    if (
      file.mimetype == "application/vnd.ms-powerpoint" ||
      file.mimetype ==
        "application/vnd.openxmlformats-officedocument.presentationml.presentation"
    ) {
      callback(null, __dirsource + "/files" + "/powerpoint");
    }
  },
  filename: function (req: any, file: any, callback: any) {
    callback(null, Buffer.from(file.originalname, "latin1").toString("utf8"));
  },
});

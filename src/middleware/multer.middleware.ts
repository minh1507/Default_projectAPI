import path from "path";
import { fileURLToPath } from "url";
import multer from "multer";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const __dirsource = path.join(__dirname, "..");

class Multer{
  public png = multer.diskStorage({
    destination: function (req: any, file: any, callback: any) {
      if (file.mimetype == "image/png") {
        callback(null, __dirsource + "/files" + "/png");
      }
    },
    filename: function (req: any, file: any, callback: any) {
      callback(null, Buffer.from(file.originalname, "latin1").toString("utf8"));
    },
  });

  public zip = multer.diskStorage({
    destination: function (req: any, file: any, callback: any) {
      if (
        file.mimetype == "application/zip" ||
        file.mimetype == "application/x-7z-compressed"
      ) {
        callback(null, __dirsource + "/files" + "/zip");
      }
    },
    filename: function (req: any, file: any, callback: any) {
      callback(null, Buffer.from(file.originalname, "latin1").toString("utf8"));
    },
  });

  public mp4 = multer.diskStorage({
    destination: function (req: any, file: any, callback: any) {
      if (file.mimetype == "video/mp4") {
        callback(null, __dirsource + "/files" + "/mp4");
      }
    },
    filename: function (req: any, file: any, callback: any) {
      callback(null, Buffer.from(file.originalname, "latin1").toString("utf8"));
    },
  });

  public rar = multer.diskStorage({
    destination: function (req: any, file: any, callback: any) {
      if (file.mimetype == "application/vnd.rar") {
        callback(null, __dirsource + "/files" + "/rar");
      }
    },
    filename: function (req: any, file: any, callback: any) {
      callback(null, Buffer.from(file.originalname, "latin1").toString("utf8"));
    },
  });

  public pdf = multer.diskStorage({
    destination: function (req: any, file: any, callback: any) {
      if (file.mimetype == "application/pdf") {
        callback(null, __dirsource + "/files" + "/pdf");
      }
    },
    filename: function (req: any, file: any, callback: any) {
      callback(null, Buffer.from(file.originalname, "latin1").toString("utf8"));
    },
  });

  public jpg = multer.diskStorage({
    destination: function (req: any, file: any, callback: any) {
      if (file.mimetype == "image/jpeg") {
        callback(null, __dirsource + "/files" + "/jpg");
      }
    },
    filename: function (req: any, file: any, callback: any) {
      callback(null, Buffer.from(file.originalname, "latin1").toString("utf8"));
    },
  });

  public webp = multer.diskStorage({
    destination: function (req: any, file: any, callback: any) {
      if (file.mimetype == "image/webp") {
        callback(null, __dirsource + "/files" + "/webp");
      }
    },
    filename: function (req: any, file: any, callback: any) {
      callback(null, Buffer.from(file.originalname, "latin1").toString("utf8"));
    },
  });

  public xlsx = multer.diskStorage({
    destination: function (req: any, file: any, callback: any) {
      if (
        file.mimetype ==
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ||
        file.mimetype == "application/vnd.ms-excel"
      ) {
        callback(null, __dirsource + "/files" + "/excel");
      }
    },
    filename: function (req: any, file: any, callback: any) {
      callback(null, Buffer.from(file.originalname, "latin1").toString("utf8"));
    },
  });
  
  public docx = multer.diskStorage({
    destination: function (req: any, file: any, callback: any) {
      if (
        file.mimetype == "application/msword" ||
        file.mimetype ==
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      ) {
        callback(null, __dirsource + "/files" + "/word");
      }
    },
    filename: function (req: any, file: any, callback: any) {
      callback(null, Buffer.from(file.originalname, "latin1").toString("utf8"));
    },
  });
  
  public pptx = multer.diskStorage({
    destination: function (req: any, file: any, callback: any) {
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
}

const storage = new Multer()
export default storage
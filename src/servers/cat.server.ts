import express, { Express, NextFunction } from "express";
import dotenv from "dotenv";
import cors from "cors";
import https from "https";
import bodyParser from "body-parser";
import * as routes from "../routes/index.ts";
import swaggerUi from "swagger-ui-express";
import * as seq from "../config/connect.database.ts";
import swaggerJsDocUi from "../common/json/swaggerDocs.json" assert { type: "json" };
import helmet from "helmet";
import interceptor from "../middleware/inteceptor.middleware.ts";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import multer from "multer";
import cookieParser from "cookie-parser";
import session from "express-session";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const __dirsource = path.join(__dirname, "..");
const port = process.env.ANIMAL_PORT;
export const app: Express = express();

const storage = multer.diskStorage({
  destination: function (req: any, file: any, callback: any) {
    console.log(file)
    if(file.mimetype == "image/png"){
      callback(null, __dirsource + "/files" + "/png");
    }
    if(file.mimetype == "application/zip" || file.mimetype == "application/x-7z-compressed"){
      callback(null, __dirsource + "/files" + "/zip");
    }
    if(file.mimetype == "video/mp4"){
      callback(null, __dirsource + "/files" + "/mp4");
    }
    if(file.mimetype == "application/vnd.rar"){
      callback(null, __dirsource + "/files" + "/rar");
    }
    if(file.mimetype == "application/pdf"){
      callback(null, __dirsource + "/files" + "/pdf");
    }
    if(file.mimetype == "image/jpeg"){
      callback(null, __dirsource + "/files" + "/jpg");
    }
    if(file.mimetype == "image/webp"){
      callback(null, __dirsource + "/files" + "/webp");
    }
    if(file.mimetype == "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" || file.mimetype == "application/vnd.ms-excel"){
      callback(null, __dirsource + "/files" + "/excel");
    }
    if(file.mimetype == "application/msword" || file.mimetype == "application/vnd.openxmlformats-officedocument.wordprocessingml.document"){
      callback(null, __dirsource + "/files" + "/word");
    }
    if(file.mimetype == "application/vnd.ms-powerpoint" || file.mimetype == "application/vnd.openxmlformats-officedocument.presentationml.presentation"){
      callback(null, __dirsource + "/files" + "/powerpoint");
    }
  },
  filename: function (req: any, file: any, callback: any) {
    callback(null, Buffer.from(file.originalname, 'latin1').toString('utf8'));
  },
});

var upload = multer({ storage: storage });
app.use("/static", express.static(__dirsource + '/files'));

app.set("trust proxy", true);
app.use(helmet());
app.use(cors());
app.use((req: any, res: any, next: NextFunction) => {
  
  // const corsWhitelist = ["http://localhost:7000", "http://localhost:3000"];
  // console.log(req.headers)
  // if (corsWhitelist.indexOf(req.headers.origin) != -1) {
  //   res.setHeader("Access-Control-Allow-Origin", req.headers.origin);
  //   res.setHeader(
  //     "Access-Control-Allow-Methods",
  //     "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  //   );
  //   res.setHeader(
  //     "Access-Control-Allow-Methods",
  //     "Content-Type",
  //     "Authorization"
  //   );
  //   res.setHeader("Access-Control-Allow-Credentials", true);
  //   next();
  // } else {
  //   return res.status(500).json("Server not found");
  // }
  next()
}, cors({ maxAge: 84600 }));
app.use((req, res, next) => {
  interceptor(req, res, next);
});
app.use(cookieParser());
app.use(
  session({
    secret: process.env.PRIVATE_TOKEN,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 100,
    },
  })
);
app.use("/apis", swaggerUi.serve, swaggerUi.setup(swaggerJsDocUi));
app.use(bodyParser.json({ limit: "50000mb" }));
app.use(bodyParser.urlencoded({ limit: "50000mb", extended: true }));
app.use(upload.array("files"));
app.use(express.static("public"));

routes.animalRoutes(app);
seq.connectDB();

var privateKey = fs.readFileSync(
  __dirname + "/certificate/selfsigned.key",
  "utf8"
);
var certificate = fs.readFileSync(
  __dirname + "/certificate/selfsigned.crt",
  "utf8"
);

var options = {
  key: privateKey,
  cert: certificate,
  requestCert: false,
  rejectUnauthorized: false,
};

// https.createServer(options, app).listen(port, function () {
//   console.log(`Domain: ${process.env.ROOT_DOMAIN}: ${port}`);
// });

app.listen(port, () => {
  console.log(`Domain: ${process.env.ROOT_DOMAIN}: ${port}`);
});

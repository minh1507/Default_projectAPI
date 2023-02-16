import express, { Express, NextFunction } from "express";
import dotenv from "dotenv";
import cors from "cors";
import https from "https";
import bodyParser from "body-parser";
import pem from "https-pem";
import * as routes from "../routes/index.ts";
import swaggerUi from "swagger-ui-express"
import * as seq from "../config/connect.database.ts";
import swaggerJsDocUi from "../common/json/swaggerDocs.json" assert { type: "json" };
import helmet from "helmet";


dotenv.config();

const port = process.env.ANIMAL_PORT;
export const app: Express = express();

app.set("trust proxy", true);
app.use(helmet());
app.use(cors());
app.use((req: any, res: any, next: NextFunction) => {
  const corsWhitelist = ["https://localhost:4200"];
  if (corsWhitelist.indexOf(req.headers.origin) !== -1) {
    res.setHeader("Access-Control-Allow-Origin", req.headers.origin);
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "Content-Type",
      "Authorization"
    );
    res.setHeader("Access-Control-Allow-Credentials", true);
  }
  next();
}, cors({ maxAge: 84600 }));
app.use("/apis", swaggerUi.serve, swaggerUi.setup(swaggerJsDocUi))
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

routes.animalRoutes(app);
seq.connectDB();

var options = {
  key: pem.key,
  cert: pem.cert,
};

https.createServer(options, app).listen(port, function () {
  console.log(`Domain: ${process.env.ROOT_DOMAIN}: ${port}`);
});

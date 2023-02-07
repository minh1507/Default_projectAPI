import express, { Express, NextFunction } from "express";
import dotenv from "dotenv";
import cors from "cors";
import https from "https";
import bodyParser from "body-parser";
import pem from "https-pem";
import routes from "../routes/index.ts";

dotenv.config();
const port = process.env.PORT;
const app: Express = express();
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

app.set("trust proxy", true);

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

routes(app);

var options = {
  key: pem.key,
  cert: pem.cert,
};

https.createServer(options, app).listen(port, function () {
  console.log("Server listening on port: " + port);
  console.log("Server using Https proxy");
  console.log("Domain: https://localhost:" + port);
});

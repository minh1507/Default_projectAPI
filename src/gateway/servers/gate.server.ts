import express, { Express, NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import * as seq from "../config/connect.database.ts";

import * as routes from "../routes/index.route.ts";

import swaggerUi from "swagger-ui-express";
import swaggerJsDocUi from "../common/json/swaggerDocs.json" assert { type: "json" };

export default class Microservice {
  private app: Express = express();

  middleware(app: Express) {
    app.set("trust proxy", true);
    app.use(helmet());
    app.use(cors());
    app.use(cookieParser());
    app.use("/apis", swaggerUi.serve, swaggerUi.setup(swaggerJsDocUi));
    app.use(bodyParser.json({ limit: "50000mb" }));
    app.use(bodyParser.urlencoded({ limit: "50000mb", extended: true }));
  }

  configuration(app: Express) {
    routes.direct(app);
    seq.connectDB();
  }

  broad(app: Express) {
    app.listen(process.env.GATEWAY_PORT, () => {
      console.log(
        `Domain: ${process.env.ROOT_DOMAIN}:${process.env.GATEWAY_PORT}`
      );
    });
  }

  other() {
    dotenv.config();
  }

  run() {
    const app: Express = this.app;
    this.other();
    this.middleware(app);
    this.configuration(app);
    this.broad(app);
  }
}

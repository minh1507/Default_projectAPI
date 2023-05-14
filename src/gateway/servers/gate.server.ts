import express, { Express, NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import * as seq from "../config/connect.database.ts";
import * as block from "../middlewares/cors.middleware.ts";

import * as routes from "../routes/index.route.ts";

import swaggerUi from "swagger-ui-express";
import swaggerJsDocUi from "../common/json/swaggerDocs.json" assert {type: "json"};

export default class Microservice {
  private port = process.env.GATEWAY_PORT;
  private domain = process.env.ROOT_DOMAIN
  private app: Express = express();
  private hostname: string = '0.0.0.0' 

  middleware(app: Express) {
    app.use("/apis", swaggerUi.serve, swaggerUi.setup(swaggerJsDocUi));
    app.use(helmet());
    app.use(cors());
    app.use((req: Request, res: Response, next: NextFunction) => {
      block.blockCors(req, res, next);
    }, cors({ maxAge: 84600 }));
    app.use(cookieParser());
    app.use(bodyParser.json({ limit: "50000mb" }));
    app.use(bodyParser.urlencoded({ limit: "50000mb", extended: true }));
  }

  configuration(app: Express) {
    routes.direct(app);
    seq.connectDB();
  }

  broad(app: Express) {
    app.listen(Number(this.port), this.hostname, () => {
      console.log(
        `Domain: ${this.domain}:${this.port}`
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

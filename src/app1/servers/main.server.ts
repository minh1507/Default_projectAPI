import express, { Express, NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

import helmet from "helmet";
import interceptor from "../middleware/inteceptor.middleware.ts";
import cookieParser from "cookie-parser";

import * as session from "../middleware/session.middleware.ts";
import * as block from "../middleware/cors.middleware.ts";
import * as seq from "../config/connect.database.ts";
import * as routes from "../routes/index.route.ts";

export default class main {
  private port = process.env.APP1;
  private domain = process.env.ROOT_DOMAIN
  private app: Express = express();

  middleware(app: Express) {
    app.set("trust proxy", true);
    app.use(helmet());
    app.use(cors());
    app.use((req: Request, res: Response, next: NextFunction) => {
      block.blockCors(req, res, next);
    }, cors({ maxAge: 84600 }));
    app.use((req: Request, res: Response, next: NextFunction) => {
      interceptor(req, res, next);
    });
    app.use(cookieParser());
    app.use(session.sessions);
    app.use(bodyParser.json({ limit: "50000mb" }));
    app.use(bodyParser.urlencoded({ limit: "50000mb", extended: true }));
  }

  configuration(app:Express){
    routes.animalRoutes(app);
    seq.connectDB();
  }

  broad(app: Express){
    app.listen(this.port, () => {
      console.log(`Domain: ${this.domain}:${this.port}`);
    });
  }

  other(){
    dotenv.config();
  }

  run() {
    const app:Express = this.app;
    this.other()
    this.middleware(app);
    this.configuration(app)
    this.broad(app)
  }
}





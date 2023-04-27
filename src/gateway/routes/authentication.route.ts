import express, { Request, Response } from "express";

import * as rate from "../middlewares/rateLimit.middleware.ts"

import { auth } from "../logical/auth.logical.ts";

let router = express.Router();

let authRoute = (app: any) => {

  router.post(
    "/:apiName",
    rate.auth,
    auth
  );

  return app.use("/api/auth/", router);
};

export default authRoute;

import express from "express";
import multer from "multer";

import * as configMulter from "../middlewares/multer.middleware.ts";
import * as auth from "../middlewares/authorization.middleware.ts";
import * as rate from "../middlewares/rateLimit.middleware.ts";
import { deleteById, findAll, findById, post } from "../logical/app1.logical.ts";

let upload = multer({ storage: configMulter.storage });
  
let router = express.Router();

let app1Route = (app: any) => {
  router.get(
    "/:apiName/:path",
    rate.common,
    auth.authorizations,
    findById
  );

  router.get(
    "/:apiName",
    rate.common,
    auth.authorizations,
    findAll
  );

  router.delete(
    "/:apiName/:id",
    rate.common,
    auth.authorizations,
    deleteById
  );

  router.post(
    "/:apiName",
    rate.common,
    auth.authorizations,
    upload.array("files"),
    post
  );

  return app.use("/api/", router);
};

export default app1Route;

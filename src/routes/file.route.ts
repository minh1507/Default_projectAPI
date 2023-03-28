import express from "express";
import {
  file
} from "../controllers/file.controller.ts";

let router = express.Router();

let fileRoute = (app: any) => {
  router.post("/create", file);
  return app.use("/api/file", router);
};

export default fileRoute;

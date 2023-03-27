import express from "express";
import {
  findAll,
} from "../controllers/user.controller.ts";

let router = express.Router();

let userRoute = (app: any) => {
  router.get("/", findAll);
 
  return app.use("/api/user", router);
};

export default userRoute;
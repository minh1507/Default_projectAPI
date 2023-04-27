import express from "express";
import { register, login, refresh } from "../controllers/auth.controller.ts";

let router = express.Router();

let authRoute = (app: any) => {
  router.post("/register", register);
  router.post("/login", login);
  router.post("/refresh", refresh);
  return app.use("/api/auth", router);
};

export default authRoute;

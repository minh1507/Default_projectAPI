import express from "express";
import { register,login } from "../controllers/user.controller.ts";

let router = express.Router();

let authRoute = (app: any) => {
  router.post("/register", register);
  router.post("/login", login);
  return app.use("/user", router);
};

export default authRoute;

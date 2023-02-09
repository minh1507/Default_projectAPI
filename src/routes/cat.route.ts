import express from "express";
import {
  findAll,
  findById,
  create,
  createMany,
  deleteById,
  deleteMany,
  update,
} from "../controllers/cat.controller.ts";
import * as auth from "../middleware/authorization.middleware.ts";
import * as rate from "../middleware/rateLimit.middleware.ts";

let router = express.Router();

let catRoute = (app: any) => {
  router.get("/", rate.cat, auth.authorizations, findAll);
  router.get("/:id", rate.cat, auth.authorizations, findById);
  router.post("/", rate.cat, auth.authorizations, create);
  router.delete("/:id", rate.cat, auth.authorizations, deleteById);
  router.put("/:id", rate.cat, auth.authorizations, update);
  return app.use("/cat", router);
};

export default catRoute;

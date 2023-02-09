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
import * as auth from "../middleware/authorization.middleware.ts"

let router = express.Router();

let catRoute = (app: any) => {
  router.get("/", auth.authorizations, findAll);
  router.get("/:id",auth.authorizations, findById);
  router.post("/", auth.authorizations, create);
  router.delete("/:id",auth.authorizations, deleteById);
  router.put("/:id",auth.authorizations, update);
  return app.use("/cat", router);
};

export default catRoute;

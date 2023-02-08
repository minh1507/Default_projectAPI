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

let router = express.Router();

let catRoute = (app: any) => {
  router.get("/", findAll);
  router.get("/:id", findById);
  router.post("/", create);
  router.delete("/:id", deleteById);
  router.put("/:id", update);
  return app.use("/cat", router);
};

export default catRoute;

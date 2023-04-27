import express from "express";
import {
  findAll,
  findById,
  create,
  deleteById,
  update,
  findPath,
} from "../controllers/cat.controller.ts";

let router = express.Router();

let catRoute = (app: any) => {
  router.get("/", findAll);
  router.get("/path", findPath);
  router.get("/:id", findById);
  router.post("/", create);
  router.delete("/:id", deleteById);
  router.put("/:id", update);
  return app.use("/api/cat", router);
};

export default catRoute;

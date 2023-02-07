import express from "express";
import {
  findAll,
  findById,
  create,
  createMany,
  deleteById,
  deleteMany,
  update,
  test,
} from "../controllers/catController.ts";

let router = express.Router();

let catRoute = (app: any) => {
  router.get("/cat", findAll);
  router.get("/cat/:id", findById);
  router.post("/cat", create);
  router.post("/cat/many", createMany);
  router.delete("/cat/:id", deleteById);
  router.delete("/cat/many", deleteMany);
  router.put("/cat", update);
  return app.use("/", router);
};

export default catRoute;

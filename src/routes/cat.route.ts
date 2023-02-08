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
} from "../controllers/cat.controller.ts";

let router = express.Router();

let catRoute = (app: any) => {
  /**
   * @swagger
   *  component
   *    schemas
   *      cat:
   *        type: object
   *        required:
   *          - name
   *          - age
   *        properties:
   *          id:
   *            type: string
   *            description: the auto gen cat
   *          name:
   *            type: string
   *            description: the auto gen cat title
   *          age:
   *            type: number
   *            description: the auto gen cat age
   *        example:
   *          id: 0
   *          name: cat
   *          age: 10
   */
  router.get("/cat", findAll);
  router.get("/cat/:id", findById);
  router.post("/cat", create);
  router.post("/cat-many", createMany);
  router.delete("/cat/:id", deleteById);
  router.delete("/cat-many", deleteMany);
  router.put("/cat/:id", update);
  return app.use("/", router);
};

export default catRoute;

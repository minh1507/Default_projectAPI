import { Request, Response } from "express";
import * as service from "../services/user.service.ts";

export const findAll = async (req: Request, res: Response) => {
  let result = await service.findAll();
  return res.status(200).json(result);
};

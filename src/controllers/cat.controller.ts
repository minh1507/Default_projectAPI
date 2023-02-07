import { Request, Response } from "express";
import * as service from "../services/cat.service.ts";
import requestValidator from "../validator/request.validator.ts";
import message from "../common/message.common.ts";

export const findAll = async (req: Request, res: Response) => {
  let data = await service.findAll();
  return res.status(200).json(data);
};

export const findById = async (req: Request, res: Response) => {
  let id = req.params["id"];
  let data = await service.findById(id);
  return res.status(200).json(data);
};

export const create = async (req: Request, res: Response) => {
  return res.status(200).json({ id: 1, cat: "meow" });
};

export const createMany = async (req: Request, res: Response) => {
  return res.status(200).json({ id: 1, cat: "meow" });
};

export const deleteById = async (req: Request, res: Response) => {
  return res.status(200).json({ id: 1, cat: "meow" });
};

export const deleteMany = async (req: Request, res: Response) => {
  return res.status(200).json({ id: 1, cat: "meow" });
};

export const update = async (req: Request, res: Response) => {
  return res.status(200).json({ id: 1, cat: "meow" });
};

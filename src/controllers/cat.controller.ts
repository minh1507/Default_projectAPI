import { Request, Response } from "express";
import * as service from "../services/cat.service.ts";
import * as validator from "../validators/cat.validator.ts";
import message from "../common/message/message.common.ts";

export const findAll = async (req: Request, res: Response) => {
  let result = await service.findAll();
  return res.status(200).json(result);
};

export const findById = async (req: Request, res: Response) => {
  let id = req.params["id"];
  let result = await service.findById(id);
  return res.status(200).json(result);
};

export const create = async (req: Request, res: Response) => {
  let data = req.body;
  if (validator.create(data)) {
    let result = await service.create(data);
    return res.status(200).json(result);
  }
  return res.status(400).json({ mes: message.INVALID_BODY_VALUE });
};

export const createMany = async (req: Request, res: Response) => {
  let data = req.body;
  if (validator.createMany(data)) {
    let result = await service.createMany(data);
    return res.status(200).json(result);
  }
  return res.status(400).json({ mes: message.INVALID_BODY_VALUE });
};

export const deleteById = async (req: Request, res: Response) => {
  let id = req.params["id"];
  let result = await service.deleteById(id);
  return res.status(200).json(result);
};

export const deleteMany = async (req: Request, res: Response) => {
  let data = req.body;
  console.log(data);
  if (validator.deleteMany(data)) {
    let result = await service.deleteMany(data);
    return res.status(200).json(result);
  }
  return res.status(400).json({ mes: message.INVALID_BODY_VALUE });
};

export const update = async (req: Request, res: Response) => {
  let id = req.params.id;
  let data = req.body;
  if (validator.create(data)) {
    let result = await service.update(id, data);
    return res.status(200).json(result);
  }
  return res.status(400).json({ mes: message.INVALID_BODY_VALUE });
};

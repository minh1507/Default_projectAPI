import { catWithId,cat } from './../models/cat.interface';
import { Request, Response } from "express";
import * as service from "../services/cat.service.ts";
import * as validator from "../validators/cat.validator.ts";
import message from "../common/message/message.common.ts";

export const findAll = async (req: Request, res: Response) => {
  let result = await service.findAll();
  return res.status(200).json({
    data: result,
    StatusCode: 200,
    Success: true
  });
};


export const file = async (req: any, res: Response) => {
  console.log(req.files)
  // let result = await service.findAll();
  return res.status(200).json({
    Success: true
  });
};


export const findById = async (req: Request, res: Response) => {
  let id = req.params["id"];
  let result:catWithId = await service.findById(id);
  return res.status(200).json(result);
};

export const create = async (req: Request, res: Response) => {
  let data:cat = req.body;
  
  if (validator.create(data)) {
    let result = await service.create(data);
    return res.status(200).json(result);
  }
  return res.status(400).json({ mes: message.INVALID_BODY_VALUE });
};

export const deleteById = async (req: Request, res: Response) => {
  let id = req.params["id"];
  let result = await service.deleteById(id);
  return res.status(200).json(result);
};


export const update = async (req: Request, res: Response) => {
  let id = req.params.id;
  let data:cat = req.body;
  if (validator.create(data)) {
    let result = await service.update(id, data);
    return res.status(200).json(result);
  }
  return res.status(400).json({ mes: message.INVALID_BODY_VALUE });
};

import { Request, Response } from "express";
import message from "../common/message/message.common.ts";
import { user } from "../models/user.interface";
import * as validator from "../validators/user.validator.ts";
import * as service from "../services/user.service.ts";

export const register = async (req: Request, res: Response) => {
  let data:user = req.body;
  if (validator.formData(data) && validator.password(data) && validator.username(data)) {
    let result = await service.register(data)
    return res.status(200).json(result);
  }
  return res.status(400).json({ mes: message.INVALID_BODY_VALUE });
};

export const login = async (req: Request, res: Response) => {
  return res.status(200).json({ mes: "success" });
};

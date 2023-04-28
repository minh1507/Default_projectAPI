import { NextFunction } from "express";

export const blockCors = (req: any, res: any, next: NextFunction) => {
  next()
};

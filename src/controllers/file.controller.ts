import { Request, Response } from "express";

export const file = async (req: any, res: Response) => {
  console.log(req.files);
  // let result = await service.findAll();
  console.log(req.session.page_views);
  return res.status(200).json({
    Success: true,
  });
};

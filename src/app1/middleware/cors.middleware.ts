import { NextFunction } from "express";

export const blockCors = (req: any, res: any, next: NextFunction) => {
  const corsWhitelist = ["btaf"];
  if (corsWhitelist.indexOf(req.headers.passgate) != -1) {
    res.setHeader("Access-Control-Allow-Origin", req.headers.passgate);
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "Content-Type",
      "Authorization"
    );
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
  } else {
    return res.status(200).json({error: "Server block your connection"});
  }
};

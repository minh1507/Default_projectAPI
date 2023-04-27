import express, { Request, Response } from "express";
import axios from "axios";

import registry from "../common/json/registry.json" assert { type: "json" };

import { authGuard } from "../common/app/app.common.ts";

let router = express.Router();

export const auth = async (req: Request, res: Response) => {
  let apiName = req.params.apiName;
  let body = req.body;
  let check = "";

  if (apiName in authGuard) {
    check = "authenapp1";
  }

  if (check.length > 0) {
    let result = { data: 1 };
    result = await axios.post(
      registry.services[check as keyof typeof registry.services].url + apiName,
      { ...body },
      {
        headers: {
          passgate: registry.passgate,
        },
      }
    );
    return res.status(200).json(result.data);
  } else {
    return res.status(200).json({ error: "Api not found" });
  }
};

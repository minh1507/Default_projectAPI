import express, { Request, Response } from "express";
import axios from "axios";

import registry from "../common/json/registry.json" assert { type: "json" };
import { app1 } from "../common/app/app.common.ts";

export const findAll = async (req: Request, res: Response) => {
  try {
    let apiName = req.params.apiName;
    let auth = req.headers["authorization"];
    let check = "";

    if (apiName in app1) {
      check = "app1";
    }
    if (check.length > 0) {
      let result = await axios.get(
        registry.services[check as keyof typeof registry.services].url +
          apiName,
        {
          headers: {
            passgate: registry.passgate,
            authorization: auth ? auth : undefined,
          },
        }
      );

      return res.status(200).json(result.data);
    } else {
      return res.status(200).json({ error: "Api not found" });
    }
  } catch (error) {
    return res.status(203).json("Api not accepted");
  }
};

export const findById = async (req: Request, res: Response) => {
  try {
    let apiName = req.params.apiName;
    let auth = req.headers["authorization"];
    let check = "";

    if (apiName in app1) {
      check = "app1";
    }
    if (check.length > 0) {
      let result = await axios.get(
        registry.services[check as keyof typeof registry.services].url +
          apiName +
          `/${req.params.path && req.params.path}`,
        {
          headers: {
            passgate: registry.passgate,
            authorization: auth ? auth : undefined,
          },
        }
      );

      return res.status(200).json(result.data);
    } else {
      return res.status(200).json({ error: "Api not found" });
    }
  } catch (error) {
    console.log(error);
    return res.status(203).json("Api not accepted");
  }
};

export const deleteById = async (req: Request, res: Response) => {
  try {
    let apiName = req.params.apiName;
    let auth = req.headers["authorization"];
    let check = "";

    if (apiName in app1) {
      check = "app1";
    }
    if (check.length > 0) {
      let result = await axios.delete(
        registry.services[check as keyof typeof registry.services].url +
          apiName +
          `/${req.params.id && req.params.id}`,
        {
          headers: {
            passgate: registry.passgate,
            authorization: auth ? auth : undefined,
          },
        }
      );

      return res.status(200).json(result.data);
    }
  } catch (error) {
    return res.status(203).json("Api not accepted");
  }
};

export const post = async (req: Request, res: Response) => {
  try {
    let apiName = req.params.apiName;
    let body = req.body;
    let auth = req.headers["authorization"];
    let check = "";

    if (apiName in app1) {
      check = "app1";
    }

    if (check.length > 0) {
      let result = { data: 1 };
      result = await axios.post(
        registry.services[check as keyof typeof registry.services].url +
          apiName,
        { ...body },
        {
          headers: {
            passgate: registry.passgate,
            authorization: auth ? auth : undefined,
          },
        }
      );
      return res.status(200).json(result.data);
    } else {
      return res.status(200).json({ error: "Api not found" });
    }
  } catch (error) {
    return res.status(203).json("Api not accepted");
  }
};

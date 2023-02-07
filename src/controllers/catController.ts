import { Request, Response } from "express";
import axios from "axios";
import https from "https";

export const findAll = async (req: Request, res: Response) => {
  return res.status(200).json({ cat: "meow" });
};

export const findById = async (req: Request, res: Response) => {
  return res.status(200).json({ id: 1, cat: "meow" });
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

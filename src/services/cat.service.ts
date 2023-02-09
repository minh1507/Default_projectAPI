import { cat,catWithId } from "../models/cat.interface";
import { Cat } from "../entities/cat.entities.ts";

export const findAll = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const data:catWithId = await Cat.findAll();
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};

export const findById = async (id: string) => {
  return new Promise(async (resolve, reject) => {
    try {
      const data:catWithId = await Cat.findOne({where: {id:id}})
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};

export const create = async (data: cat) => {
  return new Promise(async (resolve, reject) => {
    try {
      await Cat.create({...data})
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};

export const deleteById= async (id: string) => {
  return new Promise(async (resolve, reject) => {
    try {
      const record = await Cat.findByPk(id)
      if(record)
      {
        await Cat.destroy({where: {id}})
        resolve({mes: "Success"});
      }
      resolve({mes: "Failed"});
    } catch (error) {
      reject(error);
    }
  });
};

export const update = async (id: number, data: cat) => {
  return new Promise(async (resolve, reject) => {
    try {
      await Cat.update(data, {where: {id: id}})
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};
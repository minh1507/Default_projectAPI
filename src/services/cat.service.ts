import { cat } from "../models/cat.interface";
// import {Sequelize} from "../entities/index.js"
import { Cat } from "../entities/cat.entities.ts";
export const findAll = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await Cat.findAll();
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};

export const findById = async (id: string) => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = {
        id: id,
        cat: "meow",
      };
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};

export const create = async (data: cat) => {
  return new Promise(async (resolve, reject) => {
    try {
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};


export const createMany = async (data: cat) => {
  return new Promise(async (resolve, reject) => {
    try {
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};

export const deleteById= async (id: string) => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = {
        id: id,
        cat: "meow",
      };
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};

export const deleteMany = async (data: cat) => {
  return new Promise(async (resolve, reject) => {
    try {
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};

export const update = async (id: number, data: cat) => {
  return new Promise(async (resolve, reject) => {
    try {
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};
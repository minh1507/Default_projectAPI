import { user, userWithId } from "../models/user.interface";
import { genSaltSync, hashSync, compareSync } from "bcrypt-ts";
import { User } from "../entities/user.entities.ts";
import message from "../common/message/message.common.ts";
import jwt from "jsonwebtoken"

export const register = async (data: user) => {
  return new Promise(async (resolve, reject) => {
    try {
      const salt = genSaltSync(10);
      const hash = hashSync(data.password, salt);
      const record = await User.findOne({ where: { username: data.username } });

      if (!record) {
        await User.create({
          username: data.username,
          password: hash,
        });
        resolve({ mes: message.SUCCESS });
      }

      resolve({ mes: message.DUBLICATE_RECORD_ACCOUNT });
    } catch (error) {
      reject(error);
    }
  });
};

export const login = async (data: user) => {
  return new Promise(async (resolve, reject) => {
    try {
      const record: userWithId = await User.findOne({
        where: { username: data.username },
      });

      if (record) {
        var newData:any = {
          username: record.username,
        }
        let check = compareSync(data.password, record.password);
        if (check) {
          var token = jwt.sign(newData, process.env.PRIVATE_TOKEN);
          newData.token = token
          resolve({data:newData, errCode: 0 });
        }
        resolve({ errCode: 1 });
      }

      resolve({ mes: message.ACCOUNT_NOT_FOUND });
    } catch (error) {
      reject(error);
    }
  });
};

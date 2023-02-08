import { user } from "../models/user.interface";
import { genSaltSync, hashSync } from "bcrypt-ts";
import { User } from "../entities/user.entities.ts";
import message from "../common/message/message.common.ts";

export const resgister = async (data: user) => {
    return new Promise(async (resolve, reject) => {
      try {
        const salt = genSaltSync(10);
        const hash = hashSync(data.password, salt);
        const record = await User.findOne({where:{username: data.username}})

        if(record){
            await User.create({
                username: data.username,
                password: hash
            })
            resolve(data)
        }
        resolve({mes: message.DUBLICATE_RECORD_ACCOUNT})
      } catch (error) {
        reject(error);
      }
    });
  };
import { User } from "../entities/user.entities.ts";
import { Role } from "../entities/role.entities.ts";
import { Sequelize } from "sequelize-typescript";

export const findAll = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const data: any = await User.findAll({
        include: [
          {
            model: Role,
            attributes: [],
            required: true
          },
        ],
        attributes: ["id", "username", "password", [Sequelize.col("role.name"), "role"], "accessToken", "refreshToken"],
        // plain: true,
        raw: true
      });
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};

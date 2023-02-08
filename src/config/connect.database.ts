import { Sequelize } from "sequelize-typescript";
import { Cat } from "../entities/cat.entities.ts";

export const sequelize = new Sequelize("Cat", "root", undefined, {
  host: "localhost",
  dialect: "mysql",
  username: "root",
  logging: false,
  models: [Cat]
});

export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};


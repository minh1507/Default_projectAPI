require("dotenv").config();

const host = process.env.DB_HOST;
const username = process.env.DB_USER;
const database = process.env.DB_NAME;

module.exports = {
  development: {
    username,
    database,
    host,
    port: 3306,
    dialect: "mysql",
    query: {
      raw: true,
    },
    timezone: "+07:00",
  },
};

import { Sequelize } from "sequelize";
import { Dialect } from "sequelize/types/sequelize";

export const sequelize = new Sequelize(
  process.env.DB_NAME || "ada-db",
  process.env.DB_USER || "root",
  process.env.DB_ROOT_PASSWORD || "ada-teste",
  {
    host: process.env.DB_HOST || "db",
    dialect: (process.env.DB_TYPE as Dialect) || "mariadb",
    logging: false,
  }
);

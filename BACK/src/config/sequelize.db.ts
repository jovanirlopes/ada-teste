import { Sequelize } from "sequelize";
import { Dialect } from "sequelize/types/sequelize";

export const sequelize = new Sequelize(
  process.env.DB_NAME || "",
  process.env.DB_USER || "",
  process.env.DB_ROOT_PASSWORD || "",
  {
    host: process.env.DB_HOST,
    dialect: (process.env.DB_TYPE as Dialect) || undefined,
  }
);

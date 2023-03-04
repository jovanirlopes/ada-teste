import { sequelize } from "../config/sequelize.db";
import { DataTypes } from "sequelize";

export const Card = sequelize.define("cards", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  titulo: DataTypes.STRING,
  conteudo: DataTypes.STRING,
  lista: DataTypes.STRING,
});

(async () => {
  await sequelize.sync({ force: true });
  // Code here
})();

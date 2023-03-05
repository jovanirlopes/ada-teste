import { sequelize } from "../config/sequelize.db";
import { DataTypes, Model, Optional } from "sequelize";

export interface CardInterface {
  id: number;
  titulo: string;
  conteudo: string;
  lista: string;
}

export type CardCreationAttributes = Optional<CardInterface, "id">;

export class Card extends Model<CardInterface | CardCreationAttributes> {
  declare id: number;
  declare titulo: string;
  declare conteudo: string;
  declare lista: string;
}

Card.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    titulo: DataTypes.STRING,
    conteudo: DataTypes.STRING,
    lista: DataTypes.STRING,
  },
  { sequelize }
);

(async () => {
  await sequelize.sync({ force: true });
  // Code here
})();

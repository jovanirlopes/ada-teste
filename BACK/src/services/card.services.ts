import { CardCreationAttributes, CardInterface } from "./../models/card.model";
import { Card } from "../models/card.model";

export const listAllCards = async () => {
  const cards: CardInterface[] = await Card.findAll();
  return cards;
};

export const creteCard = async (reqCard: CardCreationAttributes) => {
  const card = new Card(reqCard);

  if (!checkEmpityFieldsInCard(card)) return false;

  await card.save();
  return card;
};

export const deleteCard = async (id: number) => {
  const card = await Card.findByPk(id);
  if (!card) return null;

  await card.destroy();
  return card;
};

export const updateCard = async (id: number, cardBody: CardInterface) => {
  if (id !== cardBody.id) return false;

  const card = await Card.findByPk(id);

  if (!card) return null;

  await card.update(cardBody);

  return card;
};


export const checkEmpityFieldsInCard = (card: CardCreationAttributes) => {
  if (!card.conteudo || !card.titulo || !card.lista) return false;
  return true;
};
import {
  checkCardExist,
  checkEmpityFieldsInCard,
  creteCard,
  deleteCard,
  updateCard,
} from "./../services/card.services";
import { NextFunction, Request, Response } from "express";
import { listAllCards } from "../services/card.services";

export const cardListAll = async (req: Request, res: Response) => {
  try {
    const cards = await listAllCards();
    return res.json(cards).end();
  } catch (error) {
    return res.status(400).end();
  }
};

export const cardCreate = async (req: Request, res: Response) => {
  const { titulo, conteudo, lista } = req.body;

  try {
    const card = await creteCard({ titulo, conteudo, lista });

    if (card) return res.status(201).json(card).end();

    throw new Error("Invalid card");
  } catch (error) {
    return res.status(400).end();
  }
};

export const cardDelete = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    await deleteCard(id);

    const cards = await listAllCards();
    return res.json(cards).end();
  } catch (error) {
    return res.status(400).end();
  }
};

export const cardUpdate = async (req: Request, res: Response) => {
  const paramId = parseInt(req.params.id);
  const { id, titulo, conteudo, lista } = req.body;
  try {
    const card = await updateCard(paramId, { id, titulo, conteudo, lista });

    if (!card) return false;

    return res.json(card).end();
  } catch (err) {
    return res.status(400).end();
  }
};
export const cardValidateId = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const paramId = parseInt(req.params.id);
  const bodyId = parseInt(req.body.id);

  if (paramId !== bodyId && req.method === "PUT") return res.status(400).end();

  next();
};

export const cardCheckExist = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const paramId = parseInt(req.params.id);
  const card = await checkCardExist(paramId);
  if (!card) return res.status(404).end();
  res.locals = card;
  next();
};

export const cardValidateFields = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { titulo, conteudo, lista } = req.body;
  const isValid = checkEmpityFieldsInCard({ titulo, conteudo, lista });

  if (!isValid && (req.method === "POST" || req.method === "PUT"))
    return res.status(400).end();
  next();
};

export const cardLogUpdateOrDelete = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const dateTime = new Date().toLocaleString("pt-br");
  let action = "";

  if (req.method === "PUT") action = "Alterar";
  if (req.method === "DELETE") action = "Remover";

  console.info(
    `${dateTime} - Card ${res.locals.id} - ${res.locals.titulo} - ${action}`
  );
  next();
};

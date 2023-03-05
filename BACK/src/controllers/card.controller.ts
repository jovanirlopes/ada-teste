import { creteCard, deleteCard, updateCard } from "./../services/card.services";
import { Request, Response } from "express";
import { Card } from "../models/card.model";
import { listAllCards } from "../services/card.services";

export class CardsController {
  async listAll(req: Request, res: Response) {
    try {
      const cards = await listAllCards();
      res.json(cards).end();
    } catch (error) {
      res.status(400).end();
    }
  }

  async create(req: Request, res: Response) {
    const { titulo, conteudo, lista } = req.body;

    try {
      const card = await creteCard({ titulo, conteudo, lista });

      if (card) res.status(201).json(card).end();

      throw new Error("Invalid card");
    } catch (error) {
      res.status(400).end();
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const card = await deleteCard(id);
      if (card === null) res.status(404).end();

      const cards = await listAllCards();
      res.json(cards).end();
    } catch (error) {
      res.status(400).end();
    }
  }

  async update(req: Request, res: Response) {
    const paramId = parseInt(req.params.id);
    const { id, titulo, conteudo, lista } = req.body;
    try {
      const card = await updateCard(paramId, { id, titulo, conteudo, lista });

      if (card === false) throw new Error("Empity field");

      if (!card) res.status(404).end();

      res.json(card).end();
    } catch (err) {
      res.status(400).end();
    }
  }
}

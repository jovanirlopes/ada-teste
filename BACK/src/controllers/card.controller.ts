import { Request, Response } from "express";
import { Card } from "../models/card.model";

export class CardsController {
  async listAll(req: Request, res: Response) {
    const cards = await Card.findAll();
    res.json(cards);
  }

  async create(req: Request, res: Response) {
    if (!req.body.titulo || !req.body.conteudo) {
      res.status(400);
      return res.end();
    }
    try {
      const card = await Card.create(req.body);
      res.status(201).json(card);
      res.end();
    } catch (error) {
      res.status(400);
    }
  }

  async delete(req: Request, res: Response) {
    const card = await Card.findByPk(req.params.id);
    if (!card) {
      res.status(404);
      return res.end();
    }
    await card.destroy();
    const cards = await Card.findAll();
    res.json(cards);
  }

  async update(req: Request, res: Response) {
    const paramId = parseInt(req.params.id);
    try {
      if (!req.body.titulo || !req.body.conteudo)
        throw new Error("Empity fields is not permited");
      if (req.body.id !== paramId)
        throw new Error("Request id dosent match with card id");

      const card = await Card.findByPk(req.params.id);

      if (!card) {
        res.status(404);
        return res.end();
      }
      await card.update(req.body);
      res.json(card);
    } catch (error) {
      res.status(400);
      return res.end();
    }
  }
}

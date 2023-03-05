import {
  cardCreate,
  cardDelete,
  cardListAll,
  cardUpdate,
} from "./../controllers/card.controller";
import { Router } from "express";

const cardsRouter = Router();

cardsRouter.get("/cards", cardListAll);
cardsRouter.post("/cards", cardCreate);
cardsRouter.delete("/cards/:id", cardDelete);
cardsRouter.put("/cards/:id", cardUpdate);

export { cardsRouter };

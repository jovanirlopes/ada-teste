import { CardsController } from "./../controllers/card.controller";
import { Router } from "express";

const cardsRouter = Router();
const cardsController = new CardsController();

cardsRouter.get("/cards", cardsController.listAll);
cardsRouter.post("/cards", cardsController.create);
cardsRouter.delete("/cards/:id", cardsController.delete);
cardsRouter.put("/cards/:id", cardsController.update);

export { cardsRouter };

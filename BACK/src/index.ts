require("dotenv").config();
import express, { NextFunction, Request, Response } from "express";
import { authRouter } from "./routes/auth.routes";
import cors from "cors";
import bodyParser = require("body-parser");
import { cardsRouter } from "./routes/cards.routes";

import {
  cardCheckExist,
  cardLogUpdateOrDelete,
  cardValidateFields,
  cardValidateId,
} from "./controllers/card.controller";
import { tokenValidation } from "./controllers/auth.controller";

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(authRouter);
app.use(tokenValidation);

app.use("/cards", cardValidateFields);
app.use("/cards/:id", [cardCheckExist, cardValidateId, cardLogUpdateOrDelete]);

app.use(cardsRouter);

app.listen(
  process.env.PORT || 5000,
  () => `Backend running on port ${process.env.PORT || 5000}`
);

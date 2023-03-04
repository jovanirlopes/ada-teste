require("dotenv").config();
import { AuthController } from "./controllers/auth.controller";
import express, { NextFunction, Request, Response } from "express";
import authRouter from "./routes/auth.routes";
import cors from "cors";
import bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(authRouter);
app.use(new AuthController().tokenValidation);

app.listen(process.env.PORT, () => "Backend running on port 5000");

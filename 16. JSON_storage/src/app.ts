import express, { NextFunction, Request, Response } from "express";

import { routerJsonBase } from "./routes";
import { INewError } from "type";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/", routerJsonBase);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err: INewError, req: Request, res: Response, next: NextFunction) => {
  console.log(req.params);
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

export default app;

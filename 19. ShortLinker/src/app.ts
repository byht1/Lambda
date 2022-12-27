import express, { NextFunction, Request, Response } from "express";

import { routerNewShortLink, routerShortLink } from "./routes";
import { INewError } from "type";
import dotenv from "dotenv";
import "./dbConnect";

dotenv.config();

const app = express();
const PORT = process.env.PORT ?? 5000;

export const defaultUrl = `http://localhost:${PORT}`;

app.use(express.json());

app.use("/", routerShortLink);
app.use("/api", routerNewShortLink);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err: INewError, req: Request, res: Response, next: NextFunction) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

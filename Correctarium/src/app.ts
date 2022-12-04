import express, { NextFunction, Request, Response } from "express";

import { correctariumRouter } from "./routes";
import { INewError } from "type";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT ?? 5000;

const app = express();

app.use(express.json());

app.use("/api", correctariumRouter);

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

export default app;

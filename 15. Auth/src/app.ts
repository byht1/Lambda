import express, { NextFunction, Request, Response } from "express";

import { routerUser } from "./routes";
import { INewError } from "type";
import dotenv from "dotenv";

dotenv.config();

const app = express();
// const port = process.env.PORT ?? 5000;

app.use(express.json());

app.use("/", routerUser);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err: INewError, req: Request, res: Response, next: NextFunction) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

export default app;

// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });

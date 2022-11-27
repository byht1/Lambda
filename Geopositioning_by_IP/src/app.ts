import express from "express";
import dotenv from "dotenv";
import { routerIP } from "./routes";

dotenv.config();

const app = express();
const port = process.env.PORT ?? 5000;

app.use(express.json());

app.use("/", routerIP);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

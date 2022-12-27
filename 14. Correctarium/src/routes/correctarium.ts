import { correctarium } from "../controllers/correctarium";
import express from "express";

import { ctrlWrapper } from "../helpers/ctrlWrapper";

const router = express.Router();

router.post("/", ctrlWrapper(correctarium));

export const correctariumRouter = router;

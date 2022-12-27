import express from "express";

import { ctrlWrapper } from "../helpers/ctrlWrapper";
import { determineIP } from "../controllers/determineIP";
import { userIP } from "middleware";

const router = express.Router();

router.get("/", userIP, ctrlWrapper(determineIP));

export const routerIP = router;

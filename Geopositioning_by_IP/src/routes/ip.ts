import express from "express";
import { ctrlWrapper } from "./../helpers/ctrlWrapper";
import { determineIP } from "./../controllers/determineIP";

const router = express.Router();

router.get("/", ctrlWrapper(determineIP));

export const routerIP = router;

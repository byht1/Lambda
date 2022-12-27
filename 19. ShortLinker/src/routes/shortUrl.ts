import { redirect } from "controllers/url";
import express from "express";

import { ctrlWrapper } from "../helpers/ctrlWrapper";

const router = express.Router();

router.get("/:name", ctrlWrapper(redirect));

export const routerShortLink = router;

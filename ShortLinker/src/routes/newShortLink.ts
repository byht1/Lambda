import { shortLink } from "controllers/url";
import express from "express";

import { ctrlWrapper } from "../helpers/ctrlWrapper";

const router = express.Router();

router.post("/", ctrlWrapper(shortLink));

export const routerNewShortLink = router;

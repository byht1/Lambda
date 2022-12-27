import express from "express";

import { ctrlWrapper } from "../helpers/ctrlWrapper";
import { jsonBase, newJsonBase } from "controllers";

const router = express.Router();

router.post("/:nameServer", ctrlWrapper(newJsonBase));
router.get("/:nameServer", ctrlWrapper(jsonBase));

export const routerJsonBase = router;

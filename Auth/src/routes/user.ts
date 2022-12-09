import express from "express";

import { login, me, refresh, singUp } from "controllers/user";
import { ctrlWrapper } from "helpers/ctrlWrapper";
import { auth } from "middleware";

const router = express.Router();

router.post("/sign_up", ctrlWrapper(singUp));
router.post("/login", ctrlWrapper(login));
router.get("/:me", auth, ctrlWrapper(me));
router.post("/refresh", auth, ctrlWrapper(refresh));

export const routerUser = router;

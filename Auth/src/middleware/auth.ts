import jwt from "jsonwebtoken";

import { createError } from "helpers/createError";
import { TRouterFn } from "type";
import { userConnect } from "model/user";
import { ObjectId } from "mongodb";

const { SECRET_KEY = "Test" } = process.env;

export const auth: TRouterFn = async (req, _, next) => {
  const { authorization = "" } = req.headers;

  if (!next) return;

  const [bearer, token] = authorization.split(" ");
  if (bearer !== "Bearer" && token) {
    next(createError(401, "Not authorized"));
  }

  try {
    const { id }: any = jwt.verify(token, SECRET_KEY);

    const Users = await userConnect();
    const user = await Users.findOne({ _id: new ObjectId(id) });

    if (!user || !user.token) {
      throw createError(401, "Not authorized");
    }
    req.user = user;

    next();
  } catch {
    next(createError(401, "Not authorized"));
  }
};

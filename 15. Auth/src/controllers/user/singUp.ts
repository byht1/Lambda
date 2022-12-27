import bcrypt from "bcryptjs";

import { TRouterFn } from "type";
import { userDto } from "dto";
import { createError } from "helpers/createError";
import { userConnect } from "model/user";

export const singUp: TRouterFn = async (req, res) => {
  const { email, password } = req.body;
  const { error } = userDto.validate(req.body);

  if (error) {
    throw createError(400, "error in the disability");
  }

  const Users = await userConnect();

  const isNewUser = await Users.findOne({ email });

  if (isNewUser) {
    throw createError(409, "Email in use");
  }

  const hashPassword = await bcrypt.hash(password, 10);

  const user = {
    email,
    password: hashPassword,
    token: null,
  };

  await Users.insertOne({ ...user });

  res.status(201).json(user);
};

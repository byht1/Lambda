import bcrypt from "bcryptjs";

import { createError } from "helpers/createError";
import { userDto } from "dto/userDto";
import { TRouterFn } from "type";
import { userConnect } from "model/user";
import { newToken } from "./token";

export const login: TRouterFn = async (req, res) => {
  const { email, password } = req.query;

  const { error } = userDto.validate({ email, password });
  if (error) throw createError(400, "error in the disability");

  const Users = await userConnect();
  const user = await Users.findOne({ email });
  if (!user) throw createError(401, "user does not exist");

  const pas: string | null = password ? password.toString() : null;
  if (!pas) throw createError(401, "password does not exist");

  const comparePassword = await bcrypt.compare(pas, user.password);
  if (!comparePassword) throw createError(401, "Email or password is wrong");

  const payload = {
    id: user._id,
  };

  const token = newToken(payload);

  await Users.findOneAndUpdate({ _id: user._id }, { $set: { token } });

  res.json(token);
};

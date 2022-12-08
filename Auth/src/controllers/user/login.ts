import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import { createError } from "helpers/createError";
import { userDto } from "dto/userDto";
import { TRouterFn } from "type";
import { userConnect } from "model/user";

const { SECRET_KEY = "Test" } = process.env;

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
  const time = Math.random() * (60 - 30) + 30;

  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: `${time}h` });
  //   const token = jwt.sign(payload, SECRET_KEY, { expiresIn: `${time}s` });

  await Users.findOneAndUpdate({ _id: user._id }, { $set: { token } });

  res.json(token);
};

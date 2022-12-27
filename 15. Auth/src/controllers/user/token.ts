import jwt from "jsonwebtoken";
import { ObjectId } from "mongodb";

const { SECRET_KEY = "Test" } = process.env;

export const newToken = (payload: { id: ObjectId }): string => {
  const time = Math.random() * (60 - 30) + 30;

  //   const token = jwt.sign(payload, SECRET_KEY, { expiresIn: `${time}h` });
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: `${time}s` });

  return token;
};

import { newToken } from "./token";
import { userConnect } from "model/user";
import { TRouterFn } from "type";

export const refresh: TRouterFn = async (req, res) => {
  const { _id } = req.user;

  const Users = await userConnect();

  const payload = {
    id: _id,
  };

  const token = newToken(payload);
  await Users.findOneAndUpdate({ _id }, { $set: { token } });

  res.json(token);
};

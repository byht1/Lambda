import { TRouterFn } from "type";

export const me: TRouterFn = async (req, res) => {
  const { me } = req.params;
  const request_num = me.split("me")[1];

  if (!me.includes("me") || !request_num) {
    throw res.status(404).json({ message: "Not found" });
  }

  const { email, password } = req.user;

  res.status(201).json({ request_num, data: { email, password } });
};

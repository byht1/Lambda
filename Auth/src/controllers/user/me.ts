import { TRouterFn } from "type";

export const me: TRouterFn = (req, res) => {
  const { me } = req.params;
  const request_num = me.split("me")[1];
  console.log("🚀  request_num", request_num);
};

import { TRouterFn } from "type";

export const determineIP: TRouterFn = async (req, res) => {
  const ip =
    req.header("x-forwarded-for") || req.connection.remoteAddress || req.ip;

  if (Array.isArray(ip)) return;

  const arrIp = ip?.split(".");
  console.log("🚀 ~ arrIp", arrIp);

  res.send("Express + TypeScript Server");
};

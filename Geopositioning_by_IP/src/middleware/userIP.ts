import { TCtrlWrapperFunc } from "type";

export const userIP: TCtrlWrapperFunc = (req, _, next) => {
  const ip =
    req.header("x-forwarded-for") || req.connection.remoteAddress || req.ip;

  if (Array.isArray(ip)) return;

  const arrIp = ip?.split(".");
  let decimal: number = 0;

  for (let i = 3; i >= 0; i -= 1) {
    decimal += Number(arrIp[i]) << (i * 8);
  }

  req.userIP = { decimal, ip };

  next();
};

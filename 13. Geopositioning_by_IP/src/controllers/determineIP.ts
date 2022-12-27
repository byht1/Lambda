import { dataIP } from "data";
import { TDataDto, TRouterFn } from "type";

export const determineIP: TRouterFn = async (req, res) => {
  const start = Date.now();
  const { decimal, ip } = req.userIP!;
  const { data } = await dataIP;

  let location: TDataDto | null = null;

  for (let i = 0; i < data.length; i += 1) {
    const { proxy1, proxy2 } = data[i];
    if (Number(proxy1) <= decimal! && Number(proxy2) >= decimal!) {
      location = data[i];
      break;
    }
  }

  res.status(200).json({
    country: location?.country,
    IP: ip,
    time: `${(Date.now() - start) / 1000} ms`,
  });
};

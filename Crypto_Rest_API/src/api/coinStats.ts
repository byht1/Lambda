import axios from "axios";
import { nameCrypto } from "helpers";
import { ICoinStats } from "type";

const URL = "https://api.coinstats.app/public/v1/coins?skip=0";

export const coinStats = async () => {
  try {
    const {
      data: { coins },
    } = await axios.get<ICoinStats>(URL);

    const nameDate = await nameCrypto;

    const prise = coins.filter((x) => {
      const name = nameDate.get(x.symbol);
      if (!name) return;

      const step = x.priceChange1d / 24;

      return {
        name,
        prise: x.price,
        symbol: x.symbol,
        "1h": x.priceChange1h,
        "4h": step * 4,
        "24h": x.priceChange1d,
        date: Date.now(),
      };
    });

    return prise;
  } catch (error) {
    throw error;
  }
};

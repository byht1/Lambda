import axios from "axios";
import { ICoinPaprika } from "type";

const URL = "https://api.coinpaprika.com/v1/tickers";

export const coinPaprika = async () => {
  try {
    const { data } = await axios.get<ICoinPaprika[]>(URL, {
      headers: { "Accept-Encoding": "gzip,deflate,compress" },
    });

    const prise = data.map((x) => {
      const step = x.quotes.USD.percent_change_24h / 24;
      return {
        name: x.name,
        symbol: x.symbol,
        prise: x.quotes.USD.price,
        "1h": x.quotes.USD.percent_change_1h,
        "4h": Number((step * 4).toFixed(2)),
        "24h": x.quotes.USD.percent_change_24h,
        date: Date.now(),
      };
    });

    return prise;
  } catch (error) {
    throw error;
  }
};

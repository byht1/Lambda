import { coinbase } from "./coinbase";
import { coinmarketcap } from "./coinmarketcap";
import { coinPaprika } from "./coinPaprika";
import { coinStats } from "./coinStats";
import { kucoin } from "./kucoin";

// export * from "./coinPaprika";
// export * from "./coinStats";
// export * from "./coinbase";
// export * from "./coinmarketcap";
// export * from "./kucoin";

export const currencyCryptoData = async () => {
  const data = await Promise.all([
    coinPaprika(),
    coinStats(),
    coinbase(),
    coinmarketcap(),
    kucoin(),
  ]).then((res) => ({
    coinPaprika: res[0],
    coinStats: res[1],
    coinbase: res[2],
    CoinMarketCap: res[3],
    kucoin: res[4],
  }));

  return data;
};

import { nameCrypto } from "./nameCrypto";

export const dataCorrection = async (dataServer: any) => {
  const nameDate = await nameCrypto;
  const date = Date.now();
  const data = [];

  const key = Object.keys(dataServer);
  const values = Object.values(dataServer);

  for (let i = 0; i < key.length; i += 1) {
    const k = key[i];

    const name = nameDate.get(k);

    if (!name) continue;

    const element = {
      name,
      symbol: k,
      prise: 1 / Number(values[i]),
      date,
    };

    data.push(element);
  }

  return data;
};

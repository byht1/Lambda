export const existInAtLeastTen = (data: string[][]) => {
  const map = new Map<string, number>();
  let number = 0;

  for (let i = 0; i < data.length; i += 1) {
    for (let j = 0; j < data[i].length; j += 1) {
      const name = data[i][j];
      const isName = map.get(name);

      if (!isName) {
        map.set(name, 1);
      }

      if (isName) {
        const value = map.get(name);
        map.delete(name);
        map.set(name, Number(value) + 1);
      }
    }
  }

  for (const value of map.values()) {
    if (Number(value) >= 10) number += 1;
  }

  console.log(
    "🚀 ~ Словосочетаний, которые есть, как минимум, в десяти файлах:",
    number
  );
};

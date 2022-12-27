const uniqueFile = (arrA: string[], arrB: string[]) => {
  const arrASet = new Set(arrA);
  const unique = [];

  for (let i = 0; i < arrB.length; i += 1) {
    if (arrASet.has(arrB[i])) {
      unique.push(arrB[i]);
    }
  }

  return unique;
};

export const existInAllFiles = (data: string[][]) => {
  let res = uniqueFile(data[0], data[1]);

  for (let i = 2; i < data.length; i += 1) {
    res = uniqueFile(res, data[i]);
  }

  const set = new Set(res);
  console.log(
    "🚀 ~ Словосочетаний, которые есть во всех 20 файлах: ",
    set.size
  );
};

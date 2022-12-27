export const uniqueValues = (data: string[][]) => {
  const all = data.join(",").split(",");
  const set = new Set(all);

  console.log("🚀 ~ Уникальных словосочетаний: ", set.size);
  return;
};

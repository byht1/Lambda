const uniqueValues = (data, log) => {
  const all = data.join(",").split(",");
  const set = new Set(all);

  if (!log) {
    console.log("🚀 ~ Уникальных словосочетаний: ", set.size);
    return;
  }

  return set;
};

module.exports = uniqueValues;

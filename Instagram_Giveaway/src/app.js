const fs = require("fs/promises");
const path = require("path");

const {
  existInAllFiles,
  existInAtLeastTen,
  uniqueValues,
} = require("./helpers");

// const URL_DB = "./dbTest";
const URL_DB = "./db";

const time = async () => {
  console.log("START");
  // console.time("Time");
  const start = Date.now();

  const data = await sort();

  return (fn) => {
    fn(data);
    const finish = (Date.now() - start) / 1000;
    console.log("🚀 ~ Time", `${finish}s`);
    // console.timeEnd("Time");
  };
};

async function sort() {
  const urlPath = path.join(__dirname, URL_DB);
  const failDBName = await fs.readdir(urlPath);
  const dataPromise = [];

  for (let i = 0; i < failDBName.length; i++) {
    const url = URL_DB + `/${failDBName[i]}`;
    const urlPath = path.join(__dirname, url);
    const oneFile = await fs.readFile(urlPath, { encoding: "utf8" });

    const set = new Set(oneFile.split("\n"));
    const data = Array.from(set);

    dataPromise.push(data);
  }

  return dataPromise;
}

const timeCall = time();

const closingDate = async (typeSort) => {
  const uniqueDbDate = await timeCall;

  switch (typeSort) {
    case "uniqueValues":
      uniqueDbDate(uniqueValues);
      break;
    case "existInAllFiles":
      uniqueDbDate(existInAllFiles);
      break;
    case "existInAtLeastTen":
      uniqueDbDate(existInAtLeastTen);
      break;

    default:
      console.log("Такого методу не існує");
      break;
  }
};

closingDate("uniqueValues"); // значення 129240 Time: 1.697s - 1.967s Якщо визвати окремо
closingDate("existInAllFiles"); // значення 441 Time: 803.082ms - 895.735ms Якщо визвати окремо
closingDate("existInAtLeastTen"); // значення 73245 Time: 2.315s - 2.437s Якщо визвати окремо

// Загальний час виконня всіх 3 функцій Time: 3.202s - 3.885s

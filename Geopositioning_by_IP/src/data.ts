import Papa from "papaparse";
import * as fs from "fs/promises";
import path from "path";

const url = path.join(__dirname, "./db/IP2LOCATION-LITE-DB1.CSV");

export const dataIP = fs
  .readFile(url, { encoding: "utf8" })
  .then((data) => Papa.parse(data, { header: true }));
// .then(console.log);

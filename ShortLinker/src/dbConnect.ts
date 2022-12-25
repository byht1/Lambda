import path from "path";
import { verbose } from "sqlite3";

const sqlite3 = verbose();

export const tableName = "shortLink3";

const URL_DB = path.join(__dirname, "../db/url.db");

// const drop = `DROP TABLE ${tableName}`;
// const sqlCreateTable = `CREATE TABLE ${tableName}(name VARCHAR(50) PRIMARY KEY, url VARCHAR(100) NOT NULL)`;

const db = new sqlite3.Database(URL_DB, sqlite3.OPEN_READWRITE, (error) => {
  if (error) return console.log("CONNECT", error.message);
});

export default db;

// db.run(sqlCreateTable);

// db.all(`SELECT * FROM shortLink3 WHERE name = "hqd-ydFN0"`, [], (err, rows) => {
//   if (err) return console.log("SELECT", err.message);
//   console.log(rows);
// });

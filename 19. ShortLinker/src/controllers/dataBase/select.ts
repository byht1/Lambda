import db, { tableName } from "dbConnect";
import { TDataLocal } from "type";

export const select = async (name: string) => {
  const query = `SELECT * FROM ${tableName} WHERE name = "${name}"`;

  return new Promise<TDataLocal | undefined>((res) =>
    db.get(query, [], (error, rows) => {
      if (error) return console.log("SELECT", error.message);
      res(rows);
    })
  );
};

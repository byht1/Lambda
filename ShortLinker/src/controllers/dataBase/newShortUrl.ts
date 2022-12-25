import db, { tableName } from "dbConnect";

export const newShortUrl = async (data: string[]) => {
  const dbPush = `INSERT INTO ${tableName}(name, url) VALUES (?, ?)`;

  db.run(dbPush, data, (error) => {
    if (error) throw new Error();
  });
};

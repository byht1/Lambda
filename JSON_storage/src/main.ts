import { MongoClient } from "mongodb";
import app from "app";

const { DB_HOST = "", PORT = 5000 } = process.env;

export const client = new MongoClient(DB_HOST);

client
  .connect()
  .then(() =>
    app.listen(PORT, () =>
      console.log(`DB connect Server start at http://localhost:${PORT}`)
    )
  )
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });

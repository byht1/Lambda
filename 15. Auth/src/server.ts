import { MongoClient } from "mongodb";
import app from "app";

const { DB_HOST = "", PORT = 5000 } = process.env;

export const client = new MongoClient(DB_HOST);

// // Database Name
// const dbName = "db_lambda";

// async function main() {
//   // Use connect method to connect to the server
//   await client.connect();
//   console.log("Connected successfully to server");
//   app.listen(PORT, () =>
//     console.log(`DB connect Server start at http://localhost:${PORT}`)
//   );
//   const db = client.db(dbName);
//   db.collection("users");

//   // the following code examples can be pasted here...

//   return "done.";
// }

// main()
//   .then(console.log)
//   .catch(console.error)
//   .finally(() => client.close());

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

// const db = client.db("db_lambda");
// export const Users = db.createCollection("users");

// export const db = client.connect().then((mongo) => mongo.db());

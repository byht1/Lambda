import { client } from "server";

export const userConnect = async () => {
  const user = await client.db("db_lambda").collection("users");
  return user;
};

import { client } from "main";

export const services = async () => {
  const user = await client.db("db_lambda").collection("services");
  return user;
};

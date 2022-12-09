import { createError } from "helpers/createError";
import { services } from "model";
import { TRouterFn } from "type";

export const newJsonBase: TRouterFn = async (req, res) => {
  const { nameServer } = req.params;

  const collection = await services();
  const dataDb = await collection.findOne({ name_server: nameServer });

  if (dataDb) throw createError(409, "Server in use");

  const data = req.body;
  console.log("🚀  data", data);

  if (!Object.keys(data).length || !data.length) {
    throw createError(400, "data is null");
  }

  await collection.insertOne({ name_server: nameServer, data });

  res.status(201).json(data);
};

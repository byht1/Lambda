import { createError } from "helpers/createError";
import { services } from "model";
import { TRouterFn } from "type";

export const jsonBase: TRouterFn = async (req, res) => {
  const { nameServer } = req.params;

  const collection = await services();
  const dataDb = await collection.findOne({ name_server: nameServer });

  if (!dataDb) throw createError(401, "such a database does not exist");

  res.status(201).json(dataDb);
};

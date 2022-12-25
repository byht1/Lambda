import { select } from "controllers/dataBase";
import { createError } from "helpers";
import { TRouterFn } from "type";

export const redirect: TRouterFn = async (req, res) => {
  const { name } = req.params;

  const data = await select(name);

  if (!data) throw createError(400, "Url is invalid");

  res.redirect(data?.url);
};

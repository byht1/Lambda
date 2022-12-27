import { defaultUrl } from "app";
import { newShortUrl, select } from "controllers/dataBase";
import { createError } from "helpers";
import { TRouterFn } from "type";
import { validUrl } from "./validUrl";
import shortid from "shortid";

export const shortLink: TRouterFn = async (req, res) => {
  const { link, name } = req.body;

  const isValid = validUrl(link);

  if (!isValid) throw createError(400, "Url is invalid");

  let newName = shortid();

  if (name) {
    const data = await select(name);

    if (data) throw createError(409, `Name: ${name} is use`);

    newName = name;
  }

  const newUrl = `${defaultUrl}/${newName}`;

  await newShortUrl([newName, link]);

  res.status(201).json({ shortLink: newUrl });
};

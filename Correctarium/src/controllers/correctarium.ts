import {
  ANOTHER,
  costByPrise,
  dateDeadline,
  FILE,
  PRISE,
  timeToWorkByPrise,
} from "helpers";
import { createError } from "helpers/createError";
import { TBody, TRouterFn } from "type";

export const correctarium: TRouterFn = (req, res) => {
  const { language: onTheLanguage, mimetype = null, count }: TBody = req.body;

  const date = Date.now();

  const language = PRISE.find((x) => x.language === onTheLanguage);
  const fileType = FILE.find((x) => x === mimetype);
  const file = fileType ? fileType : ANOTHER;

  if (!language) throw createError(401, "Вибачне але ми не знаемо такої мови");

  const prise = costByPrise(language, file, Number(count));
  const timeToWork = timeToWorkByPrise(language, file, Number(count));
  const deadline = dateDeadline(timeToWork, date);

  res.status(200).json({
    prise,
    time: deadline.time,
    deadline: timeToWork,
    deadline_date: deadline.date,
  });
};

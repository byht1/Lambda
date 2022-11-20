import * as fs from "fs/promises";
import path from "path";
import { TDateReject, TDataResult, TWeekend } from "type";

const REJECT_DB = "./json/reject.json";
const RESULT_DB = "./json/result.json";

const rejectPath = path.join(__dirname, REJECT_DB);
const resultPath = path.join(__dirname, RESULT_DB);

const mutation = async () => {
  const reject = await fs.readFile(rejectPath, { encoding: "utf8" });
  const rej: TDateReject[] = await JSON.parse(reject);

  const res = rej.reduce(
    (acc: TDataResult[], { user, usedDays, startDate, endDate, status }) => {
      const currentWeekendDate: TWeekend = {
        status: status ? "approved" : "in the decoration",
        usedDays,
        startDate,
        endDate,
      };

      const isUser = acc.findIndex((x) => x.id === user._id);

      if (isUser !== -1) {
        acc[isUser].weekendDate.push(currentWeekendDate);
        return acc;
      }

      const newObj: TDataResult = {
        id: user._id,
        name: user.name,
        weekendDate: [currentWeekendDate],
      };

      acc.push(newObj);
      return acc;
    },
    []
  );

  return res;
};

const result = async () => {
  const newDate = await mutation();

  fs.writeFile(resultPath, JSON.stringify(newDate));
};

result();

// in the decoration.

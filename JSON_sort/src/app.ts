import axios, { AxiosResponse } from "axios";
import { url } from "const/url";
import { TDataUrl } from "type";

const objSearch = (obj: any) => {
  for (const key in obj) {
    const newObj = obj[key];

    if (typeof newObj === "object") {
      if ("isDone" in newObj) {
        return newObj.isDone;
      } else {
        objSearch(newObj);
      }
    }
  }
};

const server = (url: string) => {
  let attempts = 3;

  const call = async () => {
    try {
      const { data }: AxiosResponse<TDataUrl> = await axios.get(url);
      let isDone = null;

      if (data.isDone !== undefined) {
        isDone = data.isDone;
      } else {
        isDone = objSearch(data);
      }

      attempts = 3;

      return isDone;
    } catch (error) {
      if (attempts <= 0) {
        attempts = 3;
        console.log("🚀 ~ error", error);
        return error;
      }

      attempts -= 1;

      call();
    }
  };

  return call;
};

const data = async (url: string[]) => {
  const method = [];

  for (const str of url) {
    const data = server(str);
    method.push(data);
  }

  const total = await Promise.all(method.map((x) => x())).then((res) =>
    res.reduce(
      (acc, x) => {
        if (x) {
          acc.isTrue += 1;
          return acc;
        }
        if (x === undefined) {
          acc.isError += 1;
          return acc;
        }
        acc.isFalse += 1;
        return acc;
      },
      { isTrue: 0, isFalse: 0, isError: 0 }
    )
  );
  console.log("🚀 ~ total", total);
  console.timeEnd("Time");
};

console.time("Time");
data(url);

import { TPrise } from "type";
import { ANOTHER } from "..";

type TService = (language: TPrise, fileType: string, count: number) => number;

export const costByPrise: TService = (language, fileType, count) => {
  const prise = fileType !== ANOTHER ? language.prise : language.prise * 1.2;
  const cost = Number(count) * prise;

  if (cost < language.minPrise) return language.minPrise;

  return Math.ceil(cost);
};

export const timeToWorkByPrise: TService = (language, fileType, count) => {
  const hours = 1000 * 60 * 60;
  const half = 1000 * 60 * 30;
  const deadline = count / language.deadline;
  const min = fileType !== ANOTHER ? half : hours;

  return Math.ceil(min + deadline * hours);
};

export const dateDeadline = (time: number, orderDate: number) => {
  const today = new Date(orderDate);
  const { day, hour, minute, time: tims } = convertMs(time);

  const getDay = today.getDay();
  let plusDay = getDay === 0 ? 1 : 0;
  plusDay = getDay === 7 ? plusDay + 1 : plusDay + 0;

  if (getDay === 7 || getDay === 0) {
    today.setHours(10 + hour, minute, 0, 0);
  }

  today.setDate(today.getDate() + day + plusDay);
  const currentHours = today.getHours();
  if (currentHours > 20) {
    today.setDate(today.getDate() + 1);
  }

  return {
    date: `${normalDate(today.getDate())}/${normalDate(
      today.getMonth() + 1
    )}/${today.getFullYear()} ${normalDate(today.getHours())}:${normalDate(
      today.getMinutes()
    )}:${normalDate(today.getSeconds())}`,
    time: tims,
  };
};

function convertMs(ms: number) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 9;

  const daysp = Math.floor(ms / day);
  const hoursp = Math.floor((ms % day) / hour);
  const minutes = Math.floor((ms % hour) / minute);

  const weekend = Math.floor(daysp / 5) * 2;

  const time = `${daysp * 9 + hoursp} годин ${minutes} хвилин`;

  return { day: daysp + weekend, hour: hoursp, minute: minutes, time };
}

function normalDate(value: number) {
  return value.toString().padStart(2, "0");
}

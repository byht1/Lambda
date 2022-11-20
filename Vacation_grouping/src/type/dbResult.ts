export type TWeekend = {
  status: "approved" | "in the decoration";
  usedDays: number;
  startDate: string;
  endDate: string;
};

export type TDataResult = {
  id: string;
  name: string;
  weekendDate: TWeekend[];
};

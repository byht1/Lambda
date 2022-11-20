export type TDateReject = {
  _id: string;
  user: {
    _id: string;
    name: string;
  };
  status?: string;
  usedDays: number;
  startDate: string;
  endDate: string;
};

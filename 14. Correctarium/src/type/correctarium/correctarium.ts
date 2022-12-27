export type TPrise = {
  language: string;
  prise: number;
  minPrise: number;
  deadline: number;
};

export type TBody = {
  language: string;
  count: number | string;
  mimetype: string | null;
};

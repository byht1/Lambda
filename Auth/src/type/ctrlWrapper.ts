import Express from "express";

export interface RequestCustom extends Express.Request {
  user?: { email: string; password: string } | any;
}

export type TCtrlWrapperFunc = (
  req: RequestCustom,
  res: Express.Response,
  next: Express.NextFunction
) => void;

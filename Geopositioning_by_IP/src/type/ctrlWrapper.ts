import Express from "express";

export type TCtrlWrapperFunc = (
  req: Express.Request,
  res: Express.Response,
  next: Express.NextFunction
) => void;

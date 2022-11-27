import Express from "express";

export type TRouterFn = (
  req: Express.Request,
  res: Express.Response,
  next?: Express.NextFunction
) => any | void;

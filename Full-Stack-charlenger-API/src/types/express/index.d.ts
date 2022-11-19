import * as express from "express";

declare global {
  namespace Express {
    interface Request {
      username: string;
      value: number;
    }
  }
}

import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const verifyAuthUserMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "Token required" });
    }

    if (token != undefined) {
      jwt.verify(
        token as string,
        process.env.JWT_SECRET as string,
        (error: any, decoded: any) => {
          if (error) {
            throw new Error();
          }

          req.username = decoded.username;
        }
      );
    }

    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid Token" });
  }
};

export default verifyAuthUserMiddleware;

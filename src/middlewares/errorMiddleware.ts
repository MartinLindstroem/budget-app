import { Request, Response, NextFunction } from "express";
import { HttpException } from "../utils/customError";

function errorMiddleware(error: HttpException, req: Request, res: Response, next: NextFunction) {
  const status: number = error.status ? error.status : 500;
  const message: string = status === 500 ? "Server error" : error.message;
  const errors = error.error;

  console.error({
    status,
    message,
    error: errors,
    stack: error.stack,
  });

  res.status(status).json({ msg: message });
}

export default errorMiddleware;

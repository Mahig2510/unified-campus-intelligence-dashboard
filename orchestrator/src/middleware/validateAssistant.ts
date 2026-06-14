import {
  Request,
  Response,
  NextFunction,
} from "express";

import AppError
from "../utils/AppError";

export const validateAssistant =
(
  req: Request,
  res: Response,
  next: NextFunction
) => {

  const { query } =
    req.body;

  if (
    !query ||
    typeof query !== "string"
  ) {

    return next(
      new AppError(
        "Query must be a string",
        400
      )
    );
  }

  if (!query.trim()) {

    return next(
      new AppError(
        "Query is required",
        400
      )
    );
  }

  next();
};
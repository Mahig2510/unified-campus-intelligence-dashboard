import { Request, Response } from "express";

import {
  getTools,
  askAI,
} from "../services/ai.service";

import {
  getBooks,
  getEvents,
  getMenuItems,
  getResources,
} from "../services/mcp.service";

import { asyncHandler }
from "../utils/asyncHandler";

import { apiResponse }
from "../utils/apiResponse";

import AppError
from "../utils/AppError";

export const assistantQuery =
  asyncHandler(
    async (
      req: Request,
      res: Response
    ) => {

      const query = String(
        req.body.query || ""
      );

      const tools =
        await getTools(query);

      const results: Record<
        string,
        any
      > = {};

      for (
        const tool of tools
      ) {

        switch (tool) {

          case "getBooks":
            results.books =
              await getBooks();
            break;

          case "getEvents":
            results.events =
              await getEvents();
            break;

          case "getMenu":
            results.menu =
              await getMenuItems();
            break;

          case "getResources":
            results.resources =
              await getResources();
            break;
        }
      }

      const prompt = `
User Query:
${query}

Available Data:
${JSON.stringify(
  results,
  null,
  2
)}

Answer the user's query
using only the provided data.
Give a helpful response.
`;

      const answer =
        await askAI(prompt);

      res.status(200).json(
        apiResponse(
          true,
          "Assistant response generated",
          {
            query,
            tools,
            answer,
            results,
          }
        )
      );
    }
  );
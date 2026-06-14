import { Request, Response } from "express";

import {
  getTool,
} from "../services/ai.service";

import {
  getBooks,
  getEvents,
  getMenuItems,
  getResources,
} from "../services/mcp.service";

export const aiQuery =
  async (
    req: Request,
    res: Response
  ): Promise<void> => {

    try {

      const query = String(
        req.body.query || ""
      );

      const tool =
  await getTool(
    query
  );

      let data: any = null;

      switch (tool) {

        case "getBooks":
          data =
            await getBooks();
          break;

        case "getEvents":
          data =
            await getEvents();
          break;

        case "getMenu":
          data =
            await getMenuItems();
          break;

        case "getResources":
          data =
            await getResources();
          break;

        default:
          res.status(400).json({
            success: false,
            message:
              "No matching tool found",
            tool,
          });
          return;
      }

      res.status(200).json({
        success: true,
        query,
        tool,
        data,
      });

    } catch (error) {

      res.status(500).json({
        success: false,
        message:
          "AI Query Failed",
      });
    }
  };
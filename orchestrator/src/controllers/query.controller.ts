import { Request, Response } from "express";

import {
  getIntent,
} from "../services/ai.service";

import {
  getBooks,
  getEvents,
  getMenuItems,
  getResources,
} from "../services/mcp.service";

export const routeQuery = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const query = String(
      req.body.query || ""
    );

    const intent =
  await getIntent(
    query
  );

    let data: any = null;

    switch (intent) {
      case "library":
        data = await getBooks();
        break;

      case "events":
        data = await getEvents();
        break;

      case "cafeteria":
        data =
          await getMenuItems();
        break;

      case "academics":
        data =
          await getResources();
        break;

      default:
        res.status(400).json({
          success: false,
          message:
            "Unable to determine intent",
        });
        return;
    }

    res.status(200).json({
      success: true,
      query,
      intent,
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message:
        "Failed to process query",
    });
  }
};
import { Request, Response } from "express";

import {
  checkAllMCPs,
  getBooks,
  getEvents,
  getMenuItems,
  getResources,
} from "../services/mcp.service";

export const healthCheck =
  async (
    _req: Request,
    res: Response
  ): Promise<void> => {
    const status =
      await checkAllMCPs();

    res.status(200).json({
      success: true,
      mcps: status,
    });
  };

  export const fetchBooks =
  async (
    _req: Request,
    res: Response
  ): Promise<void> => {
    const books =
      await getBooks();

    res.status(200).json(
      books
    );
  };

export const fetchEvents =
  async (
    _req: Request,
    res: Response
  ): Promise<void> => {
    const events =
      await getEvents();

    res.status(200).json(
      events
    );
  };

export const fetchMenu =
  async (
    _req: Request,
    res: Response
  ): Promise<void> => {
    const menu =
      await getMenuItems();

    res.status(200).json(
      menu
    );
  };

export const fetchResources =
  async (
    _req: Request,
    res: Response
  ): Promise<void> => {
    const resources =
      await getResources();

    res.status(200).json(
      resources
    );
  };
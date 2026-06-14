import { Router } from "express";

import {
  healthCheck,
  fetchBooks,
  fetchEvents,
  fetchMenu,
  fetchResources,
} from "../controllers/mcp.controller";

const router = Router();

router.get("/health", healthCheck);

router.get(
  "/library/books",
  fetchBooks
);

router.get(
  "/events",
  fetchEvents
);

router.get(
  "/menu",
  fetchMenu
);

router.get(
  "/resources",
  fetchResources
);

export default router;
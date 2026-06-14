import { Router } from "express";

import {
  aiQuery,
} from "../controllers/ai.controller";

const router = Router();

router.post(
  "/ai-query",
  aiQuery
);

export default router;
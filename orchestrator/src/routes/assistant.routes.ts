import { Router } from "express";

import {
  assistantQuery,
} from "../controllers/assistant.controller";

import {
  validateAssistant,
} from "../middleware/validateAssistant";

const router = Router();

router.post(
  "/assistant",
  validateAssistant,
  assistantQuery
);

export default router;
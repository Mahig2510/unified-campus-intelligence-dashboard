import { Router } from "express";
import { protect } from "../middleware/auth.middleware";

import {
  registerUser,
  loginUser,
  getCurrentUser,
  refreshAccessToken,
} from "../controllers/auth.controllers";

const router = Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.post("/refresh", refreshAccessToken);

router.get("/me", protect, getCurrentUser);

export default router;
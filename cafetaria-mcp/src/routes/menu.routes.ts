import { Router } from "express";

import {
  createMenu,
  getMenus,
  getMenuById,
  updateMenu,
  deleteMenu,
  searchMenu,
  availableMenu,
  menuByCategory,
  budgetMeals,
  menuAnalytics,
} from "../controllers/menu.controller";

const router = Router();

router.post("/", createMenu);

router.get("/", getMenus);

router.get("/search", searchMenu);

router.get("/available", availableMenu);

router.get("/category/:category", menuByCategory);

router.get("/budget", budgetMeals);

router.get("/analytics", menuAnalytics);

router.get("/:id", getMenuById);

router.put("/:id", updateMenu);

router.delete("/:id", deleteMenu);

export default router;
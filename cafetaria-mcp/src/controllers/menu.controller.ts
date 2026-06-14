import { Request, Response } from "express";

import {
  createMenuItem,
  getAllMenuItems,
  getMenuItemById,
  updateMenuItem,
  deleteMenuItem,
  searchMenuItems,
  getAvailableItems,
  getItemsByCategory,
  getBudgetMeals,
  getMenuAnalytics,
} from "../services/menu.service";

export const createMenu = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const menuItem = await createMenuItem(
      req.body
    );

    res.status(201).json({
      success: true,
      menuItem,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message:
        "Failed to create menu item",
    });
  }
};

export const getMenus = async (
  _req: Request,
  res: Response
): Promise<void> => {
  try {
    const menuItems =
      await getAllMenuItems();

    res.status(200).json({
      success: true,
      count: menuItems.length,
      menuItems,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message:
        "Failed to fetch menu items",
    });
  }
};

export const getMenuById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const menuItem =
      await getMenuItemById(
        req.params.id as string
      );

    if (!menuItem) {
      res.status(404).json({
        success: false,
        message:
          "Menu item not found",
      });
      return;
    }

    res.status(200).json({
      success: true,
      menuItem,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message:
        "Failed to fetch menu item",
    });
  }
};

export const updateMenu = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const menuItem =
      await updateMenuItem(
        req.params.id as string,
        req.body
      );

    res.status(200).json({
      success: true,
      menuItem,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message:
        "Failed to update menu item",
    });
  }
};

export const deleteMenu = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    await deleteMenuItem(
      req.params.id as string
    );

    res.status(200).json({
      success: true,
      message:
        "Menu item deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message:
        "Failed to delete menu item",
    });
  }
};

export const searchMenu = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const keyword =
      req.query.keyword as string;

    const menuItems =
      await searchMenuItems(keyword);

    res.status(200).json({
      success: true,
      count: menuItems.length,
      menuItems,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message:
        "Search failed",
    });
  }
};

export const availableMenu = async (
  _req: Request,
  res: Response
): Promise<void> => {
  try {
    const menuItems =
      await getAvailableItems();

    res.status(200).json({
      success: true,
      count: menuItems.length,
      menuItems,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message:
        "Failed to fetch available items",
    });
  }
};

export const menuByCategory =
  async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const menuItems =
        await getItemsByCategory(
          req.params.category as string
        );

      res.status(200).json({
        success: true,
        count: menuItems.length,
        menuItems,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          "Failed to fetch category items",
      });
    }
  };

export const budgetMeals = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const maxPrice = Number(
      req.query.maxPrice
    );

    const menuItems =
      await getBudgetMeals(maxPrice);

    res.status(200).json({
      success: true,
      count: menuItems.length,
      menuItems,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message:
        "Failed to fetch budget meals",
    });
  }
};

export const menuAnalytics =
  async (
    _req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const analytics =
        await getMenuAnalytics();

      res.status(200).json({
        success: true,
        analytics,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          "Failed to fetch analytics",
      });
    }
  };
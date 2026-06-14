import Menu from "../models/Menu";

export const createMenuItem = async (
  data: any
) => {
  return await Menu.create(data);
};

export const getAllMenuItems = async () => {
  return await Menu.find();
};

export const getMenuItemById = async (
  id: string
) => {
  return await Menu.findById(id);
};

export const updateMenuItem = async (
  id: string,
  data: any
) => {
  return await Menu.findByIdAndUpdate(
    id,
    data,
    {
      new: true,
      runValidators: true,
    }
  );
};

export const deleteMenuItem = async (
  id: string
) => {
  return await Menu.findByIdAndDelete(id);
};

export const searchMenuItems = async (
  keyword: string
) => {
  return await Menu.find({
    itemName: {
      $regex: keyword,
      $options: "i",
    },
  });
};

export const getAvailableItems =
  async () => {
    return await Menu.find({
      available: true,
    });
  };

export const getItemsByCategory =
  async (category: string) => {
    return await Menu.find({
      category,
    });
  };

export const getBudgetMeals =
  async (maxPrice: number) => {
    return await Menu.find({
      price: {
        $lte: maxPrice,
      },
      available: true,
    });
  };

export const getMenuAnalytics =
  async () => {
    const totalItems =
      await Menu.countDocuments();

    const availableItems =
      await Menu.countDocuments({
        available: true,
      });

    const menuItems =
      await Menu.find();

    const averagePrice =
      menuItems.length > 0
        ? menuItems.reduce(
            (sum, item) =>
              sum + item.price,
            0
          ) / menuItems.length
        : 0;

    return {
      totalItems,
      availableItems,
      averagePrice,
    };
  };
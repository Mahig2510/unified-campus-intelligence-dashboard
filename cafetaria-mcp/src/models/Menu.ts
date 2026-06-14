import mongoose, { Document, Schema } from "mongoose";

export interface IMenu extends Document {
  itemName: string;
  category: string;
  price: number;
  available: boolean;
  description?: string;
  imageUrl?: string;
  mealType: string;
}

const menuSchema = new Schema<IMenu>(
  {
    itemName: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: String,
      required: true,
      trim: true,
    },

    mealType: {
      type: String,
      enum: [
        "Breakfast",
        "Lunch",
        "Dinner",
        "Snacks",
        "Beverage",
      ],
      required: true,
    },

    price: {
      type: Number,
      required: true,
      min: 0,
    },

    available: {
      type: Boolean,
      default: true,
    },

    description: {
      type: String,
      default: "",
    },

    imageUrl: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const Menu = mongoose.model<IMenu>(
  "Menu",
  menuSchema
);

export default Menu;
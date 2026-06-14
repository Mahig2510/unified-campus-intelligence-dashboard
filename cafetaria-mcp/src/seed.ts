import dotenv from "dotenv";
import mongoose from "mongoose";

import Menu from "./models/Menu";
import { menuItems } from "./data/menu";

dotenv.config();

const seed = async () => {

  await mongoose.connect(
    process.env.MONGODB_URI!
  );

  await Menu.deleteMany({});

  await Menu.insertMany(
    menuItems
  );

  console.log(
    "Menu Seeded Successfully"
  );

  process.exit();
};

seed();
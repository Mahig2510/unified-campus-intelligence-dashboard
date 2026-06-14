import dotenv from "dotenv";
import mongoose from "mongoose";

import AcademicResource from "./models/AcademicResource";
import { resources } from "./data/resources";

dotenv.config();

const seed = async () => {

  await mongoose.connect(
    process.env.MONGODB_URI!
  );

  await AcademicResource.deleteMany({}); 

  await AcademicResource.insertMany(
    resources
  );

  console.log(
    "Resources Seeded Successfully"
  );

  process.exit();
};

seed();
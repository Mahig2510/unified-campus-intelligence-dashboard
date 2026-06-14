import dotenv from "dotenv";
import mongoose from "mongoose";

import Event from "./models/Event";
import { events } from "./data/events";

dotenv.config();

const seed = async () => {

  await mongoose.connect(
    process.env.MONGODB_URI!
  );

  await Event.deleteMany({});

  await Event.insertMany(events);

  console.log(
    "Events Seeded Successfully"
  );

  process.exit();
};

seed();
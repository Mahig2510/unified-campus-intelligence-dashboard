import dotenv from "dotenv";

dotenv.config();

import app from "./app";
import { connectDB } from "./config/db";

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(
        `Orchestrator running on port ${PORT}`
      );
    });
  } catch (error) {
    console.error(
      "Failed to connect to MongoDB",
      error
    );
  }
};

startServer();
import mongoose from "mongoose";

const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(
      process.env.MONGODB_URI as string
    );

    console.log(
      "Events MCP Database Connected"
    );
  } catch (error) {
    console.error(
      "Events MCP Database Connection Failed"
    );

    process.exit(1);
  }
};

export default connectDB;
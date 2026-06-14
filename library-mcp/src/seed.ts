import dotenv from "dotenv";
import mongoose from "mongoose";

import Book from "./models/Book";
import { books } from "./data/books";

dotenv.config();

const seed = async () => {
  try {

    await mongoose.connect(
      process.env.MONGODB_URI!
    );

    await Book.deleteMany({});

    await Book.insertMany(
      books
    );

    console.log(
      "Books Seeded Successfully"
    );

    process.exit();

  } catch (error) {

    console.error(error);

    process.exit(1);
  }
};

seed();
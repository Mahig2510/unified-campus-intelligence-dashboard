import mongoose, { Document, Schema } from "mongoose";

export interface IBook extends Document {
  title: string;
  author: string;
  category: string;
  isbn: string;
  description?: string;
  totalCopies: number;
  availableCopies: number;
  location: string;
  coverImage?: string;
}

const bookSchema = new Schema<IBook>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    author: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: String,
      required: true,
      trim: true,
    },

    isbn: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    description: {
      type: String,
      default: "",
    },

    totalCopies: {
      type: Number,
      required: true,
      min: 0,
    },

    availableCopies: {
      type: Number,
      required: true,
      min: 0,
    },

    location: {
      type: String,
      required: true,
    },

    coverImage: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const Book = mongoose.model<IBook>(
  "Book",
  bookSchema
);

export default Book;
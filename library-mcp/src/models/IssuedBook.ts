import mongoose, { Document, Schema, Types } from "mongoose";

export interface IIssuedBook extends Document {
  bookId: Types.ObjectId;
  userId: Types.ObjectId;
  issueDate: Date;
  dueDate: Date;
  returnDate?: Date;
  status: "Issued" | "Returned";
}

const issuedBookSchema = new Schema<IIssuedBook>(
  {
    bookId: {
      type: Schema.Types.ObjectId,
      ref: "Book",
      required: true,
    },

    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    issueDate: {
      type: Date,
      default: Date.now,
    },

    dueDate: {
      type: Date,
      required: true,
    },

    returnDate: {
      type: Date,
    },

    status: {
      type: String,
      enum: ["Issued", "Returned"],
      default: "Issued",
    },
  },
  {
    timestamps: true,
  }
);

const IssuedBook = mongoose.model<IIssuedBook>(
  "IssuedBook",
  issuedBookSchema
);

export default IssuedBook;
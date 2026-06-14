import mongoose, {
  Document,
  Schema,
  Types,
} from "mongoose";

export interface IEventRegistration
  extends Document {
  eventId: Types.ObjectId;
  userId: Types.ObjectId;
  registrationDate: Date;
  status: "Registered" | "Cancelled";
}

const eventRegistrationSchema =
  new Schema<IEventRegistration>(
    {
      eventId: {
        type: Schema.Types.ObjectId,
        ref: "Event",
        required: true,
      },

      userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },

      registrationDate: {
        type: Date,
        default: Date.now,
      },

      status: {
        type: String,
        enum: [
          "Registered",
          "Cancelled",
        ],
        default: "Registered",
      },
    },
    {
      timestamps: true,
    }
  );

const EventRegistration =
  mongoose.model<IEventRegistration>(
    "EventRegistration",
    eventRegistrationSchema
  );

export default EventRegistration;
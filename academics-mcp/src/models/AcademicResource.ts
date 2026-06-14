import mongoose, { Document, Schema } from "mongoose";

export interface IAcademicResource extends Document {
  title: string;
  subject: string;
  semester: number;
  resourceType: string;
  description?: string;
  fileUrl: string;
  uploadedBy?: string;
}

const academicResourceSchema =
  new Schema<IAcademicResource>(
    {
      title: {
        type: String,
        required: true,
        trim: true,
      },

      subject: {
        type: String,
        required: true,
        trim: true,
      },

      semester: {
        type: Number,
        required: true,
        min: 1,
        max: 8,
      },

      resourceType: {
        type: String,
        required: true,
        enum: [
          "Notes",
          "PYQ",
          "Assignment",
          "Syllabus",
          "Reference"
        ],
      },

      description: {
        type: String,
        default: "",
      },

      fileUrl: {
        type: String,
        required: true,
      },

      uploadedBy: {
        type: String,
        default: "",
      },
    },
    {
      timestamps: true,
    }
  );

const AcademicResource =
  mongoose.model<IAcademicResource>(
    "AcademicResource",
    academicResourceSchema
  );

export default AcademicResource; 
import { Schema, model } from "mongoose";
const EmployeeSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: [true, "email already exists"],
    },
    mobile: {
      type: Number,
      required: [true, "Mobile no is required"],
    },
    designation: {
      type: String,
      required: [true, "Designation is required"],
    },
    companyName: {
      type: String,
      required: [true, "Company Name is required"],
    },
  },
  {
    timestamps: true,
    versionKey: false,
    strict: "throw",
  },
);

export const empModel = model("emp", EmployeeSchema);

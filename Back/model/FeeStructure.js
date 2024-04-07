import mongoose from "mongoose";

const { Schema, model, SchemaTypes } = mongoose;

const PaymentFrequency = {
  ANNUAL: "Annual",
  MONTHLY: "Monthly",
  EITHER: "EITHER",
};

const FeeStructureSchema = new Schema({
  SemesterFees: {
    type: Number,
    required: true,
  },
  Transportation: {
    type: Number,
    required: true,
  },
  Accommodation: {
    type: Number,
    required: true,
  },
  PaymentFrequency: {
    type: String,
    enum: [
      'Annual',
      'Monthly',
      'Either',
    ],
    required: true,
  },
});

const FeeStructure = model("FeeStructure", FeeStructureSchema);

export default FeeStructure;

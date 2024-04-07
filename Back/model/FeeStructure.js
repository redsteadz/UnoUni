import mongoose from "mongoose";

const { Schema, model, SchemaTypes } = mongoose;

const FeeStructureSchema = new Schema({
  Localstudents: [String],
  Internationalstudents: [String]
 });

const FeeStructure = model("FeeStructure", FeeStructureSchema);

export default FeeStructure;

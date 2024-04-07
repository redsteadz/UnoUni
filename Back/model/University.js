import mongoose from "mongoose";

const { Schema, SchemaTypes, model } = mongoose;

const UniversitySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  rank: Number,
  description: String,
  image_url: String,
  location: String,
  tags: [String],
  fee: {
    type: SchemaTypes.ObjectId,
    ref: "FeeStructure",
    unique: true,
  },
  field: {
    type: SchemaTypes.ObjectId,
    ref: "Course",
  },
});

const University = model("University", UniversitySchema);

export default University;

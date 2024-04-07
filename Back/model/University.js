import mongoose from "mongoose";

const { Schema, SchemaTypes, model } = mongoose;

const UniversitySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: String,
  image_url: String,
  location: String,
  tags: [String],
  Fee: {
    type: SchemaTypes.ObjectId,
    ref: "FeeStructure",
    unique: true,
  },
  Course: {
    type: SchemaTypes.ObjectId,
    ref: "Course",
  },
});

const University = model("University", UniversitySchema);

export default University;

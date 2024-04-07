import mongoose from "mongoose";

const { Schema, SchemaTypes, model } = mongoose;

const CourseSchema = new Schema({
  "Arts & Humanities ": [String],
  "Language & Cultural ": [String],
  "Business & Social Sciences ": [String],
  "Medicine & Health ": [String],
  "Science & Technology ": [String],
  "Engineering ": [String],
});

const Course = model("Course", CourseSchema);

export default Course;

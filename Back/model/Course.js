import mongoose from "mongoose";

const { Schema, SchemaTypes, model } = mongoose;

const CourseSchema = new Schema({
  name: String,
  description: String,
  tags: [String],
  Requirements: [String], 
  SemesterInfo: [String],
});

const Course = model("Course", CourseSchema);

export default Course;

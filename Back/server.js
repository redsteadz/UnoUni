import mongoose from "mongoose";
import dotenv from 'dotenv';
import Express from "express";
import fs from 'fs';
import cors from "cors";
import bodyParser from "body-parser";
import University from "./model/University.js";
import FeeStructure from "./model/FeeStructure.js";
import Course from "./model/Course.js";

dotenv.config();

mongoose.connect(process.env.MONGO_URL);

// console.log(process.env.MONGO_URL);

const app = Express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());

async function saveDataToMongoDB(data) {
    try {
        for (const entry of data) {
            // Create Field instance
            const field = await Course.create(entry.field);

            // Create Fee instance
            const fee = await FeeStructure.create(entry.fee);

            // Create University instance and link with Field and Fee
            const university = await University.create({
                rank: entry.rank,
                name: entry.name,
                location: entry.location,
                tags: entry.tags,
                description: entry.description,
                field: field._id,
                fee: fee._id,
                image_url: entry.image_url
            });

            console.log('University created:', university.name);
        }
        console.log('All universities saved successfully.');
    } catch (error) {
        console.error('Error saving universities:', error);
    }
}

// Read data from JSON file
fs.readFile('universities.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading JSON file:', err);
        return;
    }

    try {
        const universitiesData = JSON.parse(data);
        saveDataToMongoDB(universitiesData);
    } catch (error) {
        console.error('Error parsing JSON data:', error);
    }
});



app.get("/universities", async (req, res) => {
  try {
    const universities = await University.find().populate("fee field");
    res.json(universities);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get("/universities/search", async (req, res) => {
  const searchTerm = req.query.q;

  try {
    const universities = await University.find({
      $or: [
        { name: { $regex: searchTerm, $options: "i" } },
        { description: { $regex: searchTerm, $options: "i" } },
        { tags: { $regex: searchTerm, $options: "i" } },
      ],
    }).populate("Fee Course");
    res.json(universities);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post("/universities/add", async (req, res) => {
  const body = req.body;
  try {
    if (body.Fee) {
      const fee = new FeeStructure(body.Fee);
      const newFee = await fee.save();
      body.Fee = newFee._id;
    }

    if (body.Course) {
      const course = new Course(body.Course);
      const newCourse = await course.save();
      body.Course = newCourse._id;
    }
    const univ = new University(body);
    const newUniv = await univ.save();
    console.log("University added successfully");
    res.status(201).json(newUniv);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

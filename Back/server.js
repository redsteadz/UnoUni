import mongoose from "mongoose";
import Express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import University from "./model/University.js";
import FeeStructure from "./model/FeeStructure.js";
import Course from "./model/Course.js";

mongoose.connect(process.env.MONGO_URL);

const app = Express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());

async function CreateIfNotMade(obj, Model) {
  try {
    const check = await Model.exists({ _id: obj._id });
    if (!check) {
      await obj.save();
      console.log(`${obj.constructor.modelName} created successfully.`);
    } else {
      console.log(`${obj.constructor.modelName} already exists.`);
    }
  } catch (error) {
    console.error(
      `Error while checking or creating ${obj.constructor.modelName}: ${error.message}`,
    );
  }
}

// Create mock-up data for universities
const universities = [
  {
    name: "University of Example",
    description: "A leading institution in example studies.",
    image_url: "university_example.jpg",
    location: "Example City, Example Country",
    tags: ["example", "education"],
  },
  {
    name: "Another University",
    description: "A prestigious institution offering various courses.",
    image_url: "another_university.jpg",
    location: "Another City, Another Country",
    tags: ["prestigious", "education"],
  },
  // Add more universities as needed
];

const coursesData = [
  {
    name: "Computer Science",
    description: "Introduction to computer science concepts.",
    tags: ["computer science", "programming", "software"],
    Requirements: ["Basic math skills", "Logical thinking"],
    SemesterInfo: ["Spring", "Fall"],
  },
  {
    name: "Biology",
    description: "Study of living organisms and their interactions.",
    tags: ["biology", "science", "life sciences"],
    Requirements: ["Basic biology knowledge"],
    SemesterInfo: ["Spring", "Fall"],
  },
  // Add more courses as needed
];

// Create mock-up data for fee structures
const feeStructuresData = [
  {
    SemesterFees: 5000,
    Transportation: 1000,
    Accommodation: 2000,
    PaymentFrequency: "Annual",
  },
  {
    SemesterFees: 6000,
    Transportation: 1200,
    Accommodation: 2500,
    PaymentFrequency: "Monthly",
  },
  // Add more fee structures as needed
];

app.get("/universities", async (req, res) => {
  try {
    const universities = await University.find().populate("Fee Course");
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

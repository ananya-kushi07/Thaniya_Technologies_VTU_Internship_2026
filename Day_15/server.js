const express = require("express");
const app = express();

app.use(express.json());

// Sample data
let courses = [
  { id: 1, name: "JavaScript Basics" },
  { id: 2, name: "Node.js Fundamentals" }
];

// GET all courses
app.get("/courses", (req, res) => {
  res.json(courses);
});

// POST add a new course
app.post("/courses", (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({
      message: "Course name is required"
    });
  }

  const newCourse = {
    id: courses.length + 1,
    name
  };

  courses.push(newCourse);

  res.status(201).json({
    message: "Course added successfully",
    course: newCourse
  });
});

// DELETE course
app.delete("/courses/:id", (req, res) => {
  const courseId = parseInt(req.params.id);

  courses = courses.filter(course => course.id !== courseId);

  res.json({
    message: "Course deleted successfully"
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
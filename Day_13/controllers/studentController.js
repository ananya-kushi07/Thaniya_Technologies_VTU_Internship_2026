let students = [];

// GET /students
exports.getStudents = (req, res) => {
  res.json(students);
};

// POST /students
exports.addStudent = (req, res) => {
  const student = req.body;
  students.push(student);

  res.status(201).json({
    message: "Student added successfully",
    student
  });
};

// DELETE /students/:id
exports.deleteStudent = (req, res) => {
  const id = req.params.id;

  students.splice(id, 1);

  res.json({
    message: "Student deleted successfully"
  });
};
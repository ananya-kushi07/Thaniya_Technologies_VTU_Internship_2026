// User controller logic

let users = [];

const getUsers = (req, res) => {
  res.status(200).json(users);
};

const addUser = (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({
      message: "Name and email are required"
    });
  }

  users.push({ name, email });

  res.status(201).json({
    message: "User added successfully",
    users
  });
};

module.exports = {
  getUsers,
  addUser
};
function getUser(req, res) {
  res.json({
    name: 'John Doe',
    age: 30
  });
}

function getUsers(req, res) {
  res.json([
    {
      name: 'John Doe',
      age: 30
    },
    {
      name: 'Jane Doe',
      age: 25
    }
  ]);
}

function createUser(req, res) {
  res.json({
    message: 'User created'
  });
}

function updateUser(req, res) {
  res.json({
    message: 'User updated'
  });
}

function deleteUser(req, res) {
  res.json({
    message: 'User deleted'
  });
}


module.exports = {
  getUser,
  getUsers,
  createUser,
  updateUser,
  deleteUser
}
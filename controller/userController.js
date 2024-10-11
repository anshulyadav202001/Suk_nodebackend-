const User = require('../models/User');

exports.getAllUsers = (req, res) => {
  console.log("hii");
  User.findAll((err, users) => {
    if (err) return res.status(500).send(err);
    res.status(200).json(users);
  });
};

exports.getUser = (req, res) => {
  User.findById(req.params.id, (err, user) => {
    if (err) return res.status(500).send(err);
    res.status(200).json(user);
  });
};

exports.createUser = (req, res) => {
  const newUser = req.body;
  User.create(newUser, (err) => {
    if (err) return res.status(500).send(err);
    res.status(201).json({ message: 'User created' });
  });
};

exports.updateUser = (req, res) => {
  User.update(req.params.id, req.body, (err) => {
    if (err) return res.status(500).send(err);
    res.status(200).json({ message: 'User updated' });
  });
};

exports.deleteUser = (req, res) => {
  User.delete(req.params.id, (err) => {
    if (err) return res.status(500).send(err);
    res.status(200).json({ message: 'User deleted' });
  });
};

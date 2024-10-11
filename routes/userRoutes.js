const express = require("express");
const userRoutes = express.Router();
const userController = require("../controller/userController");

userRoutes.get("/list", userController.getAllUsers);
userRoutes.get("/show/:id", userController.getUser);
userRoutes.post("/create", userController.createUser);
userRoutes.put("/update/:id", userController.updateUser);
userRoutes.delete("/delete/:id", userController.deleteUser);

module.exports = { userRoutes };

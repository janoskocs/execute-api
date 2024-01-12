const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  getSingleUser,
  signUpUser,
  updateUser,
  deleteUser,
} = require("../controllers/users.controllers");

router.get("/", getAllUsers);

router.get("/:id", getSingleUser);

router.post("/", signUpUser);

router.patch("/:id", updateUser);

router.delete("/:id", deleteUser);

module.exports = router;

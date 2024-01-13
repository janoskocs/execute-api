const express = require("express");
const router = express.Router();
const {
  loginUser
} = require("../controllers/login.controllers");

router.post("/", loginUser);

module.exports = router;

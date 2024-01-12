const express = require("express");
const app = express();
const usersRoutes = require("./app/routes/users.routes");

app.get("/", (req, res) => {
  res.status(200).json({ isAlive: true, message: "Heeey" });
});

app.use("/api/v1/users", usersRoutes);

module.exports = app;

const knex = require('knex')(require("./knexfile"));
const express = require("express");
const app = express();
const usersRoutes = require("./app/routes/users.routes");
const todosRoutes = require("./app/routes/todos.routes");
const loginRoutes = require("./app/routes/login.routes");
const signUpRoutes = require("./app/routes/signUp.routes");


app.get("/", (req, res) => {
  res.status(200).json({ isAlive: true, message: "Heeey" });
});

app.use("/api/v1/login", loginRoutes);

app.use("/api/v1/signup", signUpRoutes);

app.use("/api/v1/todos", todosRoutes);

app.use("/api/v1/users", usersRoutes);

module.exports = app;

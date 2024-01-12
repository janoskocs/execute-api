const knex = require('knex')(require("./knexfile"));
const express = require("express");
const app = express();
const usersRoutes = require("./app/routes/users.routes");

app.get("/", (req, res) => {
  res.status(200).json({ isAlive: true, message: "Heeey" });
});

app.get("/db", async (req, res) => {
  const table = await knex.schema.createTable('users', function (table) {
    table.increments();
    table.string('name');
    table.timestamps();
  })
  const data = await knex.select("*").from("users")
  res.json(data)
})

app.use("/api/v1/users", usersRoutes);

module.exports = app;

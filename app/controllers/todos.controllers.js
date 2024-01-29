const db = require("../models/todo.model")
const getSingleTodo = async (req, res) => {
  const { userId, todoId } = req.params
  const data = await db.getTodo(userId, todoId)
  res.send(data)
}

const addSingleTodo = async (req, res) => {
  res.send('Add Single Todo')
}

const updateSingleTodo = async (req, res) => {
  res.send('Update Single Todo')
}

const deleteSingleTodo = async (req, res) => {
  res.send('Delete Single Todo')
}

module.exports = {
  getSingleTodo,
  addSingleTodo,
  updateSingleTodo,
  deleteSingleTodo
}

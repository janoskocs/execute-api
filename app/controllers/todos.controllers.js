const db = require('../models/todo.model')
const getSingleTodo = async (req, res) => {
  const { userId, todoId } = req.params
  const data = await db.getTodo(userId, todoId)
  res.send(data)
}

const addSingleTodo = async (req, res) => {
  const { userId, todo } = req.body
  const data = await db.addTodo(userId, todo)
  const response = await db.getTodo(userId, data[0])
  res.send(response)
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

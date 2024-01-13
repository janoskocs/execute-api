const express = require('express')
const router = express.Router()
const {
  getSingleTodo,
  addSingleTodo,
  updateSingleTodo,
  deleteSingleTodo
} = require('../controllers/todos.controllers')

router.get('/:userId/:todoId', getSingleTodo)

router.post('/:userId', addSingleTodo)

router.put('/:userId/:todoId', updateSingleTodo)

router.delete('/:userId/:todoId', deleteSingleTodo)

module.exports = router

const knex = require('knex')(require('../../knexfile'))

const getTodo = async (userId, todoId) => {
  return await knex('todo').where({ user_id: userId, id: todoId }).first()
}
const addTodo = async (userId, todo) => {
  const user = await knex('user').where({ id: Number(userId) }).first()
  const todoObject = {
    todo,
    handle: user.handle,
    user_id: user.id
  }
  return await knex('todo').insert(todoObject)
}

const updateTodo = async (user) => {
  return await knex('user').insert({
    first_name: user.first_name,
    last_name: user.last_name,
    handle: user.handle,
    email: user.email,
    password: user.password
  })
}
const deleteTodo = async (id) => {
  return await knex('user').where({ id }).first()
}
module.exports = {
  getTodo,
  addTodo,
  updateTodo,
  deleteTodo
}

const knex = require('knex')(require('../../knexfile'))

const getUserByEmail = async (emailAddress) => {
  return await knex('user').where({ email: emailAddress }).first()
}
const getUserById = async (id) => {
  return await knex('user').where({ id }).first()
}

const insertUser = async (user) => {
  return await knex('user').insert({
    first_name: user.first_name,
    last_name: user.last_name,
    handle: user.handle,
    email: user.email,
    password: user.password
  })
}

module.exports = {
  getUserByEmail,
  getUserById,
  insertUser
}

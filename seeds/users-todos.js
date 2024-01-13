const usersData = require('../seed-data/users');
const todosData = require('../seed-data/todos');
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  await knex('todo').del();
  await knex('user').del();
  await knex('user').insert(usersData);
  await knex('todo').insert(todosData);
};

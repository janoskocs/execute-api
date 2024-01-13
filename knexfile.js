require('dotenv').config()
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

const {
  DB_HOST,
  DB_USERNAME,
  DB_PASSWORD,
  DB_DBNAME
} = process.env

module.exports = {
  client: 'mysql2',
  connection: {
    host: DB_HOST,
    database: DB_DBNAME,
    user: DB_USERNAME,
    password: DB_PASSWORD,
    charset: 'utf8'
  }
}

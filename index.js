const app = require('./app.js')

require('dotenv').config()
const { SERVER_PORT } = process.env || 8080

app.listen(SERVER_PORT, () => {
  console.log(`Server is running on port ${SERVER_PORT}...`)
})

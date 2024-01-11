require("dotenv").config();
const app = require("./app/app");

const { SERVER_PORT } = process.env || 8080;
app.listen(SERVER_PORT, () => {
  console.log(`Server is running on port ${SERVER_PORT}...`);
});

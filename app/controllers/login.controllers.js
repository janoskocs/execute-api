const db = require('../models/user.model')
const bcrypt = require('bcrypt')
const loginUser = async (req, res) => {
  const userInput = req.body
  // Check if all data is provided
  if (!userInput.email || !userInput.password) {
    res.status(400).json({ error: 'Invalid user info. Please check email, or password inputs.' })
    return
  }

  const user = await db.getUserByEmail(userInput.email)

  const comparePassword = await bcrypt.compare(userInput.password.toString(), user.password)

  if (!comparePassword) {
    res.status(401).send({ error: 'Invalid password.' })
    return
  }

  res.status(200).send({ user: 'user logged in' })
}

module.exports = {
  loginUser
}

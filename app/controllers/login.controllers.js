const db = require('../models/user.model')
const bcrypt = require('bcrypt')
const createToken = require('../../utils/createToken.utils')

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
  delete user.password
  delete user.updated_at
  delete user.created_at
  const token = createToken(user.id)

  res.status(200).send({ ...user, token })
}

module.exports = {
  loginUser
}

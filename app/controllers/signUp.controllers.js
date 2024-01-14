const db = require('../models/user.model')
const bcrypt = require('bcrypt')

const signUpUser = async (req, res) => {
  const user = req.body
  // Check if all data is provided
  if (!user.first_name || !user.last_name || !user.handle || !user.email || !user.password) {
    res.status(400).json({ error: 'Invalid user info. Please check first name, last name, handle, email, or password inputs.' })
    return
  }
  // Check if email exists already in db
  const userExists = await db.getUserByEmail(user.email)

  if (userExists) {
    res.status(400).json({ error: 'Email address already in use.' })
    return
  }
  const salt = await bcrypt.genSalt()
  const hash = await bcrypt.hash(user.password.toString(), salt)
  user.password = hash

  const signUp = await db.insertUser(user)

  const signedUpUser = await db.getUserById(signUp[0])
  res.status(201).json(signedUpUser)
}

module.exports = {
  signUpUser
}

const knex = require('knex')(require('../../knexfile'))
const signUpUser = async (req, res) => {
  const user = req.body
  // Check if all data is provided
  if (!user.first_name || !user.last_name || !user.handle || !user.email || !user.password) {
    res.status(400).json({ error: 'Invalid user info. Please check first name, last name, handle, email, or password inputs.' })
    return
  }
  // Check if email exists already in db
  const userExists = await knex('user').where({ email: user.email }).first()

  if (userExists) {
    res.status(400).json({ error: 'Email address already in use.' })
    return
  }

  const signUp = await knex('user').insert({
    first_name: user.first_name,
    last_name: user.last_name,
    handle: user.handle,
    email: user.email,
    password: user.password
  })

  const signedUpUser = await knex('user').where({ id: signUp[0] }).first()
  res.status(201).json(signedUpUser)
}

module.exports = {
  signUpUser
}

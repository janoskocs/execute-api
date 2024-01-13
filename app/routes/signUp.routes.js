const express = require('express')
const router = express.Router()
const {
  signUpUser
} = require('../controllers/signUp.controllers')

router.post('/', signUpUser)

module.exports = router

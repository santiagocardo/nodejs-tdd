'use strict'

const axios = require('axios')

const userHandlers = require('./users')
const postsHandlers = require('./posts')

module.exports = {
  userServices: userHandlers({ axios }),
  postsServices: postsHandlers({ axios }),
}

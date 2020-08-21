'use strict'

const axios = require('axios')

const userHandlers = require('./users')

const userServices = userHandlers({ axios })

module.exports = {
  userServices
}

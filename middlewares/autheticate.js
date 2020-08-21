'use strict'

module.exports = (req, res, next) => req.header('user_id') !== 1
  ? res.sendStatus(403)
  : next()

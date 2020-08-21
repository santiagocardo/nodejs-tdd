'use strict'

module.exports = ({ axios }) => ({
  get: (_req, res) => axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then(result => res.status(200).send(result.data)),

  post: (req, res) => axios
    .post('https://jsonplaceholder.typicode.com/users', req.body)
    .then(result => res.status(201).send(result.data)),

  patch: (req, res) => axios
    .patch(`https://jsonplaceholder.typicode.com/users/${req.params.id}`, req.body)
    .then(result => res.status(200).send(result.data)),

  delete: (req, res) => axios
    .delete(`https://jsonplaceholder.typicode.com/users/${req.params.id}`)
    .then(() => res.sendStatus(204))
})

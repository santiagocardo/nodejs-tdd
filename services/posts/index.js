'use strict'

const findUser = (users, userId) => users.find(user => user.id === userId)

module.exports = ({ axios }) => ({
  post: (req, res) => axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then(({ data: users }) => findUser(users, req.body.userId))
    .then(user => user ? axios.post('https://jsonplaceholder.typicode.com/posts', req.body) : null)
    .then(result => result ? res.status(201).send(result.data) : res.sendStatus(403))
})

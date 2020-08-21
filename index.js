'use strict'

const express = require('express')

const { userServices, postsServices } = require('./services')
const authenticate = require('./middlewares/autheticate')

const app = express()

app.use(express.json())

/** User Routes */
app.get('/', userServices.get)
app.post('/', userServices.post)
app.patch('/:id', userServices.patch)
app.delete('/:id', userServices.delete)

/** Posts Routes */
app.post('/posts', authenticate, postsServices.post)

app.listen(3000, () => console.log('Listening at http://localhost:3000'))

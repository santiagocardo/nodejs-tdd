'use strict'

const express = require('express')

const { userServices } = require('./services')

const app = express()

app.use(express.json())

app.get('/', userServices.get)

app.post('/', userServices.post)

app.patch('/:id', userServices.patch)

app.delete('/:id', userServices.delete)

app.listen(3000, () => console.log('Listening at http://localhost:3000'))

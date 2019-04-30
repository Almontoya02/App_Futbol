const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

require('./Api/ligaModelo')
require('./Api/equipoModelo')
require('./Api/jugadorModelo')

const routes = require('./Api/index')

const app = express()

app.use(cors({ origin: '*' }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/', routes)

module.exports = app
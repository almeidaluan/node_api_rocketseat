const express = require('express')
const requireDir = require('require-dir')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

require('./src/db/db')

requireDir('./src/model')


app.use('/api', require('./src/routes'))

app.listen(3000)
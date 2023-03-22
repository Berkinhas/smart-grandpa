const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const swagger = require('swagger-ui-express')
const swaggerFile = require('./swagger.json')

const app = express()
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))
app.use("/api-docs", swagger.serve, swagger.setup(swaggerFile))


require('./controllers/index')(app)


module.exports = { app }
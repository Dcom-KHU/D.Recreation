const express = require('express')
const bodyparser = require('body-parser')
const app = express()
const morgan = require('morgan')
const router = express.Router()

const { Nuxt, Builder } = require('nuxt')
const isProd = process.env.NODE_ENV === 'production'
const config = require('./nuxt.config.js')

config.dev = !(isProd)
const nuxt = new Nuxt(config)
require('dotenv').config()

app.use(morgan('[:date[iso]] :method :status :url :response-time(ms) :user-agent'))
app.use('/public', express.static(__dirname + '/public'))
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: true}))
app.use(function (req, res, next) { // 
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH')
    res.header('Access-Control-Allow-Headers', 'content-type')
    next()
  })
app.use('/api', require('./api'))

const swaggerUi = require('swagger-ui-express')
const YAML = require('yamljs')
const swaggerDocument = YAML.load('./swagger/swagger.yaml')

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

if (!isProd) {
    const builder = new Builder(nuxt)
    builder.build()
}
app.use(nuxt.render)

app.listen(process.env.PORT, () => {
    console.log(`listening on port: ${process.env.PORT}`)
})
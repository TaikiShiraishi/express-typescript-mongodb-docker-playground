import express, { ErrorRequestHandler } from 'express'
import swaggerUi from 'swagger-ui-express'
import swaggerJSDoc from 'swagger-jsdoc'
import { connect } from 'mongoose'
import logger from 'morgan'
import cookieParser from 'cookie-parser'
import createError from 'http-errors'
import bodyParser from 'body-parser'
import fileUpload from 'express-fileupload'
import path from 'path'
import router from './routes'

const app = express()

// connect MongoDB
connect(`mongodb://mongo:mongo@mongo:27017/chatapp`, function (err) {
  if (err) {
    console.error(err)
  } else {
    console.log('successfully connected to MongoDB.')
  }
})

// Swagger
const options: swaggerJSDoc.Options = {
  swaggerDefinition: {
    info: {
      title: 'Express TypeScript',
      version: '1.0.0',
    },
  },
  apis: ['routes/*'],
}
app.use('/spec', swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(options)))

// view engine setup
app.set('views', path.join('views'))
app.set('view engine', 'pug')

// middleware setup
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.use(fileUpload())
app.use(express.static(path.join('public')))

// routing setup
app.use('/', router)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
}
app.use(errorHandler)

module.exports = app

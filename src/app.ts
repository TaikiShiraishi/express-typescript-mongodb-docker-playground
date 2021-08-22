import { ErrorRequestHandler, NextFunction, Request, Response } from 'express'
import swaggerUi from 'swagger-ui-express'
import swaggerJSDoc from 'swagger-jsdoc'

const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

const indexRouter = require('./routes')
const usersRouter = require('./routes/users')

const app = express()

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

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join('public')))

app.use('/', indexRouter)
app.use('/users', usersRouter)

// catch 404 and forward to error handler
app.use(function (req: Request, res: Response, next: NextFunction) {
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
import express from 'express'
import { MessageModel } from '../schema/Message'

const router = express.Router()

/**
 * @swagger
 * /:
 *   get:
 *    description: タイトルを返却する
 *    produces:
 *      - application/json
 *    response:
 *      200:
 *        description: タイトル
 */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' })
})

/**
 * @swagger
 * /:
 *   get:
 *    description: update結果を返却する
 *    produces:
 *      - application/json
 *    response:
 *      200:
 *        description: タイトル
 */
router.get('/update', function (req, res, next) {
  res.render('update', { title: 'Express' })
})

/**
 * @swagger
 * /:
 *   post:
 *    description: message を update する
 *    produces:
 *      - application/json
 *    response:
 *      200:
 *        description: 成功
 */

router.post('/update', function (req, res, next) {
  const newMessage = new MessageModel({
    username: req.body.username,
    message: req.body.message,
  })
  newMessage.save((err) => {
    if (err) throw err
    return res.redirect('/')
  })
})

export = router

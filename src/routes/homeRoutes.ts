import express from 'express'
import { MessageModel } from '../models/Message'

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
  MessageModel.find({}, function (err, msgs) {
    if (err) throw err
    res.render('index', { messages: msgs })
  })
})

export default router

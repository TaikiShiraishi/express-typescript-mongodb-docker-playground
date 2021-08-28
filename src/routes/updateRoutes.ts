import express from 'express'
import { MessageModel } from '../models/Message'

const router = express.Router()

/**
 * @swagger
 * /update:
 *   get:
 *    description: update結果を返却する
 *    response:
 *      200:
 *        description: タイトル
 */
router.get('/', function (req, res, next) {
  res.render('update', { title: 'Express' })
})

/**
 * @swagger
 * /update:
 *   post:
 *    description: message を create する
 *    produces:
 *      - application/json
 *    parameters:
 *      - name: username
 *        in: formData
 *        required: true
 *        type: string
 *        description: ユーザー名
 *      - name: message
 *        in: formData
 *        required: true
 *        type: string
 *        description: メッセージ
 *    response:
 *      200:
 *        description: 成功
 */
router.post('/', function (req, res, next) {
  const newMessage = new MessageModel({
    username: req.body.username,
    message: req.body.message,
  })
  newMessage.save((err) => {
    if (err) throw err
    return res.redirect('/')
  })
})

export default router

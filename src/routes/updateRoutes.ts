import express from 'express'
import messagesController from '../controllers/messagesController'

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
router.get('/', function (req, res) {
  res.render('update')
})

/**
 * @swagger
 * /update:
 *   post:
 *    description: message を create する
 *    produces:
 *      - multipart/form-data
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
 *      - name: image
 *        in: formData
 *        type: image/png
 *        format: binary
 *        description: 画像
 *    response:
 *      201:
 *        description: 成功
 */
router.post('/', messagesController.doCreateMessage)

export default router

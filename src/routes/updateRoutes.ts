import express from 'express'
import { MessageModel } from '../models/Message'
import { UploadedFile } from 'express-fileupload'

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
 *      200:
 *        description: 成功
 */
router.post('/', function (req, res, next) {
  if (req.files && req.files.image) {
    const image = req.files?.image as UploadedFile
    image.mv(`./public/images/update/${image.name}`, function (err) {
      if (err) throw err
      const newMessage = new MessageModel({
        username: req.body.username,
        message: req.body.message,
        image_path: `/images/update/${image.name}`,
      })
      newMessage.save((err) => {
        if (err) throw err
        return res.redirect('/')
      })
    })
  } else {
    const newMessage = new MessageModel({
      username: req.body.username,
      message: req.body.message,
    })
    newMessage.save((err) => {
      if (err) throw err
      return res.redirect('/')
    })
  }
})

export default router

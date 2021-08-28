import express from 'express'

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

export default router

import {NextFunction, Request, Response} from "express";

const express = require('express');
const router = express.Router();

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
router.get('/', function(req: Request, res: Response, next: NextFunction) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

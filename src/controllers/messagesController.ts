import { Request, Response } from 'express'
import { UploadedFile } from 'express-fileupload'
import { MessageModel } from '../models/Message'

export default {
  /**
   * メッセージを create する
   * @param req
   * @param res
   */
  doCreateMessage: (req: Request, res: Response): void => {
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
  },
}

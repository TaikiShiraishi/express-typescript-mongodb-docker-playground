import { model, Schema } from 'mongoose'

interface Message {
  username: string
  message: string
  date: Date
  image_path: string
}

const MessageSchema = new Schema<Message>({
  username: {
    type: String,
    trim: true,
    required: true,
  },
  message: {
    type: String,
    trim: true,
    required: true,
  },
  date: {
    type: Date,
    default: new Date(),
  },
  image_path: String,
})

export const MessageModel = model<Message>('Message', MessageSchema)

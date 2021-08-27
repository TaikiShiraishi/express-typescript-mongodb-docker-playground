import { model, Schema } from 'mongoose'

interface Message {
  username: string
  message: string
  date: Date
}

const MessageSchema = new Schema<Message>({
  username: String,
  message: String,
  date: { type: Date, default: new Date() },
})

export const messageModel = model<Message>('Message', MessageSchema)

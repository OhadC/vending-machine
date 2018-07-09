import { Schema } from 'mongoose'

export const Product = new Schema({
    price: Number,
    name: String
})

export const Balance = new Schema({
    itemId: Schema.Types.ObjectId,
    amount: Number
})

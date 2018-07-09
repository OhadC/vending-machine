import { Schema } from 'mongoose'

export const Product = new Schema({
    code: String,
    price: Number,
    name: String,
    amount: Number
})

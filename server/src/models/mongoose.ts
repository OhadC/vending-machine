import * as mongoose from 'mongoose'

import { models } from '.'

mongoose.connect('mongodb://localhost:27017/vendingMachine')

export const getAllProducts = () =>
    models.Product.find({}, { _id: 0, __v: 0, amount: 0 })

export const getProductByCode = (code: string) =>
    models.Product.findOne({ code }, { _id: 0, __v: 0 })

export const increaseAmount = (code, amount) =>
    models.Product.findOneAndUpdate({ code }, { $inc: { amount } })

export const decreaseAmount = (code: string, amount: number) =>
    models.Product.findOneAndUpdate({ code }, { $inc: { amount: -amount } })

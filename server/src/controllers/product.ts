import { Request, Response } from 'express'
import { db } from '../models'

import { requestHandlerFactory } from "./utils"

export const getAllProducts = requestHandlerFactory(
    (req: Request) => {
        return db.find('product')
    }
)

export const getProduct = requestHandlerFactory(
    (req: Request) => {
        const _id = req.params.id
        return db.findOne('product', { _id })
    }
)

export const buyProduct = requestHandlerFactory(
    async (req: Request) => {
        const _id = req.body._id
        const price = req.body.price
        const [product, balance] = await Promise.all([
            db.findOne('product', { _id }),
            db.findOne('balance', { _id })
        ])

        if (balance.amount === 0) {
            throw Error('Out of stoke. come back on sunday.')
        } else if (product.price > price) {
            throw Error('You are broke man. you cannot afford this.')
        }

        db.update('balance', { _id }, { amount: balance.amount - 1 })

        return product
    }
)

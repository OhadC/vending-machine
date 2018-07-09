import { Request, Response } from 'express'
import { db, jsonDb } from '../models'

import { requestHandlerFactory } from "./utils"

export const getAllProducts = requestHandlerFactory(
    async (req: Request) => {
        return db.getAllProducts()
    }
)

export const getProduct = requestHandlerFactory(
    async (req: Request) => {
        const code = req.params.code
        return db.getProductByCode(code)
    }
)

export const buyProduct = requestHandlerFactory(
    async (req: Request) => {
        const code = req.body.code
        const price = req.body.price

        const product: any = await db.getProductByCode(code)

        if (product.amount === 0) {
            throw Error('Out of stoke. come back on sunday.')
        } else if (product.price > price) {
            throw Error('You are broke man. you cannot afford this.')
        }
        return db.decreaseAmount(code)
    }
)

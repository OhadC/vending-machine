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
        const code = req.body.code
        const product: any = await db.getProductByCode(code)

        if (!product) {
            throw Error('Don\'t make up you\'re own products! we don\'t have ' + code)
        }

        return product
    }
)

export const buyProduct = requestHandlerFactory(
    async (req: Request) => {
        const code = req.body.code
        const budget = +req.body.budget

        const product: any = await db.getProductByCode(code)

        if (!product) {
            throw Error('Don\'t make up you\'re oun products! we don\'t have ' + code)
        }
        if (product.amount === 0) {
            throw Error('Out of stoke. come back on sunday.')
        }
        if (product.price > budget) {
            throw Error('You are broke man. you cannot afford this.')
        }

        return db.decreaseAmount(code, 1)
    }
)

export const refillProduct = requestHandlerFactory(
    async (req: Request) => {
        const code = req.body.code
        const amount = +req.body.amount

        const product: any = await db.getProductByCode(code)

        if (!product) {
            throw Error('Don\'t make up you\'re oun products! we don\'t have ' + code)
        }

        return db.increaseAmount(code, amount)
    }
)

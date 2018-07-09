import * as mongoose from 'mongoose'

import { models } from '.'


(async () => {
    mongoose.connect('mongodb://localhost:27017/vendingMachine');

    const products = [
        {
            code: 'a1',
            price: 4.5,
            name: 'a1'
        }, {
            code: 'a2',
            price: 1.35,
            name: 'a2'
        }, {
            code: 'a3',
            price: 7.9,
            name: 'a3'
        }, {
            code: 'a4',
            price: 9.9,
            name: 'a4'
        }, {
            code: 'a5',
            price: 10.99,
            name: 'a5'
        }, {
            code: 'a6',
            price: 5.5,
            name: 'a6'
        }, {
            code: 'a7',
            price: 4.6,
            name: 'a7'
        }
    ]

    await Promise.all([
        models.Product.deleteMany({})
    ])

    await Promise.all(
        products.map(async (product) => new models.Product({ ...product, amount: 5 }).save())
    )
    mongoose.disconnect()
})()

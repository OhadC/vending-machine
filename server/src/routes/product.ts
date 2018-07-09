import * as express from 'express'

import { productController } from '../controllers'

const router = express.Router()

router.get('/', productController.getAllProducts)
router.get('/:code', productController.getProduct)
router.post('/', productController.buyProduct)
router.post('/refill', productController.refillProduct)

export default router

import * as express from 'express'

import { productController } from '../controllers'

const router = express.Router()

router.get('/', productController.getAllProducts)
router.get('/:id', productController.getProduct)
router.post('/', productController.buyProduct)

export default router

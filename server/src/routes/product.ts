import * as express from 'express'

import { productController } from '../controllers'

const router = express.Router()

router.get('/', productController.getAllProducts)
router.get('/:id', productController.buyProduct)
// router.get('/:id', productController.buyProduct)

export default router

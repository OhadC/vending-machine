import { model } from 'mongoose'

import { schemas } from '.'

export const Product = model('product', schemas.Product)

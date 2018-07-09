import * as express from 'express'

import middlewares from './middlewares'
import * as routes from './routes'

const app = express()

app.use(middlewares)

app.use('/product', routes.product)

export default app

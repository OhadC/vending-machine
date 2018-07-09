import * as express from 'express'
import * as cors from 'cors'

const app = express()

app
    .use(express.json())
    .use(cors())

export default app

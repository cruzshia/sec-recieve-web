import express, { Request, Response } from 'express'

import next from 'next'
import nextI18next from './i18n'

const routes = require('../routes/routes')
const port = parseInt(process.env.PORT || '3000', 10)
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
// const handle = app.getRequestHandler()
const handler = routes.getRequestHandler(app)
const nextI18NextMiddleware = require('next-i18next/middleware').default
;(async () => {
  await app.prepare()
  const server = express()

  server.use(nextI18NextMiddleware(nextI18next))
  server.use(handler)
  server.get('/service', (_req: Request, res: Response) => {
    res.send({
      message: 'okoko'
    })
  })

  await server.listen(port)
  console.log(`> Ready on http://localhost:${port}`) // eslint-disable-line no-console
})()

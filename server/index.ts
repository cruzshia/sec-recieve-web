import express, { Request, Response } from 'express'

import next from 'next'

// const nextI18next = require('./i18n')
const routes = require('../routes/routes')
const port = parseInt(process.env.PORT || '3000', 10)
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const handler = routes.getRequestHandler(app)
  // const nextI18NextMiddleware = require('next-i18next/middleware').default
;(async () => {
  await app.prepare()
  const server = express()

  // server.use(nextI18NextMiddleware(nextI18next))
  server.use(handler)
  server.get('*', (req: Request, res: Response) => {
    if (req.path === '/service') {
      res.send({
        message: 'okoko'
      })
    } else {
      handle(req, res)
    }
  })

  await server.listen(port)
  console.log(`> Ready on http://localhost:${port}`) // eslint-disable-line no-console
})()

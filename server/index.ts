import { createServer } from 'http'
import next from 'next'
const { parse } = require('url')
const routes = require('../routes/routes')

const port = parseInt(process.env.PORT || '3000', 10)
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handler = routes.getRequestHandler(app)

const apiHeader = {
  'Content-Type': 'text/json',
  'Access-Control-Allow-Origin': '*',
  'X-Powered-By': 'nodejs'
}

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true)
    const { pathname } = parsedUrl

    if (pathname === '/service') {
      res.writeHead(200, apiHeader)
      res.write(
        JSON.stringify({
          message: 'okoko'
        })
      )
      res.end()
    } else {
      handler(req, res)
    }
  }).listen(port)

  // tslint:disable-next-line:no-console
  console.log(
    `> Server listening at http://localhost:${port} as ${
      dev ? 'development' : process.env.NODE_ENV
    }`
  )
})

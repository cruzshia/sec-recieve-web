const nextRoutes = require('next-routes')
const routes = (module.exports = nextRoutes())

routes.add('test', '/a/:slug', 'a')
routes.add('gogo', '/b/:foo', 'b')
routes.add('index', '/index')

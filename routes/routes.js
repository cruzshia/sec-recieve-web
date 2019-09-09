const nextRoutes = require('next-routes')
const routes = (module.exports = nextRoutes())
const accountTypeRoute = '(bank|crypto)'

routes.add('accounts', '/accounts', 'accounts')
routes.add(
  'payment_share',
  `/payment/share/:type${accountTypeRoute}/:account`,
  'paymentShare'
)
routes.add(
  'payment_embeded',
  `/payment/embeded/:type${accountTypeRoute}/:account`,
  'paymentEmbeded'
)
routes.add('index', '/', 'index')

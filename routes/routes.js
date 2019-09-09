const nextRoutes = require('next-routes')
const routes = (module.exports = nextRoutes())
const accountTypeRoute = '(bank|crypto)'

routes.add('accounts', '/accounts', 'accounts')
routes.add(
  'paymentShare',
  `/payment/share/:account_type${accountTypeRoute}/:account`,
  'paymentShare'
)
routes.add(
  'paymentEmbeded',
  `/payment/embeded/:account_type${accountTypeRoute}/:account`,
  'paymentEmbeded'
)
routes.add('index', '/', 'index')
routes.add('signUp', '/signUp', 'signUp')

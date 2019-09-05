const withSass = require('@zeit/next-sass')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = withSass({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 2,
    localIdentName: '[local]___[hash:base64:5]',
    camelCase: 'dashes'
  },
  webpack: config => {
    config.plugins.push(
      new OptimizeCssAssetsPlugin({
        cssProcessor: require('cssnano'),
        cssProcessorPluginOptions: {
          preset: ['default', { discardComments: { removeAll: true } }]
        },
        canPrint: true
      })
    )
    return config
  }
})

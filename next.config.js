const withSass = require('@zeit/next-sass')
const withTypescript = require('@zeit/next-typescript')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = withTypescript(
  withSass({
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
)

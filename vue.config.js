const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  // 选项...
  outputDir: 'dist',
  assetsDir: 'fast/static',
  productionSourceMap: false,
  configureWebpack: config => {
    let plugins = [
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
            warnings: false,
            drop_debugger: true,
            drop_console: true
          }
        },
        parallel: true
      })
    ]
    if (process.env.NODE_ENV !== 'development') {
      config.plugins = [...config.plugins, ...plugins]
    }
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [require('postcss-pxtorem')({
          rootValue: 100,
          minPixelValue: 2,
          propWhiteList: []
        })]
      }
    }
  }
}

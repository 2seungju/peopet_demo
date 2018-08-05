/* eslint-disable */
const path = require('path')
// const StyleLintPlugin = require('stylelint-webpack-plugin')
const webpack = require('webpack')
const withSass = require('@zeit/next-sass')

module.exports = withSass({
  webpack: function(config) {
    // const styleLintPlugin = new StyleLintPlugin({
    //   configFile: './stylelintrc',
    //   modules: {
    //     rules: [
    //       {
    //         test: /\.jsx?/,
    //         use: [
    //           'babel-loader',
    //           {
    //             loader: 'stylelint-custom-processor-loader',
    //             options: {
    //               configPath: './stylintrc',
    //             },
    //           },
    //         ],
    //         exclude: /node_modules/,
    //       },
    //     ],
    //   },
    // })

    // config.plugins.push(
    //     styleLintPlugin,
    //   )
    config.module.rules.push({
      test: /\.jsx?/,
      use: [
        'babel-loader'
        // 'stylelint-custom-processor-loader',
      ],
      exclude: /node_modules/
    })

    return config
  },

  exportPathMap: function() {
    return {
      // db
})

// const glob = require('glob')

// exports.exportPathMap = () => {
//   const pathMap = {}
//   glob.sync('pages/**/*.js', { ignore: 'pages/_document.js' }).forEach(s => {
//     const path = s.split(/(pages|\.)/)[2].replace(/^\/index$/, '/')
//     pathMap[path] = { page: path }
//   })
//   return pathMap
// }

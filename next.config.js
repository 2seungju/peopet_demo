/* eslint-disable */
const path = require('path')
// const StyleLintPlugin = require('stylelint-webpack-plugin')
const webpack = require('webpack')
const withSass = require('@zeit/next-sass')

module.exports = withSass({
  webpack: function (config) {
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
      'babel-loader',
      // 'stylelint-custom-processor-loader',
    ],
    exclude: /node_modules/,
  })

    return config
  },

  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/breeder': { page: '/breeder' },
      '/breeder': { page: '/breeder' },
      '/partner': { page: '/partner' },
      '/support': { page: '/support' },
      '/breederdetail/5a1e1fc16507b624c469badc': { page: '/breederdetail', query: { id: '5a1e1fc16507b624c469badc'}},
        '/breederdetail/5a1e22fe6507b624c469badd': { page: '/breederdetail', query: { id: '5a1e22fe6507b624c469badd' }},
          '/breederdetail/5a1e275a6507b624c469bade': { page: '/breederdetail', query: { id: '5a1e275a6507b624c469bade' }},

          '/breederdetail/5a1e4965933d79259c7329bd': { page: '/breederdetail', query: { id: '5a1e4965933d79259c7329bd' }},
          
      '/breederdetail/5a1e4c8c933d79259c7329be': { page: '/breederdetail', query: { id: '5a1e4c8c933d79259c7329be' } },

      '/breederdetail/5a1e50f8933d79259c7329bf': { page: '/breederdetail', query: { id: '5a1e50f8933d79259c7329bf' } },

      '/breederdetail/5a1e5424933d79259c7329c0': { page: '/breederdetail', query: { id: '5a1e5424933d79259c7329c0' } },

      '/breederdetail/5a1e5731933d79259c7329c1': { page: '/breederdetail', query: { id: '5a1e5731933d79259c7329c1' } },

      '/breederdetail/5a1e5981933d79259c7329c2': { page: '/breederdetail', query: { id: '5a1e5981933d79259c7329c2' } },

      '/breederdetail/5a1e5bae933d79259c7329c3': { page: '/breederdetail', query: { id: '5a1e5bae933d79259c7329c3' } },
      '/breederdetail/5a1e60b9933d79259c7329c5': { page: '/breederdetail', query: { id: '5a1e60b9933d79259c7329c5' } },
      '/breederdetail/5a27541333d5ee2510639fcf': { page: '/breederdetail', query: { id: '5a27541333d5ee2510639fcf' } },
      '/breederdetail/5a2758d033d5ee2510639fd0': { page: '/breederdetail', query: { id: '5a2758d033d5ee2510639fd0' } },
      '/breederdetail/5ab34ab009d24d292f2a6883': { page: '/breederdetail', query: { id: '5ab34ab009d24d292f2a6883' } },
      '/breederdetail/5ab34ad109d24d292f2a6885': { page: '/breederdetail', query: { id: '5ab34ad109d24d292f2a6885' } },
      '/breederdetail/5ab34ad909d24d292f2a6886': { page: '/breederdetail', query: { id: '5ab34ad909d24d292f2a6886' } },
      '/breederdetail/5ab34ae209d24d292f2a6887': { page: '/breederdetail', query: { id: '5ab34ae209d24d292f2a6887' } },
      '/breederdetail/5ab34aed09d24d292f2a6888': { page: '/breederdetail', query: { id: '5ab34aed09d24d292f2a6888' } },
      '/breederdetail/5ab34af509d24d292f2a6889': { page: '/breederdetail', query: { id: '5ab34af509d24d292f2a6889' } },
      '/breederdetail/5ab34aff09d24d292f2a688a': { page: '/breederdetail', query: { id: '5ab34aff09d24d292f2a688a' } },
      '/breederdetail/5ab34b0709d24d292f2a688b': { page: '/breederdetail', query: { id: '5ab34b0709d24d292f2a688b' } },
      '/breederdetail/5ab34f0109d24d292f2a688c': { page: '/breederdetail', query: { id: '5ab34f0109d24d292f2a688c' } },
      '/breederdetail/5ab34f3009d24d292f2a688d': { page: '/breederdetail', query: { id: '5ab34f3009d24d292f2a688d' } },
      '/breederdetail/5ab34f3909d24d292f2a688e': { page: '/breederdetail', query: { id: '5ab34f3909d24d292f2a688e' } },
      '/breederdetail/5ab34f4309d24d292f2a688f': { page: '/breederdetail', query: { id: '5ab34f4309d24d292f2a688f' } },
      '/breederdetail/5ab34f4e09d24d292f2a6890': { page: '/breederdetail', query: { id: '5ab34f4e09d24d292f2a6890' } },
      '/breederdetail/5ab34ad909d24d292f2a6882': { page: '/breederdetail', query: { id: '5ab34ad909d24d292f2a6882' } },
      // '/breederdetail': { page: }
    }
  },
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
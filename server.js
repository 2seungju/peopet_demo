// 참고: next.js/examples/ssr-caching
const express = require('express')
const next = require('next')
const LRUCache = require('lru-cache')
const { parse } = require('url')
const { join } = require('path')
const bodyParser = require('body-parser')
// const morgan = require('morgan')
const mongoose = require('mongoose')
const router = require('./server/router')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dir: '.', dev })
const handle = app.getRequestHandler()

// This is where we cache our rendered HTML pages
const ssrCache = new LRUCache({
  max: 100,
  maxAge: 1000 * 60 * 60, // 1hour
})

const db = mongoose.connection
db.on('error', console.error)
db.once('open', () => { console.log('Connected to mongod server' )})

app.prepare()
  .then(() => {
    const server = express()
    mongoose.connect('mongodb://peopet:peopet1!@ec2-13-124-115-77.ap-northeast-2.compute.amazonaws.com:14958/peopet');

    // Allows for cross origin domain request:
    server.use(bodyParser.json({ limit: '50mb' }))
    server.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
    server.use(bodyParser.json())
    // server.use(morgan('dev'))
    server.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*')
      res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials');
      res.header('Access-Control-Allow-Credentials', 'true')
      res.header('Cache-Control', 'no-cache')
      res.header('Pragma', 'no- cache')
      // req.headers['if-none-match'] = 'no-match-for-this';
      next()
    })

    router(server)

    // Use the `renderAndCache` utility defined below to serve pages
    server.get('/', (req, res) => {
      renderAndCache(req, res, '/')
    })

    server.get('/breeder/:dogId', (req, res) => {
      const queryParams = { dogId: req.params.dogId }
      renderAndCache(req, res, '/breeder', queryParams)
    })

    server.get('/breeder/dog/:dogId', (req, res) => {
      const queryParams = { dogId: req.params.dogId }
      renderAndCache(req, res, '/breeder', queryParams)
    })

    server.get('/breederdetail/:id', (req, res) => {
      const queryParams = { id: req.params.id }
      renderAndCache(req, res, '/breederdetail', queryParams)
    })

    server.get('*', (req, res) => {
      const parsedUrl = parse(req.url, true)
      const rootStaticFiles = [
        '/robots.txt',
        '/sitemap.xml',
        '/self_sitemap.xml',
        '/manifest.json',
        '/favicon.png',
        '/styles.scss'
      ]

      if (rootStaticFiles.indexOf(parsedUrl.pathname) > -1) {
        const path = join(__dirname, 'static', parsedUrl.pathname)
        app.serveStatic(req, res, path)
      } else {
        handle(req, res, parsedUrl)
      }
    })

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })

/*
 * NB: make sure to modify this to take into account anything that should trigger
 * an immediate page change (e.g a locale stored in req.session)
 */
function getCacheKey(req) {
  return `${req.url}`
}

function renderAndCache(req, res, pagePath, queryParams) {
  const key = getCacheKey(req)

  // If we have a page in the cache, let's serve it

  if (dev) {
    app.renderToHTML(req, res, pagePath, queryParams)
      .then((html) => {
        res.send(html)
      })
      .catch((err) => {
        app.renderError(err, req, res, pagePath, queryParams)
      })
  } else {
    if (ssrCache.has(key)) {
      console.log(`CACHE HIT: ${key}`)
      res.send(ssrCache.get(key))
      return
    }

    // If not let's render the page into HTML
    app.renderToHTML(req, res, pagePath, queryParams)
      .then((html) => {
        // Let's cache this page
        console.log(`CACHE MISS: ${key}`)
        ssrCache.set(key, html)

        res.send(html)
      })
      .catch((err) => {
        app.renderError(err, req, res, pagePath, queryParams)
      })
  }
}

// if (process.env.IN_LAMBDA) {
//   module.exports = createServer()
// } else {
//   app.prepare().then(() => {
//     const server = createServer()
//     server.listen(port)
//   })
// }
// function createServer() {
//   const server = express()

//   server.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*')
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
//     next()
//   })

//   // Use the `renderAndCache` utility defined below to serve pages
//   server.get('/', (req, res) => {
//     renderAndCache(req, res, '/')
//   })

//   server.get('/breeder/:dogId', (req, res) => {
//     const queryParams = { dogId: req.params.dogId }
//     renderAndCache(req, res, '/breeder', queryParams)
//   })

//   server.get('/breeder/dog/:dogId', (req, res) => {
//     const queryParams = { dogId: req.params.dogId }
//     renderAndCache(req, res, '/breeder', queryParams)
//   })

//   server.get('/breederdetail/:id', (req, res) => {
//     const queryParams = { id: req.params.id }
//     renderAndCache(req, res, '/breederdetail', queryParams)
//   })

//   server.get('*', (req, res) => {
//     const parsedUrl = parse(req.url, true)
//     const rootStaticFiles = [
//       '/robots.txt',
//       '/sitemap.xml',
//       '/manifest.json',
//       '/favicon.png',
//       '/home-hero.jpeg',
//       '/styles.scss'
//     ]

//     if (rootStaticFiles.indexOf(parsedUrl.pathname) > -1) {
//       const path = join(__dirname, 'static', parsedUrl.pathname)
//       app.serveStatic(req, res, path)
//     } else {
//       handle(req, res, parsedUrl)
//     }
//   })

//   return server
// }


const path = require('path')
const glob = require('glob')
const fs = require('fs')
const axios = require('axios')

const fetchServerConfig = 'https://www.peopet.co.kr'

const SITE_ROOT = process.env.SITE_ROOT || 'https://www.peopet.co.kr'
const SOURCE = process.env.SOURCE || path.join(__dirname, '..', 'pages', '/**/*.js')
const DESTINATION = process.env.DESTINATION || path.join(__dirname, '..', 'static', 'self_sitemap.xml')

const diskPages = glob.sync(SOURCE) 

let xml = ''
xml += '<?xml version="1.0" encoding="UTF-8"?>'
xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">'

async function generateSitemap() {
  // axios.get(`${fetchServerConfig}/api/breeder`)
  //   .then(res => console.log(res))
  //   .catch(err => console.log(err))

  const breederData = await axios.get(`${fetchServerConfig}/api/breeder`)
  const dogData = await axios.get(`${fetchServerConfig}/api/dog`)
  const breederList = breederData.data
  const dogList = dogData.data

  await Promise.all(diskPages.map(async page => {
    const stats = fs.statSync(page)
    const modDate = new Date(stats.mtime)
    const lastMod = `${modDate.getFullYear()}-${(`0${(modDate.getMonth() + 1)}`).slice(-2)}-${(`0${modDate.getDate()}`).slice(-2)}`
    
    const removeUrlPage = page.replace(path.join(__dirname, '..', 'pages'), '')
    const purePageName = removeUrlPage.replace(/.js$/, '')
    let urlPage = `${SITE_ROOT}${purePageName}`
    
    if (urlPage.match(/.*\/index$/)) {
      urlPage = urlPage.replace(/(.*)index$/, '$1')
    }

    if (purePageName === '/breeder') {
      breederList.map(breeder => {
        xml += '<url>'
        xml += `<loc>${urlPage}/${breeder._id}</loc>`
        xml += `<lastmod>${lastMod}</lastmod>`
        xml += `<changefreq>always</changefreq>`
        xml += `<priority>0.5</priority>`
        xml += '</url>'
      })
    }

    if (purePageName === '/breederdetail') {
      dogList.map(dog => {
        xml += '<url>'
        xml += `<loc>${urlPage}/${dog._id}</loc>`
        xml += `<lastmod>${lastMod}</lastmod>`
        xml += `<changefreq>always</changefreq>`
        xml += `<priority>0.5</priority>`
        xml += '</url>'
      })
    }

    if (purePageName === '/_document') {
      return true
    }

    if (purePageName === '/admin') {
      return true
    }

    if (purePageName === '/_error') {
      return true
    }

    console.log(purePageName)
    xml += '<url>'
    xml += `<loc>${urlPage}</loc>`
    xml += `<lastmod>${lastMod}</lastmod>`
    xml += `<changefreq>always</changefreq>`
    xml += `<priority>0.5</priority>`
    xml += '</url>'
  }))

  xml += '</urlset>'
  fs.writeFileSync(DESTINATION, xml)
  // fs.writeFileSync(DESTINATION, '</urlset>')
}


// diskPages.forEach((page) => {
//   const stats = fs.statSync(page)
//   const modDate = new Date(stats.mtime)
//   const lastMod = `${modDate.getFullYear()}-${(`0${(modDate.getMonth() + 1)}`).slice(-2)}-${(`0${modDate.getDate()}`).slice(-2)}`

//   page = page.replace(path.join(__dirname, '..', 'pages'), '')
//   page = page.replace(/.js$/, '')
//   page = `${SITE_ROOT}${page}`

//   if (page.match(/.*\/index$/)) {
//     page = page.replace(/(.*)index$/, '$1')
//   }

//   xml += '<url>'
//   xml += `<loc>${page}</loc>`
//   xml += `<lastmod>${lastMod}</lastmod>`
//   xml += `<changefreq>always</changefreq>`
//   xml += `<priority>0.5</priority>`
//   xml += '</url>'
// })

generateSitemap()

// xml += '</urlset>'


// console.log(`Wrote sitemap for ${diskPages.length} pages to ${DESTINATION}`)
// fs.writeFileSync(DESTINATION, '</urlset>')
// console.log('!')
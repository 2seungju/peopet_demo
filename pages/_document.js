import React from 'react'
import useragent from 'useragent'
import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

const resetStyles = `
  *,::after,::before{
    background-repeat:no-repeat;
    box-sizing:inherit
  }
  ::after,::before{
    text-decoration:inherit;
    vertical-align:inherit
  }
  html{
    box-sizing:border-box;
    cursor:default;
    -ms-text-size-adjust:100%;
    -webkit-text-size-adjust:100%
  }
  article,aside,footer,header,nav,section{
    display:block
  }
  body{
    margin:0
  }
  h1{
    font-size:2em;
    margin:.67em 0
  }
  figcaption,figure,main{
    display:block
  }
  figure{
    margin:1em 40px
  }
  hr{
    box-sizing:content-box;
    height:0;
    overflow:visible
  }
  nav ol,nav ul{
    list-style:none
  }
  pre{
    font-family:monospace,monospace;
    font-size:1em
  }
  a{
    text-decoration:none;
    color:inherit;
    background-color:transparent;
    -webkit-text-decoration-skip:objects
  }
  abbr[title]{
    border-bottom:none;
    text-decoration:underline;
    text-decoration:underline
    dotted
  }
  b,strong{
    font-weight:inherit
  }
  b,strong{
    font-weight:bolder
  }
  code,kbd,samp{
    font-family:monospace,monospace;
    font-size:1em
  }
  dfn{
    font-style:italic
  }
  mark{
    background-color:#ff0;
    color:#000
  }
  small{
    font-size:80%
  }
  sub,sup{
    font-size:75%;
    line-height:0;
    position:relative;
    vertical-align:baseline
  }
  sub{
    bottom:-.25em
  }
  sup{
    top:-.5em
  }
  ::-moz-selection{
    background-color:#b3d4fc;
    color:#000;
    text-shadow:none
  }
  ::selection{
    background-color:#b3d4fc;
    color:#000;
    text-shadow:none
  }
  audio,canvas,iframe,img,svg,video{
    vertical-align:middle
  }
  audio,video{
    display:inline-block
  }
  audio:not([controls]){
    display:none;
    height:0
  }
  img{
    border-style:none
  }
  svg{
    fill:currentColor
  }
  svg:not(:root){
    overflow:hidden
  }
  table{
    border-collapse:collapse
  }
  button,input,optgroup,select,textarea{
    margin:0
  }
  button,input,select,textarea{
    color:inherit;
    font-size:inherit;
    line-height:inherit
  }
  button,input{
    overflow:visible
  }
  button,select{
    text-transform:none
  }
  [type=reset],[type=submit],button,html [type=button]{
    -webkit-appearance:button
  }
  [type=button]::-moz-focus-inner,
  [type=reset]::-moz-focus-inner,
  [type=submit]::-moz-focus-inner,
  button::-moz-focus-inner{
    border-style:none;
    padding:0
  }
  [type=button]:-moz-focusring,
  [type=reset]:-moz-focusring,
  [type=submit]:-moz-focusring,
  button:-moz-focusring{
    outline:1px dotted ButtonText
  }
  legend{
    box-sizing:border-box;
    color:inherit;
    display:table;
    max-width:100%;
    padding:0;
    white-space:normal
  }
  progress{
    display:inline-block;
    vertical-align:baseline
  }
  textarea{
    overflow:auto;
    resize:vertical
  }
  [type=checkbox],[type=radio]{
    box-sizing:border-box;
    padding:0
  }
  [type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{
    height:auto
  }
  [type=search]{
    -webkit-appearance:textfield;
    outline-offset:-2px
  }
  [type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{
    -webkit-appearance:none
  }
  ::-webkit-file-upload-button{
    -webkit-appearance:button;
    font:inherit
  }
  details,menu{
    display:block
  }
  summary{
    display:list-item
  }
  canvas{
    display:inline-block
  }
  template{
    display:none
  }
  [tabindex],a,area,button,input,label,select,summary,textarea{
    -ms-touch-action:manipulation;
    touch-action:manipulation
  }
  [hidden]{
    display:none
  }
  [aria-busy=true]{
    cursor:progress
  }
  [aria-controls]{
    cursor:pointer
  }
  [aria-hidden=false][hidden]:not(:focus){
    clip:rect(0,0,0,0);
    display:inherit;
    position:absolute
  }
  [aria-disabled]{
    cursor:default
  }

  html, body {
    font-size: 16px;
    line-height: 1.6;
    font-style: normal;
    padding: 0;
    margin: 0;
    height: 100%;
    -webkit-font-smoothing: subpixel-antialiased;
    font-family: 'Spoqa Han Sans', 'Spoqa Han Sans JP', 'Sans-serif';
  }

  body {
  }

  .root {
    position: relative;
    height: 100%;
  }

  #__next {
    position: relative;
    height: 100%;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
  }
`

export default class MyDocument extends Document {
  static getInitialProps({ renderPage, req }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    const ua = useragent.parse(req.headers['user-agent']) // here
    return { ...page, styleTags, useragents: ua }
  }

  /*
    TODO:
    1. manifest.json image 추가
    2. theme-color
  */

  render() {
    const { styleTags } = this.props

    return (
      <html lang="ko">
        <Head>
          <title>페오펫 :: Peopet </title>
          <link rel="icon" type="image/png" href="/static/favicon.png" />
          <link rel="stylesheet" href="/_next/static/style.css" />
          <link rel="manifest" href="/static/manifest.json" />
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat|Noto+Sans"
            rel="stylesheet"
          />
          <link
            href="//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css"
            rel="stylesheet"
            type="text/css"
          />
          <link
            href="//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-jp.css"
            rel="stylesheet"
            type="text/css"
          />
          <meta charSet="euc-kr" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <meta httpEquiv="Content-Type" content="text/html;charset=utf-8" />
          <meta httpEquiv="Content-Script-Type" content="text/javascript" />
          <meta httpEquiv="Content-Style-Type" content="text/css" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"
          />

          <meta name="theme-color" content="#004ca4" />
          <meta name="author" content="페오펫(peopet)" />
          <meta name="title" content="페오펫 :: Peopet" />
          <meta
            name="description"
            content="강아지 브리더의 체계적인 관리를 받은 건강한 강아지를 페오펫에서 분양받으세요!"
          />
          <meta
            name="keyword"
            content="브리더,강아지 브리더,전문견사,건강한 강아지,전문 브리더,강아지 분양,강아지 입양"
          />
          <meta property="fb:app_id" content="630799187279808" />

          <style dangerouslySetInnerHTML={{ __html: resetStyles }} />
          {styleTags}
          <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/6.23.0/polyfill.min.js" />
          {/* <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-MVS64F9');` }} /> */}
          {process.env.NODE_ENV === 'production' && (
            <script
              dangerouslySetInnerHTML={{
                __html:
                  "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-MVS64F9');"
              }}
            />
          )}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: `{
                "@context": "http://schema.org",
                "@type": "Person",
                "name": "페오펫_peopet",
                "url": "https://www.peopet.co.kr",
                "sameAs": [
                  "https://www.facebook.com/peopleNpet",
                  "http://blog.naver.com/peopet",
                  "http://www.instagram.com/peo_pet"
                ]
              }`
            }}
          />
          <meta
            name="google-site-verification"
            content="u73GRNDDuj4e7nJFLiY8NcERojS4dPScTUBo30Sudho"
          />
        </Head>
        <body>
          <div className="root">
            <Main />
          </div>
          <NextScript />
        </body>
      </html>
    )
  }
}

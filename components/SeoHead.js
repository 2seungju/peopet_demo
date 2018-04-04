import NextHead from 'next/head'
import { Component } from 'react'

/*
  TODO:
  atom.png 파일 추가
  meta 태그 추가
*/


export default class SeoHead extends Component {
  render() {
    const {
      title = 'peopet',
      description,
      image,
      children,
      url,
    } = this.props
    return (
      <NextHead>
        <title>
          {title}
        </title>
        {/* <meta name="description" content={description} /> */}
        <meta name="description" content="브리더, 전문브리더, 강아지 브리더, 반려견, 강아지 분양, 강아지 브리더 분양, 페키니즈, 포메라니안, 전문견사" />
        <meta property="keywords" content="브리더, 전문브리더, 강아지 브리더, 반려견, 강아지 분양, 강아지 브리더 분양, 페키니즈, 포메라니안, 전문견사" />

        <link itemProp="url" href="http://peopet.co.kr/" />
        <meta itemProp="name" content={title} />
        <meta itemProp="description" content={description} />
        <meta itemProp="image" content="/static/atom.png" />

        <meta
          name="google-site-verification"
          content="kC4Y5cVvYNKPj1kleZi45vi1vZdKgN3bvdQKUYkyBFE"
        />

        <meta property="og:locale" content="ko_KR" />
        <meta property="og:type" content="website" />
        {/* <meta property="og:title" content={title} /> */}
        <meta property="og:title" content="페오펫 | 강아지 브리더 | peopet | 강아지 분양 | 페키니즈" />
        {/* <meta property="og:url" content={url} /> */}
        <meta property="og:url" content="http://peopet.co.kr" />
        <meta property="og:image" content={image} />
        <meta property="og:image:height" content="652" />
        <meta property="og:image:width" content="652" />
        {/* <meta property="og:description" content={description} /> */}
        <meta property="og:description" content="브리더, 전문브리더, 강아지 브리더, 반려견, 강아지 분양, 강아지 브리더 분양, 페키니즈, 포메라니안, 전문견사" />
        <meta property="og:site_name" content="페오펫_peopet" />

        <link rel="canonical" href="http://peopet.co.kr" />

        {children}

        <link rel="shortcut icon" href="/static/favicon.png" />
        <link rel="icon" href="/static/favicon.png" />
      </NextHead>
    )
  }
}

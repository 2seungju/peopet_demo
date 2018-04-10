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
      title = '페오펫 :: peopet',
      description = '강아지 브리더의 체계적인 관리를 받은 건강한 강아지를 페오펫에서 분양받으세요!',
      image = 'https://www.peopet.co.kr/static/favicon.png',
      children,
      url = 'https://www.peopet.co.kr'
    } = this.props
    return (
      <NextHead>
        <title>
          {title}
        </title>
        <meta name="description" content={description} />
        <meta name="keywords" content="브리더,강아지 브리더,전문견사,건강한 강아지,전문 브리더,강아지 분양,강아지 입양" />

        {/* Open Graph */}
        <link itemProp="url" href={url} />
        <meta itemProp="name" content={title} />
        <meta itemProp="description" content={description} />
        <meta itemProp="image" content="/static/favicon.png" />

        <meta property="og:locale" content="ko_KR" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={image} />
        <meta property="og:image:height" content="652" />
        <meta property="og:image:width" content="652" />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content="페오펫(Peopet)" />
        <meta property="og:article:autor" content="페오펫(Peopet)" />
        <meta property="og:article:autor:url" content="https://www.peopet.co.kr" />

        <link rel="canonical" href="https://www.peopet.co.kr" />

        {children}

        <link rel="shortcut icon" href="/static/favicon.png" />
        <link rel="icon" href="/static/favicon.png" />
      </NextHead>
    )
  }
}

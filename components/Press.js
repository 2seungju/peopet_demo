// 페오펫 페이지에서 관련 기사를 보여주는 페이지
// 모바일 버전에서는 메뉴에서도 확인 가능함

import React, { Component } from 'react'
import styled from 'styled-components'

import rem from 'utils/rem'
import media from 'utils/media'
import { peacockBlue, white2, white, black } from 'utils/colors'

const Arrow = '/static/images/peopetnews_arrow.png'

const Wrapper = styled.div`
  padding: ${rem(100)} 0;
  display: flex;
  height: 100%;
  color: #333333;
  flex-direction: column;
  width: 65%;
  margin: auto;
  ${media.mobile`
    width: 85%;
    padding: 0;
  `};
`

const Title = styled.p`
  font-size: ${rem(50)};
  font-weight: bold;
  ${media.mobile`
    font-size: ${rem(28)};
  `};
`

const ContentWrapper = styled.div`
  position: relative;
  opacity: 0.5;
  width: 100%;

  :hover {
    opacity: 1;
    transition: transform ease-in 0.1s;
    transform: scale(1.01);
  }

  ${media.mobile`
    opacity: 1;
    margin-top: 10%;
  `};
`

const Content = styled.div`
  display: flex;
  font-size: ${p => (p.up ? '18px' : '20px')};
  margin-bottom: ${rem(22)};
  margin-top: ${rem(25)};
`

const Link = styled.a``

const Bar = styled.div`
  border: 0.5px solid rgba(0, 0, 0, 0.5);
  margin: ${p => p.vertical && '0 2%'};
  width: ${p => p.horizon && '100%'};
`

const Article = styled.div`
  color: ${p => p.press && peacockBlue};
  font-weight: ${p => p.press && 'bold'};
  width: ${p => p.summary && '90%'};
`
const ImgWrapper = styled.div`
  position: absolute;
  right: 5%;
  ${media.tablet`
  display: none;
`};
`

const Img = styled.img`
  width: ${rem(30)};
  height: ${rem(30)};
`

const PressList = [
  {
    PressName: '더나은미래',
    Reporter: '김경하 부편집장',
    Summary: '태어난 곳을 확인할 수 있는 반려견 입양 서비스, 페오펫',
    Link: 'http://futurechosun.com/archives/29932'
  },
  {
    PressName: '동그람이',
    Reporter: '김경준',
    Summary: '반려 문화를 성숙시키는 힘, 브리더를 찾아나선 청년들',
    Link:
      'https://post.naver.com/viewer/postView.nhn?volumeNo=11471713&memberNo=38419283&vType=VERTICAL'
  },
  {
    PressName: '매일경제',
    Reporter: '유태양 기자',
    Summary: '펫코노미를 겨냥한 전문 서비스 페오펫',
    Link: 'http://news.mk.co.kr/newsRead.php?year=2018&no=214898'
  },
  {
    PressName: '슾터뷰',
    Reporter: '스파크플러스',
    Summary: '‘건강한 반려견과 함께 행복한 삶을 온전히 누리세요’',
    Link: 'https://sparkplusofficial.blog.me/221270549137'
  },

  {
    PressName: '데일리벳',
    Reporter: '윤상준 기자',
    Summary: '`입양부터 의료상담, 장례까지` 반려동물 라이프사이클 맞춘 서비스',
    Link: 'http://www.dailyvet.co.kr/news/industry/75157'
  },
  {
    PressName: '뉴스원',
    Reporter: '이병욱 기자',
    Summary: '반려동물 요람부터 무덤까지 책임지는 펫 스타트업 ',
    Link: 'http://news1.kr/articles/?2959902'
  },
  {
    PressName: '서울경제',
    Reporter: '한동훈 기자',
    Summary: '반려동물도 웰빙시대',
    Link: 'http://www.sedaily.com/NewsView/1OEQFDC1J3'
  },
  {
    PressName: '벤처스퀘어',
    Reporter: '이예화 기자',
    Summary: '우수 스타트업 17 선정',
    Link: 'http://www.venturesquare.net/756965'
  }
]
export default class Press extends Component {
  render() {
    return (
      <Wrapper>
        <Title>언론에 비친 페오펫</Title>

        {PressList.map((press, i) => (
          <ContentWrapper key={i}>
            <Link href={press.Link} target="_blank">
              <Content up>
                <Article press>{press.PressName}</Article>
                <Bar vertical />
                <Article>{press.Reporter}</Article>
              </Content>
              <Content down>
                <Article summary>{press.Summary}</Article>
                <ImgWrapper>
                  <Img src={Arrow} alt="arrow" />
                </ImgWrapper>
              </Content>
            </Link>
            <Bar horizon />
          </ContentWrapper>
        ))}
      </Wrapper>
    )
  }
}

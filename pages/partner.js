import React, { Component } from 'react'
// import axios from 'axios'
import styled from 'styled-components'

import Layout from 'components/Layout'
// import { BuildServiceIcon } from 'components/Icons'
import { peacockBlue, white2 } from 'utils/colors'
import media from 'utils/media'
import rem from 'utils/rem'
// import { SearchIcon } from '../components/Icons'
const PartnerBannerImgUrl = '/static/images/w_partner_banner.jpg'


// const PartnerBannerImg = () => ( // 일단 여기에 뒀음
//   <Img banner src={PartnerBannerImgUrl} alt="PartnerBannerImg" />
// )

const Wrapper = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  height: 100%;
  width: ${rem(1000)}; 
  margin: auto;
  color: #333333;
  ${media.tablet`
  width:95%;
  `}

  ${media.mobile`
  width:90%;
  `}
`

const TitleWrapper = styled.div`
  width: 100%;
  margin-top: ${rem(30)};
  height: ${rem(250)};
  display: flex;
  flex-direction: column;
  justify-content: center;

`

const Title = styled.p`
  font-size: ${p => p.bold ? rem(25) : rem(18)};
  height:${p => p.bold ? rem(33) : rem(21)};
  color: #333333;
  text-align: center;
  margin: 0;
  font-weight: ${p => p.bold && 'bold'};
  opacity: ${p => !p.bold && 0.5};
  margin-top:${rem(20)};

`

const BannerWrapper = styled.div`
  margin-bottom: ${rem(59)};
  position: relative;
  text-align: center;
  height: ${rem(198)};
  margin: ${rem(-20)} auto 0;
  ${media.mobile`
  margin-top: ${rem(-70)};
  `};
`

// 일단 모바일일때 배너 그림 뺐음
const Banner = styled.img`

  ${media.tablet`
    width: ${rem(676)};
    height: ${rem(189)};
  `};

  ${media.mobile`
  display: none;
  `};
`

const BannerWord = styled.div`
  position: absolute;
  top: ${p => p.a && '25%'};
  top: ${p => p.b && '45%'};
  top: ${p => (p.c || p.d) && '60%'};
  left: 55%;
  color: #333333;
  color: ${p => p.a && white2};
  margin-left: -40%;
  background-color: ${p => p.a && '#67ccdb'};
  font-size: ${p => p.a && rem(15)};
  font-size: ${p => !p.a && rem(25)};
  font-weight: ${p => p.b && 'bold'};
  border-radius: ${p => p.a && rem(14.5)};
  width: ${p => p.a && rem(91)};
  text-align: center;

  ${media.mobile`
    font-size: ${p => !p.a && rem(18)};
    top: none;
    left:58%;
  `}
`

const BoxWrapper = styled.div`

  display: flex;
  flex-wrap: wrap;
  margin-left: ${rem(18)};
  justify-content: center;
  padding-bottom: ${rem(150)};
  
  ${media.mobile`
    margin-top: ${rem(-40)};
  `}
`

const MembershipBox = styled.div`
  width: ${rem(166)};

  background-color: #ffffff;
  border: solid 1px rgba(0, 0, 0, .1);
  margin-top: ${rem(20)};
  margin-right: ${rem(18)};
  ${media.tablet`
  margin-top: ${rem(15)};
  width: ${rem(213)};
  height: ${rem(239)};
`}
  ${media.mobile`
    margin-top: ${rem(15)};
    width: ${rem(270)};
    height: ${rem(303)};
  `}
  :hover {
    cursor:pointer;
  }
`
const BoxWordWrapper = styled.p`
  flex-direction: column;
  margin: 0;
`

const BoxWord = styled.p`
  height: ${rem(16)};
  font-weight: ${p => p.bold ? 'bold' : 300};
  font-size: ${rem(13)};
  margin-left: ${rem(15.7)};
  margin-bottom: 0;
  margin-top: 0;
  ${media.mobile`
  font-size: ${rem(20)};
  margin-bottom: ${p => !p.bold && '5px'};
  `}
`
// 글씨가 많아서 자리 바꿈
const BoxFooter = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  border-top:  solid 1px rgba(0, 0, 0, .1);
  padding-top: ${rem(10.7)};
  padding-bottom: ${rem(20)};
  width: 90%;
  margin: auto;
  height: ${rem(57)};
  font-size: ${rem(11)};
  justify-content: space-around;
`

const BoxDivWrapper = styled.div`

`

const BlueBox = styled.div`
background: ${peacockBlue};
width: ${rem(40)};
height: ${rem(18)};
color:#ffffff;

${media.mobile`
font-size: ${rem(15)};
width: ${rem(55.5)};
height: ${rem(24.1)};
`}
`

const BoxDiv = styled.div`
  text-align: left;
  margin-left: 6%;
  opacity: 0.5;
  width: ${rem(100)};
  ${media.mobile`
  width: ${rem(170)};
  font-size: ${rem(15)};
  height: ${rem(24.1)};
  `}
`

const ImgWrapper = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  margin-top: 7%;
`

const Img = styled.img`
  width: 70%;
  margin: auto;
  ${media.tablet`

  `}
  ${media.mobile`

  `}
`

const Link = styled.a`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-flow: row wrap;
  justify-content: flex-start;
`

export default class Blog extends Component {

  state = {
    partners: [
      { id: 0, name: '유기견 없는 도시', contents: '반려견 교육', benefit: '수강료 50% 할인', url: 'http://www.clearcity.kr/', logo: '/static/images/logo/membership_abandoneddogcitylogo.png' },
      { id: 1, name: '앙꼬네 미용실', contents: '펫 미용', benefit: '첫 방문 시 10% 할인', url: 'https://ancoshop.modoo.at/', logo: '/static/images/logo/membership_anggologo.png' },
      { id: 2, name: '베이컨 박스', contents: '정기선물 배송서비스', benefit: '첫 구매 시 30% 할인', url: 'https://www.baconbox.co/', logo: '/static/images/logo/membership_baconboxlogo2.png' },
      { id: 3, name: '코르누보', contents: '사진 촬용 및 용품', benefit: '스튜디오 촬영, 목줄 하네스 30% 할인', url: 'http://cornouveau.com/', logo: '/static/images/logo/membership_cornouveaulogo.png' },
      { id: 4, name: '닥터 케이', contents: '건국대학교 수의대 사료', benefit: '구매 시 30% 할인', url: 'https://goo.gl/Fic9Dg', logo: '/static/images/logo/membership_doctorklogo2.png' },
      { id: 5, name: '도그 메이트', contents: '펫시팅', benefit: '첫 펫시팅 시 15% 할인', url: 'https://www.dogmate.co.kr/', logo: '/static/images/logo/membership_dogmatelogo.png' },
      { id: 6, name: '21그램', contents: '반려동물 장례 서비스', benefit: '장례 이용시 수의 제공', url: 'http://21gram.co.kr/', logo: '/static/images/logo/membership_21gramlogo.png' },
      { id: 7, name: '핏펫', contents: '반려동물 Lifeware', benefit: '펫시팅 시 20% 할인', url: 'http://fitpet.co.kr/', logo: '/static/images/logo/membership_fitpetlogo3.png' },
      { id: 8, name: '제이네 운동장', contents: '강아지 운동장', benefit: '생후 6개월까지 운동장 입장료 면제', url: 'https://blog.naver.com/jground_official', logo: '/static/images/logo/membership_jgroundlogo.png' },
      { id: 9, name: '러브핫핏', contents: '반려 동물 스타일링', benefit: '첫 구매 시 20% 할인', url: 'http://lovehotfit.com/', logo: '/static/images/logo/membership_lovehotfitlogo.png' },
      { id: 10, name: '박중현 작가', contents: '반려견 그림작가', benefit: '그림 구매 시 만원 할인', url: 'https://www.instagram.com/artcon_park/', logo: '/static/images/logo/membership_parkjunghyeonlogo.png' },
      { id: 11, name: '펫프렌즈', contents: '반려견 용품구매', benefit: '첫 구매시 20%, 이후 3~5%할인(무료배송)', url: 'http://www.pet-friends.co.kr/', logo: '/static/images/logo/membership_petfriendslogo2.png' },
      { id: 12, name: '펫미업', contents: '반려동물 셔틀버스', benefit: '첫 이용 시 2,000원 할인', url: 'https://www.petmeup.co.kr/', logo: '/static/images/logo/membership_petmeuplogo2.png' },
      { id: 13, name: '펫트너', contents: '수의사 펫시팅', benefit: '펫시팅 시 20% 할인', url: 'https://petner.kr/', logo: '/static/images/logo/membership_petnerlogo.png' },
      { id: 14, name: '서재성 작가', contents: '반려견 그림작가', benefit: '그림의뢰 시 20% 할인', url: 'https://www.instagram.com/icegido/?hl=ko', logo: '/static/images/logo/membership_seojeasunglogo.png' },
    ]
  }

  static getInitialProps({ query: { id } }) {
    return { id }
  }

  // fetchMember = () => {
  //   fetch('../partner.json')
  //     .then(res => console.log(res))
  //     .catch(err => console.log(err))
  // }

  // componentDidMount() {
  //   this.fetchMember()
  // }

  render() {
    const { partners } = this.state
    const partner = partners.map(member => {
      return (
        <MembershipBox key={member.id}>
          <Link href={member.url} target="_blank">
            <ImgWrapper>
              <Img src={member.logo} alt={member.name} size={member.id} />
            </ImgWrapper>
            <BoxWordWrapper>
              <BoxWord>{member.contents}</BoxWord>
              <BoxWord bold>{member.name}</BoxWord>
            </BoxWordWrapper>
            <BoxFooter>
              <BlueBox>
                멤버십
              </BlueBox>
              <BoxDivWrapper>
                <BoxDiv>{member.benefit}</BoxDiv>
              </BoxDivWrapper>
            </BoxFooter>
          </Link>
        </MembershipBox>
      )
    })
    return (
      <Layout background title="partner">
        <Wrapper>
          <TitleWrapper>
            <Title bold>페오펫 멤버십 제휴사 혜택</Title>
            <Title>다양한 페오펫 멤버십을 경험해 보세요!</Title>
          </TitleWrapper>
          <BannerWrapper>
            <Banner src={PartnerBannerImgUrl} alt="bannerImg" />
            <BannerWord a>첫 입양시</BannerWord>
            <BannerWord b>5만원 상당의</BannerWord>
            <BannerWord c><b>GIFT BOX</b>를 선물로 드립니다.</BannerWord> { /* GIFT BOX // 선물로 드립니다. 분리 */ }
          </BannerWrapper>
          <BoxWrapper>
            {partner}
          </BoxWrapper>
        </Wrapper>
      </Layout>
    )
  }
}


  // width: 60%;
  // width: ${p => p.size === 0 && rem(130)};
  // width: ${p => p.size === 1 && rem(90)};
  // width: ${p => p.size === 2 && rem(70)};
  // width: ${p => p.size === 3 && rem(130)};
  // width: ${p => p.size === 4 && rem(80)};
  // width: ${p => p.size === 5 && rem(130)};
  // width: ${p => p.size === 6 && rem(130)};
  // width: ${p => p.size === 7 && rem(70)};
  // width: ${p => p.size === 8 && rem(130)};
  // width: ${p => p.size === 9 && rem(70)};
  // width: ${p => p.size === 10 && rem(70)};
  // width: ${p => p.size === 11 && rem(70)};
  // width: ${p => p.size === 12 && rem(80)};
  // width: ${p => p.size === 13 && rem(110)};
  // width: ${p => p.size === 14 && rem(110)};
  // height: ${rem(40)};
    // margin-top: ${rem(28)};

import React, { Component } from 'react'
import styled, { css, types } from 'styled-components'
import axios from 'axios'
import Layout from 'components/Layout'
import Link from 'components/Link'
import BreederList from 'components/Breeder/BreederList'
import { fetchServerConfig } from 'config/config'
import { warmGrey2, squash, black, pooBrown, peacockBlue, white, white2, dark } from 'utils/colors'
import rem from 'utils/rem'
import Bar from 'components/Bar'
import media from 'utils/media'
import placeholder from 'utils/placeholder'
import { RightDropIcon, HomePartnerRightIcon } from 'components/Icons'
import Review from 'components/Review'
import AdoptionCard from 'components/AdoptionCard'

// import HomeHeroImg from '../static/home-hero.jpeg'

const HomeSearchUrl = '/static/images/home-search@3x.png'
const Main = '/static/images/Main.jpeg'
const TabletMain = '/static/images/T_Main.jpeg'
const MobileMain = '/static/images/M_Main.jpeg'
const DNA = '/static/images/DNA.png'
const Vaccine = '/static/images/Vaccine.png'
const Love = '/static/images/Love.png'
const healthy = '/static/images/healthy.png'
const check = '/static/images/check.png'
const benefit = '/static/images/benefit.png'
// const Differnt = [
//   {
//     id: 1,
//     name: DNA,
//     content: '강아지의 유전형질을 고려한 교배로 유전병을 최소화합니다.',
//     color: 'black'
//   },
//   {
//     id: 2,
//     name: Vaccine,
//     content: '체계적인 백신 프로그램으로 위험 바이러스를 예방합니다.',
//     color: 'black'
//   },
//   {
//     id: 3,
//     name: Love,
//     content: '작고 예쁜 강아지보다 건강한 강아지를 우선으로 합니다.',
//     color: 'black'
//   }
// ]

const Hero = styled.div`
  width: 100%;
  margin: ${p => (p.main ? '0 auto' : 'auto')};
  text-align: center;
  ${media.pc`
    width: 90%;
  `}

  ${media.tablet`
    width: 100%;
  `}

  ${media.mobile`
    display: ${p => !p.why && 'none'};
  `}
`
const MobileHero = styled.div`
  display: none;

  ${media.mobile`
    width: 90%;
    margin: 0 auto;
    text-align: center;
    /* color: yellow; */
    display: inline-block;
  `};
`

const Wrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  text-align: center;
  height: ${p => (p.breeder || p.support ? '100%' : '100vh')};
  background: ${p => p.background};
  padding-top: ${p => rem(p.padding)};
  padding-top: ${p => p.Listpadding};
  padding-bottom: ${p => rem(p.padding)};
  padding-bottom: ${p => p.Listpadding};

  ${p =>
    p.home &&
    `:before {
    position: fixed;
    filter: blur(5px);
    display: block;
    z-index:-1;
  }`}
  ${media.tablet`
  height: ${p => p.mobileHeight || rem(p.mobileHeight)};

  `} ${media.mobile`
    height: ${p => p.mobileHeight || rem(p.mobileHeight)};
    padding-top: ${p => p.mobilePadding && rem(p.mobilePadding)};
    padding-bottom: ${p => p.mobilePadding && rem(p.mobilePadding)};
  `};
`
const Content = styled.div`
  margin: auto;
  position: relative;
  text-align: center;
  width: ${p => (p.content === 'partner' ? '60%' : rem(890))};

  height: 100%;
  display: flex;
  flex-direction: ${p => (p.content === 'support' ? 'row' : 'column')};
  justify-content: center;
  ${media.mobile`
    width: ${p => (p.content === 'partner' ? '90%' : '90%')};
    flex-direction: column;
  `};
  ${media.pc`
    width: 92%;
  `};
`

const TitleWrapper = styled.div`
  position: absolute;
  top: 25%;
`

const Title = styled.h1`
  text-align: ${p => (p.content === 'partner' ? 'left' : 'center')};
  font-size: ${p => rem(p.size)};
  font-weight: normal;
  font-weight: ${p => p.main && 'bold'};
  padding: 0;
  margin-bottom: ${p => rem(p.bottom)};
  color: ${p => p.color};
  ${media.tablet`
    font-size: ${p => p.tabletSize && rem(p.tabletSize)};
    font-weight: bold;
  `};
  ${media.mobile`
    font-size: ${p => p.mobileSize && rem(p.mobileSize)};
    width: ${p => p.mobileWidth && `${p.mobileWidth}%`};
    margin: ${rem(20)} auto;
  `};
`

const SubTitle = styled.h3`
  text-align: ${p => (p.content === 'partner' ? 'left' : 'center')};
  font-size: ${p => rem(p.size)};
  opacity: 0.8;
  color: ${p => p.color};
  padding: 0;
  margin: 0;
  font-weight: ${p => (p.main ? 500 : 300)};

  ${media.mobile`
    font-size: ${p => p.mobileSize && rem(p.mobileSize)};
    width: ${p => p.mobileWidth && `${p.mobileWidth}%`};
    margin: ${rem(20)} auto;
  `};
`
const MainImgWrapper = styled.div`
  position: absolute;
  background-image: url(${Main});
  background-size: cover;
  content: '';
  height: 100vh;
  width: 100vw;
  filter: brightness(80%);

  ${media.wide`
  background-image: url(${TabletMain});

`};
  ${media.mobile`
  background-image: url(${MobileMain});

`};
`

const BreederLink = styled.a`
  padding: 10px;
  text-align: ${p => (p.content === 'partner' ? 'right' : 'center')};
  margin: 0 auto;
  width: 90%;
  font-size: ${p => (p.content === 'partner' ? rem(30) : rem(15))};
  background: ${p => p.color};
  color: ${black};
  font-weight: 300;
  border: 0.5px solid rgba(0, 0, 0, 0.09);

  ${media.mobile`
    font-size: ${rem(18)};
    width: ${p => p.content === 'partner' && '80%'};
  `};
`

const SupportLink = styled.a`
  align-self: center;
  text-align: center;
  font-size: ${rem(30)};
  background: ${white2};
  padding: ${rem(10)} 0;
  margin: ${rem(10)} 0;
  width: 41%;
  ${media.mobile`
    width: 100%;
    padding: 0;
    font-size: ${rem(20)};
  `} &:hover {
    background: ${peacockBlue};
    color: ${white2};
  }
`
const GridWrapper = styled.div`
  width: 100%;
  display: grid;
  font-weight: lighter;
  margin-top: ${rem(100)};
  text-align: center;
  ${media.mobile`
    margin: 0;
  `};
`

const BreederWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: ${rem(10)};
  text-align: center;
  position: relative;
  height: ${rem(60)};
  ${media.mobile`
    height: ${rem(40)};
  `};
`

// const Number = styled.p`
//   font-size: ${rem(45)};
//   color: ${white2};
//   padding: 0;
//   margin: 0;
//   font-family: PT Sans;
//   ${''} ${''}
//   left: 10%;
//   ${''} ${media.mobile`
//     font-size: ${rem(25)};
//     margin-top: ${rem(10)};
//   `};
// `

const BreederIcon = styled.img`
  height: 100%;
  grid-column: 1;
  grid-row: ${p => p.row};
  margin: 0 auto;
  padding: 10px;
`

const Text = styled.p`
  font-size: ${rem(24)};
  color: ${p => (p.color ? p.color : white2)};
  margin-top: ${rem(20)};
  margin-left: ${p => p.grid && '5%'};
  font-weight: ${p => (p.grid ? 300 : 'lighter')};
  grid-column: ${p => p.grid && 2};
  grid-row: ${p => p.row};
  text-align: ${p => p.grid && 'left'};
  ${media.tablet`
    font-size: ${p => rem(p.tabletsize)};
  `};
  ${media.mobile`
    font-size: ${rem(13)};
    font-size: ${p => rem(p.mobilesize)};
  `};
`

const BeatWrapper = styled.div`
  position: relative;
  top: 30%;
`

const Img = styled.img`
  width: 3.1%;
  animation: beat 0.8s infinite;
  -webkit-animation: mover 1s infinite alternate;
  animation: mover 1s infinite alternate;

  @-webkit-keyframes mover {
    0% {
      transform: translateY(0);
    }

    100% {
      transform: translateY(-20px);
    }
  }

  @keyframes mover {
    0% {
      transform: translateY(0);
    }

    100% {
      transform: translateY(-20px);
    }
  }

  ${media.wide`
    width: 4%;
  `};
`

// const AutoWrapper = styled.div`
//   width: 92%;
//   margin: 0 auto;
// `

class Index extends Component {
  state = {
    breederData: [],
    reviews: [],
    puppies: []
  }

  componentDidMount() {
    axios
      .get(`${fetchServerConfig.ip}/api/breeder`)
      .then(res => {
        this.setState({
          breederData: res.data
        })
      })
      .catch(err => console.log(err))
    axios
      .get(`${fetchServerConfig.ip}/api/review`)
      .then(res => {
        this.setState({
          reviews: res.data
        })
      })
      .catch(err => console.log(err))
    // axios
    // .get(`${fetchServerConfig.ip}/api/review`)
    // .then(res => {
    //   this.setState({
    //     reviews: res.data
    //   })
    // })
    // .catch(err => console.log(err))
    axios
      .get('http://localhost:3000/api/puppy')
      .then(res => {
        this.setState({
          puppies: res.data
        })
      })
      .catch(err => console.log(err))
  }

  render() {
    const { breederData, reviews, puppies } = this.state
    const bestBreederList = breederData.filter(breeder => breeder.label === 'best')
    // 5명 신규브리더
    // const newBreederList = breederData.filter(breeder => breeder.label === 'new')
    // 3명 신규브리더
    // const newBreeders = newBreederList.slice(2)
    console.log(puppies)
    return (
      <Layout location="/">
        <Wrapper home mobileHeight={650}>
          <MainImgWrapper />
          <Content>
            <Hero main>
              <Title main size={58} color={white2}>
                건강한 강아지와의<br />특별한 만남, 페오펫
              </Title>
            </Hero>
            <MobileHero>
              <Title size={50} color={white2} mobileSize={30} mobileWidth={90}>
                건강한 강아지와의<br />특별한 만남, 페오펫
              </Title>
              {/* <AutoComplete location="/" /> */}
            </MobileHero>
            <BeatWrapper>
              <Img src={HomeSearchUrl} alt=".." />
            </BeatWrapper>
          </Content>
        </Wrapper>
        <Wrapper home background={peacockBlue}>
          <Content>
            <Title main size={58} mobileSize={30} color={white2}>
              왜 페오펫인가요?
            </Title>
            <GridWrapper>
              <BreederIcon why row={1} src={healthy} />
              <Text grid row={1} color={white}>
                사회화가 잘 된{' '}
                <b>
                  <b>건강한 강아지</b>
                </b>를 소개
              </Text>
              <BreederIcon why row={2} src={check} />
              <Text grid row={2} color={white}>
                <b>
                  <b>태어난 곳</b>
                </b>과{' '}
                <b>
                  <b>부모견</b>
                </b>을 직접 확인 가능
              </Text>
              <BreederIcon why row={3} src={benefit} />
              <Text grid row={3} color={white}>
                페오펫 멤버십의{' '}
                <b>
                  <b>사후 관리 및 혜택</b>
                </b>
              </Text>
            </GridWrapper>
          </Content>
        </Wrapper>
        {/* <Wrapper background={white2}>
          <Content>
            <Title size={58} mobileSize={30} color={black}>
              입양 가능한 자견
            </Title>
            <SubTitle size={25}>
              페오펫이 엄선한 브리더들의 입양 가능한 자견입니다.<br />
              모든 자견은 2개월 이후부터 입양 가능하며 입양 예약만 가능합니다.
            </SubTitle>
            <AdoptionCard puppies={puppies} />
          </Content>
        </Wrapper> */}
        <Wrapper
          breeder
          background={white}
          Listpadding="10%"
          mobilePadding={50}
          mobileHeight="100%"
        >
          <Content content="breeder">
            <Title size={50} color={peacockBlue} mobileSize={30}>
              이 달의 <b>인기 브리더</b>
            </Title>
            <SubTitle size={25} color={peacockBlue} mobileSize={15}>
              전문 지식을 가지고 윤리적으로 강아지를 번식하는 우수한 브리더를 소개합니다.
            </SubTitle>
            <BreederWrapper>
              <BreederList breederData={bestBreederList} location="/" position="vertical" />
            </BreederWrapper>

            <BreederLink color={white2} href="/breeder">
              더 보기 +
            </BreederLink>
          </Content>
        </Wrapper>
        <Wrapper breeder padding={200} mobilePadding={50} background={white2}>
          <Content>
            <Title diffrent size={50} color={black} mobileSize={30} mobileWidth={75}>
              <b>브리더는 이런 점이 다릅니다.</b>
            </Title>
            <GridWrapper>
              <BreederIcon row={1} src={DNA} />
              <Text grid row={1} color={black} tabletsize={20}>
                강아지의 유전형질을 고려한 교배로 유전병을 최소화합니다.
              </Text>
              <BreederIcon row={2} src={Vaccine} />
              <Text grid row={2} color={black} tabletsize={20}>
                체계적인 백신 프로그램으로 위험 바이러스를 예방합니다.
              </Text>
              <BreederIcon row={3} src={Love} />
              <Text grid row={3} color={black} tabletsize={20}>
                작고 예쁜 강아지보다 건강한 강아지를 우선으로 합니다.
              </Text>
            </GridWrapper>
          </Content>
        </Wrapper>
        <Review reviews={reviews} />
        <Wrapper support padding={10} background={white2}>
          <Content content="support" mobileFullWidth>
            <SupportLink a href="https://pf.kakao.com/_pUyTd">
              강아지 입양 문의
            </SupportLink>
            <SupportLink href="mailto:peopet@naver.com">브리더 제휴 문의</SupportLink>
          </Content>
        </Wrapper>
      </Layout>
    )
  }
}

export default Index

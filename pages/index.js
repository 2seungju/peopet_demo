import React, { Component } from 'react'
import styled, { css, types } from 'styled-components'
import axios from 'axios'

import Layout from 'components/Layout'
import Link from 'components/Link'
import BreederList from 'components/Breeder/BreederList'
import AdoptionCardList from 'components/Adoption/AdoptionCardList'
import Review from 'components/Review'
import { RightDropIcon, HomePartnerRightIcon } from 'components/Icons'
import { fetchServerConfig } from 'config/config'
import Modal from 'components/Modal'
import { warmGrey, black, sky, white, white2, scarlet, red, grey, peacockBlue } from 'utils/colors'
import rem from 'utils/rem'
import Bar from 'components/Bar'
import media from 'utils/media'
import placeholder from 'utils/placeholder'

// import HomeHeroImg from '../static/home-hero.jpeg'
const peopetconst = 'static/images/peopetcost.png'
const peopetconst1 = 'static/images/peopetcost1.png'
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
  height: ${p => (p.home ? '100vh' : '100%')};
  background: ${p => p.background};
  padding-top: ${p => rem(p.padding)};
  padding-top: ${p => p.Listpadding};
  padding-bottom: ${p => rem(p.padding)};
  padding-bottom: ${p => p.Listpadding};
  min-height: ${p => !p.support && rem(900)};
  min-width: ${rem(307)};
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
    min-height: ${p => !p.support && rem(600)};

  `};
`
const Content = styled.div`
  margin: auto;
  position: relative;
  text-align: center;
  width: ${p => (p.adoption ? rem(900) : '50%')};

  height: ${p => (p.cost ? '70%' : '100%')};
  display: flex;
  flex-direction: ${p => (p.content === 'support' ? 'row' : 'column')};
  justify-content: center;
  ${media.wide`
    width: 75%;
  `} 
  ${media.tablet`
    width: 85%;
  `} 
  ${media.mobile`
    width: 90%
    flex-direction: column;
  `};
`

const TitleWrapper = styled.div`
  position: absolute;
  top: 25%;
`

const Title = styled.h1`
  text-align: ${p => (p.cost ? 'left' : 'center')};
  font-size: ${p => rem(p.size)};
  font-weight: ${p => (p.main ? 500 : 'normal')};
  padding: 0;
  margin-bottom: ${p => rem(p.bottom)};
  margin-top: ${p => p.top};
  color: ${p => p.color};
  ${media.tablet`
    font-size: ${p => p.tabletSize && rem(p.tabletSize)};
    font-weight: bold;
  `};
  ${media.mobile`
    font-size: ${p => p.mobileSize && rem(p.mobileSize)};
    width: ${p => p.mobileWidth && `${p.mobileWidth}%`};
    margin: ${rem(17)} auto;
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
  height: 100%;
  width: 100%;
  filter: brightness(80%);

  ${media.wide`
  background-image: url(${TabletMain});

`};
  ${media.mobile`
  background-image: url(${MobileMain});

`};
`

const CostbarWrapper = styled.div`
  color: white;
  background: ${p => p.background};
  margin: auto;
  position: relative;
  width: 100%;
  border-radius: ${rem(5)};
  margin-bottom: ${p => p.bottom};
`
const Costbar = styled.div`
  background: ${p => p.background};
  left: 0;
  position: absolute;
  top: 0;
  width: ${p => p.width};
  border-radius: ${rem(5)};
  text-align: center;
`
const CostName = styled.p`
  color: white;
  margin-left: ${p => p.margin};

  ${media.mobile`
    font-size: ${rem(15)};
  `};
`

const Reason = styled.div`
  text-align: center;
  font-size: ${p => rem(p.size)};
  margin: auto;
  margin-top: 20%;
  font-weight: 200;

  ${media.tablet`
    font-size:${p => rem(p.tabletsize)};
  `} ${media.mobile`
    display: none;
  `};
`

const MobileReason = styled.div`
  display: none;
  margin-top: 20%;

  ${media.mobile`
    display: inline-block;
    font-size: ${p => rem(p.mobilesize)};
  `};
`

const ModalWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
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

const DescriptionWrapper = styled.div`
  max-width: ${rem(900)};
  display: flex;
  font-weight: lighter;
  text-align: center;
  justify-content: space-around;
  width: ${p => (p.why ? '70%' : '95%')};
  margin: auto;
  margin-top: 10%;
  ${media.wide`
  width: ${p => (p.why ? '80%' : '100%')};

  `}
  ${media.tablet`
  width: ${p => (p.why ? '90%' : '95%')};

  `}
  ${media.mobile`
    margin: 0;
  width: 99%;
  `};
`

const IconWrapperWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: lighter;
  text-align: center;
  margin: auto 0;
  ${media.mobile`
    margin: 0;
  `};
`

const IconWrapper = styled.div`
  margin: 15% 0;
`

const BreederWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`

const Description = styled.div`
  display: flex;
`

const Icon = styled.img`
  height: ${rem(80)};
  width: ${p => p.DNA && '40%'};
  margin: auto;
  ${media.mobile`
  height: ${rem(60)};
    `};
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  ${media.tablet`
    margin-left: 5%;
  `};
`

const Text = styled.div`
  height: ${rem(80)};
  font-size: ${rem(24)};
  color: ${p => (p.color ? p.color : white2)};
  text-align: ${p => p.grid && 'left'};
  display: flex;
  align-items: center;
  min-width: ${rem(353)};
  ${media.pc`
    font-size: ${p => rem(p.tabletsize)};
  `};
  ${media.tablet`
    min-width: 0;  
    font-size: ${rem(17)};
  `};
  ${media.mobile`
    min-width: 0;  
    font-size: ${rem(13)};
    font-size: ${p => rem(p.mobilesize)};
  `};
`

const BeatWrapper = styled.div`
  position: relative;
  top: 30%;
`

const Img = styled.img`
  width: 4%;
  animation: beat 0.8s infinite;
  -webkit-animation: mover 1s infinite alternate;
  animation: mover 1s infinite alternate;

  @-webkit-keyframes mover {
    0% {
      transform: translateY(0);
    }

    100% {
      transform: translateY(-30px);
    }
  }

  @keyframes mover {
    0% {
      transform: translateY(0);
    }

    100% {
      transform: translateY(-30px);
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
    puppies: [],
    isClicked: false
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
    axios
      .get(`${fetchServerConfig.ip}/api/puppy`)
      .then(res => {
        this.setState({
          puppies: res.data
        })
      })
      .catch(err => console.log(err))
    // axios
    //   .get('http://localhost:3000/api/puppy')
    //   .then(res => {
    //     this.setState({
    //       puppies: res.data
    //     })
    //   })
    //   .catch(err => console.log(err))
  }
  // TODO: 익스는 후기 컴포넌트 말썽
  render() {
    const { breederData, reviews, puppies, isClicked } = this.state
    const sortingField = 'rank'
    const BreederRank = breederData.sort((a, b) => a[sortingField] - b[sortingField])
    // 5명 신규브리더
    // const newBreederList = breederData.filter(breeder => breeder.label === 'new')
    const Dog = BreederRank.slice(0, 3)
    const Puppy = puppies.slice(0, 6)
    const MobilePuppy = puppies.slice(0, 3)

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
            </MobileHero>
            <BeatWrapper>
              <Img src={HomeSearchUrl} alt=".." />
            </BeatWrapper>
          </Content>
        </Wrapper>
        <Wrapper home background={white} mobilePadding={50}>
          <Content cost>
            <Title cost size={40} mobileSize={20} bottom={0}>
              번식공장 출신의 애견샵 강아지
            </Title>
            <CostbarWrapper background={red}>
              <Costbar width="20%" background={sky}>
                <CostName>입양비용</CostName>
              </Costbar>
              <CostName right margin="20%">
                관리비용
              </CostName>
            </CostbarWrapper>
            <Title cost size={40} mobileSize={20} top="10%">
              페오펫의 건강한 강아지
            </Title>
            <CostbarWrapper background={grey}>
              <Costbar width="45%" background={red}>
                <Costbar width="50%" background={sky}>
                  <CostName>입양비용</CostName>
                </Costbar>
                <CostName right margin="50%">
                  관리비용
                </CostName>
              </Costbar>
              <CostName>&nbsp;</CostName>
            </CostbarWrapper>
            <ModalWrapper>
              <Modal />
            </ModalWrapper>
            <Reason size={25} tabletsize={20}>
              신뢰할 수 있는 곳에서 첫 단추를 잘 끼우면 <br />수백만원에서 수천만원의 비용을 절약할
              수 있습니다.
            </Reason>
            <MobileReason mobilesize={16}>
              신뢰할 수 있는 곳에서 첫 단추를 잘 끼우면 수백만원에서 수천만원의 비용을 절약할 수
              있습니다.
            </MobileReason>
          </Content>
        </Wrapper>
        <Wrapper why background={peacockBlue}>
          <Content>
            <Title main size={58} mobileSize={30} color={white2}>
              왜 페오펫인가요?
            </Title>
            <DescriptionWrapper why>
              <IconWrapperWrapper>
                <IconWrapper>
                  <Icon src={healthy} />
                </IconWrapper>
                <IconWrapper>
                  <Icon row={2} src={check} />
                </IconWrapper>
                <IconWrapper>
                  <Icon row={3} src={benefit} />
                </IconWrapper>
              </IconWrapperWrapper>

              <TextWrapper>
                <Text grid row={1} color={white}>
                  사회화가 잘 된&nbsp;
                  <b>건강한 강아지</b>를 소개
                </Text>
                <Text grid row={2} color={white}>
                  <b>태어난 곳</b>
                  과&nbsp;
                  <b>부모견</b>
                  을 직접 확인 가능
                </Text>

                <Text grid row={3} color={white}>
                  <b>
                    <b>페오펫 멤버십</b>
                  </b>의&nbsp;사후 관리 및 혜택
                </Text>
              </TextWrapper>
            </DescriptionWrapper>
          </Content>
        </Wrapper>
        <Wrapper breeder background={white2} Listpadding="10%">
          <Content adoption>
            <Title size={58} mobileSize={30} color={black}>
              입양 가능한 자견
            </Title>
            <SubTitle size={25} mobileSize={15}>
              페오펫이 엄선한 브리더들의 입양 가능한 자견입니다.<br />
              모든 자견은 2개월 이후부터 입양 가능하며 입양 예약만 가능합니다.
            </SubTitle>

            <AdoptionCardList
              puppies={Puppy}
              breederData={breederData}
              mobilePuppies={MobilePuppy}
            />
            <BreederLink color={white2} href="/puppy">
              더 보기 +
            </BreederLink>
          </Content>
        </Wrapper>
        <Wrapper
          breeder
          background={white}
          Listpadding="10%"
          mobilePadding={50}
          mobileHeight="100%"
        >
          <Content>
            <Title size={50} color={peacockBlue} mobileSize={30}>
              이 달의 <b>인기 브리더</b>
            </Title>
            <SubTitle size={25} color={peacockBlue} mobileSize={15}>
              전문 지식을 가지고 윤리적으로 강아지를 번식하는 우수한 브리더를 소개합니다.
            </SubTitle>
            <BreederWrapper>
              <BreederList breederData={Dog} location="/" position="vertical" />
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
            <DescriptionWrapper>
              <IconWrapperWrapper>
                <IconWrapper width>
                  <Icon DNA src={DNA} />
                </IconWrapper>
                <IconWrapper>
                  <Icon row={2} src={Vaccine} />
                </IconWrapper>
                <IconWrapper>
                  <Icon row={3} src={Love} />
                </IconWrapper>
              </IconWrapperWrapper>

              <TextWrapper>
                <Text grid row={1} color={black} pctsize={20}>
                  강아지의 유전형질을 고려한 교배로 유전병을 최소화합니다.
                </Text>
                <Text grid row={2} color={black} pcsize={20}>
                  체계적인 백신 프로그램으로 위험 바이러스를 예방합니다.
                </Text>

                <Text grid row={3} color={black} pcsize={20}>
                  작고 예쁜 강아지보다 건강한 강아지를 우선으로 합니다.
                </Text>
              </TextWrapper>
            </DescriptionWrapper>
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

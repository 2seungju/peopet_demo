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
import textInputs from 'polished/lib/shorthands/textInputs'
import AutoComplete from 'components/AutoComplete'

// import HomeHeroImg from '../static/home-hero.jpeg'

const HomeSearchUrl = '/static/images/home-search@3x.png'

const Hero = styled.div`
  width: 100%;
  margin: 0 auto;
  text-align: center;
  ${media.pc`
    width: 90%;
  `}

  ${media.tablet`
    width: 100%;
  `}

  ${media.mobile`
    display: none;
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
  height: 100vh;
  height: ${p => p.support && '100%'};
  background: ${p => p.background};
  padding-top: ${p => rem(p.padding)};
  padding-bottom: ${p => rem(p.padding)};

  ${media.mobile`
    height: ${p => p.mobileHeight || rem(p.mobileHeight)};
    padding-top: ${p => p.mobilePadding && rem(p.mobilePadding)};
    padding-bottom: ${p => p.mobilePadding && rem(p.mobilePadding)};
  `};
`
// 여기 width에 rem을 쓴 이유는 4k에서도 채리가 저 비율로 보고 싶다고 하더라구요
const Content = styled.div`
  margin: 0 auto;
  position: relative;
  text-align: center;
  width: ${p => (p.content === 'partner' ? '60%' : rem(890))};
  ${''} min-height: 100%;
  height: 100%;
  display: flex;
  flex-direction: ${p => (p.content === 'support' ? 'row' : 'column')};
  justify-content: center;
  width: ${p => p.breeder && '70%'};
  ${media.mobile`
    width: ${p => (p.content === 'partner' ? '90%' : '90%')};
    flex-direction: column;
  `};
  ${media.pc`
    width: 92%;
  `};
`

const Title = styled.h1`
  text-align: ${p => (p.content === 'partner' ? 'left' : 'center')};
  font-size: ${p => rem(p.size)};
  font-weight: normal;
  font-weight: ${p => p.main && 'bold'};
  padding: 0;
  margin: 0;
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

const BreederLink = styled.a`
  padding: 10px;
  text-align: ${p => (p.content === 'partner' ? 'right' : 'center')};
  margin: 0 auto;
  margin-top: 7%;
  border-radius: ${rem(35)};
  width: ${p => (p.content === 'partner' ? '100%' : rem(250))};
  font-size: ${p => (p.content === 'partner' ? rem(30) : rem(20))};
  background: ${p => p.color};
  color: ${p => (p.content === 'support' ? black : white2)};
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
    padding: 0;
    font-size: ${rem(20)};
  `} &:hover {
    background: ${peacockBlue};
    color: ${white2};
  }
`
const TextWrapper = styled.div`
  font-weight: lighter;
  margin-top: ${rem(100)};
  text-align: center;
  ${media.mobile`
    margin-top: ${rem(20)};
  `};
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

const Number = styled.p`
  font-size: ${rem(45)};
  color: ${white2};
  padding: 0;
  margin: 0;
  font-family: PT Sans;
  ${''} ${''}
  left: 10%;
  ${''} ${media.mobile`
    font-size: ${rem(25)};
    margin-top: ${rem(10)};
  `};
`

const Text = styled.p`
  font-size: ${rem(25)};
  color: ${white2};
  ${''}
  margin-top: ${rem(20)};
  margin-left: ${rem(10)};

  ${media.mobile`
    font-size: ${rem(13)};
  `}
`

const BeatWrapper = styled.div`
  position: relative;
  top: 20%;
`

const Img = styled.img`
  width: 3.1%;
  animation: beat 0.8s infinite;

  @keyframes beat {
    0% {
      transform: scale(0.8);
    }
    14% {
      transform: scale(1.1);
    }
    96% {
      transform: scale(1);
    }
    100% {
      transform: scale(0.8);
    }
  }

  ${media.wide`
    width: 4%;
  `};
`

const AutoWrapper = styled.div`
  width: 92%;
  margin: 0 auto;
`

class Index extends Component {
  state = {
    breederData: []
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
  }

  render() {
    const { breederData } = this.state
    const bestBreederList = breederData.filter(breeder => breeder.label === 'best')
    // 5명 신규브리더
    const newBreederList = breederData.filter(breeder => breeder.label === 'new')
    // 3명 신규브리더
    const newBreeders = newBreederList.slice(2)
    return (
      <Layout location="/">
        <Wrapper home background={peacockBlue} height={1070} mobileHeight={650}>
          <Content>
            <Hero>
              <Title main size={62} color={white2}>
                &nbsp;건강한 강아지 분양 중개, 페오펫
              </Title>
              <SubTitle main size={38} color={white2}>
                브리더가 기르는 건강한 강아지를 키우고 싶다면?
              </SubTitle>
              <AutoWrapper>
                <AutoComplete location="/" />
              </AutoWrapper>
            </Hero>
            <MobileHero>
              <Title size={50} color={white2} mobileSize={30} mobileWidth={90}>
                &nbsp;건강한 강아지<br />분양 중개, 페오펫
              </Title>
              <SubTitle size={30} color={white2} mobileSize={18} mobileWidth={80}>
                브리더가 기르는 건강한 강아지를 키우고 싶다면?
              </SubTitle>
              <AutoComplete location="/" />
            </MobileHero>
            <BeatWrapper>
              <Img src={HomeSearchUrl} alt=".." />
            </BeatWrapper>
          </Content>
        </Wrapper>
        <Wrapper background={white} padding={200} mobilePadding={50}>
          <Content content="breeder">
            <Title size={50} color={peacockBlue} mobileSize={30}>
              이 달의 <b>인기 브리더</b>
            </Title>
            <SubTitle size={25} color={peacockBlue} mobileSize={15}>
              전문 지식을 가지고 윤리적으로 강아지를 번식하는 우수한 브리더를 소개합니다.
            </SubTitle>
            <BreederList breederData={bestBreederList} location="/" position="vertical" />
            <BreederLink color={peacockBlue} href="/breeder">
              브리더 더 보러가기{' '}
            </BreederLink>
          </Content>
        </Wrapper>
        <Wrapper background={white2} padding={200} mobilePadding={50}>
          <Content content="breeder">
            <Title size={50} color={squash} mobileSize={30}>
              이 달의 <b>신규 브리더 </b>
            </Title>
            <SubTitle size={25} color={pooBrown} mobileSize={15} mobileWidth={75}>
              매 달 페오펫과 함께하는 새로운 브리더들을 만나보세요.
            </SubTitle>
            <BreederList breederData={newBreeders} location="/" position="horizontal" />
            <BreederLink color={squash} href="/breeder">
              신규 브리더 더 보기{' '}
            </BreederLink>
          </Content>
        </Wrapper>
        <Wrapper background={peacockBlue} padding={200} mobilePadding={50}>
          <Content>
            <Title diffrent size={50} color={white2} mobileSize={30} mobileWidth={75}>
              브리더는 <b>이런 점이 다릅니다.</b>
            </Title>
            <SubTitle size={25} color={white2} mobileSize={15} mobileWidth={90}>
              페오펫은 ‘강아지 공장’이 아닌 ‘브리더’ 에게서 건강한 강아지를 ‘분양 중개’ 합니다.
            </SubTitle>
            <TextWrapper>
              <DescriptionWrapper>
                <Number>1.</Number>
                <Text>특정 견종에 대한 전문지식이 있는 '전문인'입니다.</Text>
              </DescriptionWrapper>
              <DescriptionWrapper>
                <Number>2.</Number>
                <Text>작고 예쁜 강아지보다 건강한 강아지를 우선으로 합니다.</Text>
              </DescriptionWrapper>
              <DescriptionWrapper>
                <Number>3.</Number>
                <Text>강아지의 유전형질을 고려한 교배로 유전병을 최소화합니다.</Text>
              </DescriptionWrapper>
              <DescriptionWrapper>
                <Number>4.</Number>
                <Text>강아지는 태어나서 부모견과 함께 건강한 사회화를 겪습니다.</Text>
              </DescriptionWrapper>
              <DescriptionWrapper>
                <Number>5.</Number>
                <Text>체계적인 백신 프로그램으로 위험 바이러스를 예방합니다.</Text>
              </DescriptionWrapper>
              <DescriptionWrapper>
                <Number>6.</Number>
                <Text>입양 후 강아지에 대한 지속적인 도움을 줍니다.</Text>
              </DescriptionWrapper>
            </TextWrapper>
          </Content>
        </Wrapper>
        <Wrapper background={dark} padding={100} mobilePadding={50}>
          <Content content="partner">
            <Title size={50} color={white2} content="partner" mobileSize={30} mobileWidth={70}>
              페오펫은 <b>반려견의 행복을 바랍니다.</b>
            </Title>
            <SubTitle size={25} color={white2} content="partner" mobileSize={15}>
              강아지가 태어나고 일생을 보호자 곁에서 행복한 삶을<br />살 수 있도록 다양한 서비스를
              제공합니다.
            </SubTitle>
            <BreederLink
              color={dark}
              href="https://blog.naver.com/peopet/221092557955"
              content="partner"
              mobile
            >
              제휴 브랜드 보러가기
            </BreederLink>
          </Content>
        </Wrapper>
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

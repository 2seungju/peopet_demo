import React, { Component } from 'react'
import Layout from 'components/Layout'
import styled from 'styled-components'
import { peacockBlue, white2, white, black } from 'utils/colors'
import rem from 'utils/rem'
import { ChangeRotationIcon } from 'components/Icons'
import media from 'utils/media'

const longImg = require('static/images/10000km_w.jpg')
const longMobileImg = require('static/images/10000km_m.jpg')
const longTabletImg = require('static/images/100000km_tablet.jpg')
const interviewImg = require('static/images/oneinterview.jpg')
const interviewMobileImg = require('static/images/oneinterview_mobile.jpg')
const interviewTabletImg = require('static/images/oneinterview_tablet.jpg')

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`

const TextWrapper = styled.div`
  background: ${p => p.hero ? peacockBlue : white};
  height: ${p => p.hero ? rem(954) : rem(998)};
  display: ${p => p.mobile && 'none'};

  ${media.mobile`
    display: ${p => p.mobile && 'inline-block'};
    height: ${p => !p.hero && !p.mobile ? rem(718) : rem(524)};
  `}
`

const Image = styled.div`
  height: ${rem(954)};
  background-image: ${p => p.img === 'long' ? `url(${longImg})` : `url(${interviewImg})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  ${media.tablet`
    background-image: ${p => p.img === 'long' ? `url(${longTabletImg})` : `url(${interviewTabletImg})`};
  `}

  ${media.mobile`
    background-image: ${p => p.img === 'long' ? `url(${longMobileImg})` : `url(${interviewMobileImg})`};
    height: ${rem(570)};
  `}
`

const TextContent = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  position: relative;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;

  ${media.mobile`
    width: 90%;
  `}
`

const CenterWrapper = styled.div`
  margin: 0 auto;
`

const TitleWrapper = styled.div`
  margin-top: ${rem(90)};
  display: ${p => p.mobile && 'none'};

  ${media.mobile`
    display: ${p => p.mobile && 'inline-block'};
  `}
`

const Title = styled.h3`
  color: ${p => p.hero ? white : black};
  font-size: ${p => p.hero ? rem(50) : rem(30)};
  margin: 0;

  ${media.mobile`
    font-size: ${rem(30)}
  `}
`

const DescriptionWrapper = styled.div`
  margin-top: ${rem(45)};

  ${media.mobile`
    display: none;
  `}
`

const MobileDescriptionWrapper = styled.div`
  display: none;
  ${media.mobile`
    display: inline-block;
    margin-top: ${rem(45)};
  `}
`

const Description = styled.p`
  color: ${p => p.hero ? white2 : black};
  opacity: ${p => !p.hero && 0.8};
  font-size: ${p => p.hero ? rem(25) : rem(20)};
  margin: 0;

  ${media.tablet`
    font-size: ${p => p.hero ? rem(20) : rem(15)};
  `};

  ${media.mobile`
    font-size: ${rem(15)}
  `}

`

export default class About extends Component {
  static getInitialProps({ query: { id } }) {
    return { id }
  }

  render() {
    return (
      <Layout title="회사소개" description="페오펫은 강아지 브리더를 통해 반려동물 입양 문화를 바꾸려 합니다">
        <Wrapper>
          <TextWrapper hero>
            <TextContent>
              <CenterWrapper>
                <TitleWrapper>
                  <Title hero>IMPACT THE WORLD</Title>
                </TitleWrapper>
                <DescriptionWrapper>
                  <Description hero>페오펫 팀은 이 세상에 긍정적인 영향을 미칩니다.</Description>
                  <Description hero>아직 어두운 곳에 존재하는 강아지 공장의 문제를 해결하는 것.</Description>
                  <Description hero>이 불편하고 부당한 반려동물 입양 문화를 페오펫 팀이 바꾸려 합니다.</Description>
                  <Description hero>페오펫 팀에는 이 꿈에 가슴이 뛰는 사람들이 모여있습니다.</Description>
                  <Description hero>반려견 입양에서 행복함을 느끼는 서비스를 만들고자 합니다.</Description>
                </DescriptionWrapper>
                <MobileDescriptionWrapper>
                  <Description hero>페오펫은 이 세상에 긍정적인 영향을 미칩니다. 아직 어두운 곳에 존재하는 강아지 공장의 문제를 해결하는 것. 이 불편하고 부당한 반려동물 입양 문화를 페오펫 팀이 바꾸려 합니다. 페오펫 팀에는 이 꿈에 가슴이 뛰는 사람들이 모여있습니다. 누구에게나 반려견 입양에서 행복함을 느끼는 서비스를 만들고자 합니다.</Description>
                </MobileDescriptionWrapper>
              </CenterWrapper>
            </TextContent>
          </TextWrapper>
          <Image img="long" />
          <TextWrapper>
            <TextContent>
              <ChangeRotationIcon />
              <TitleWrapper>
                <Title>페오펫은 입양 문화뿐 아니라</Title>
                <Title>반려동물 문화의 전반을 바꾸고 있습니다.</Title>
              </TitleWrapper>
              <DescriptionWrapper>
                <Description>페오펫은 기존의 반려동물 입양문화를 더욱 체계적이고 투명하게 바꿀 수 있도록</Description>
                <Description>브리더 입양문화를 시작으로 고객이 필요로하는 서비스를 계속 발굴하고 있습니다.</Description>
                <Description>고객이 신중하게 반려견을 입양하며, 최고의 이용 경험을 느낄 수 있는</Description>
                <Description>반려견 입양 중개 플랫폼으로 발돋움하고 있습니다.</Description>
              </DescriptionWrapper>
              <MobileDescriptionWrapper>
                <Description>페오펫은 기존의 반려동물 입양문화를 더욱 체계적이고 투명하게 바꿀 수 있도록 브리더 입양문화를 시작으로 고객이 필요로하는 서비스를 계속 발굴하고 있습니다. 고객이 신중하게 반려견을 입양 하며, 최고의 이용 경험을 느낄 수 있는 반려견 입양 중개 플랫폼으로 발돋움하고 있습니다.</Description>
              </MobileDescriptionWrapper>
            </TextContent>
          </TextWrapper>
          <Image img="interview" />
          <TextWrapper mobile>
            <TextContent>
              <TitleWrapper>
                <Title>페오펫을 어떻게 <br />창립하게 되었나요?</Title>
              </TitleWrapper>
              <MobileDescriptionWrapper mobile>
                <Description>가족을 새롭게 맞이하려는 예비 반려인들이 이익에 눈이 먼 일부 업체들에 의해 피해를 당하는 것을 방지하고, 비윤리적인 강아지 공장 문제를 개선하고자 이 같은 정보 제공 서비스를 만들게 되었습니다. 행복한 가족을 만드는 중간다리 역할을 페오펫이 함께 할 수 있길 바랍니다.</Description>
              </MobileDescriptionWrapper>
            </TextContent>
          </TextWrapper>
        </Wrapper>
      </Layout>
    )
  }
}

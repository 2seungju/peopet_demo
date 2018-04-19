import React, { Component } from 'react'
import Layout from 'components/Layout'
import styled from 'styled-components'
import { peacockBlue, white2, white, black } from 'utils/colors'
import rem from 'utils/rem'
import { ChangeRotationIcon } from 'components/Icons'
import media from 'utils/media'

const longImg = 'static/images/10000km.jpg'
const longMobileImg = 'static/images/m_100000km.jpg'
const longTabletImg = 'static/images/100000km_tablet.jpg'
const interviewImg = 'static/images/oneinterview2.jpg'
const interviewMobileImg = 'static/images/oneinterview_mobile.jpg'
const interviewTabletImg = 'static/images/oneinterview_tablet.jpg'
const HomeSearchUrl = '/static/images/home-search@3x.png'

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
    height: ${p => !p.hero && !p.mobile ? rem(718) : rem(550)};
  `}
`

const ImageWrapper = styled.div`
  height: ${p => p.height && rem(p.height)};
  position: relative;
  display: flex;
  color: white;
  flex-direction: column;
  ${media.tablet`
  `}

  ${media.mobile`
    display: none;
  `}
`

const ImageDiv = styled.div`
  height: 100%;
  
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  filter: brightness(60%);

  display: ${p => p.mobile && 'none'};
  ${media.mobile`
  display: inline-block;
  `}
`

const InnerText = styled.div`
  position: absolute;
  left: 15%;
  bottom: 60%;
`

const MobileInnerText = styled.div`
  position: absolute;
  bottom: 60%;

`

const TextContent = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  margin-top: ${p => p.mobile && '-100px'};
  position: relative;
  text-align: center;
  display: flex;
  justify-content: center;

  flex-direction: column;

`


const CenterWrapper = styled.div`
  margin: 0 auto;
`

const TitleWrapper = styled.div`
  color: ${p => (p.img || p.hero) ? white2 : black};
  margin-top: ${rem(90)};
  display: ${p => p.mobile && 'none'};
  ${media.tablet`
  margin-left: ${p => p.img && rem(41)};
  `}
  ${media.mobile`
    display: ${p => p.mobile && 'inline-block'};
  `}
`

const Title = styled.h3`
  font-weight: ${p => p.hero && 'lighter'};
  letter-spacing: ${p => p.hero && rem(10)};

  font-size: ${p => p.hero ? rem(50) : rem(30)};
  text-align: ${p => p.img && 'left'};
  text-align: ${p => p.mobile && 'center'};

  margin: 0;
  position: ${p => p.mobile && 'absolute'};
  left: ${p => p.mobile && '15%'};
  bottom: ${p => p.mobile && '110%'};
  font-family: ${p => p.hero && 'Montserrat, serif'};
  ${media.mobile`
    font-size: ${rem(30)};
  `}
`

const DescriptionWrapper = styled.div`
  color: ${p => (p.img || p.hero) ? white2 : black};
  opacity: ${p => (!p.hero || !p.img) && 0.8};
  margin-top: ${rem(45)};
  ${media.tablet`
  margin-left: ${p => p.img && rem(41)};
  `}

  ${media.mobile`
    display: none;
  `}
`

const MobileDescriptionWrapper = styled.div`
  
  display: none;
  color: ${p => !(p.long || p.hero) ? black : white2};
  position: ${p => p.long && 'absolute'};
  top: ${p => p.long && '10%'};
  left: ${p => p.long && '0%'};
  text-align: center;
  ${media.mobile`
    display: inline-block;
    margin-top: ${rem(45)};
  `}
`
//  background-color:rgba(0, 0, 0, 0.3); 이런 방식도 가능
const Description = styled.p`

  font-size: ${rem(22)};
  margin: 0;
  font-weight: 300;
  ${media.tablet`
    font-size: ${rem(20)};
  `};

  ${media.mobile`
    font-size: ${rem(15)}
  `}

`

const BeatWrapper = styled.div`
  position: relative;
  animation-duration: 0.8s;
  animation-name: beat;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  @keyframes beat {
    from {
      top: 13%;
    }
    to {
      top: 12%;
    }
  }
${media.mobile`
  @keyframes beat {
    from {
      top: 11%;
    }
    to {
      top: 10%;
    }
  }
`}
`

const Beat = styled.img`
  width: 2%;

  ${media.wide`
  width: 4%;
  `}
`

const Interviewee = styled.div`
  position: absolute;
  bottom: 5%;
  right: 18%;
  top: ${p => p.mobile && '80%'};
  margin-right: ${p => p.mobile && '6%'};
  text-align: left;
  color: white;
  font-size: ${rem(20)};
  width: ${p => p.mobile && rem(185)};
  ${media.tablet`
  bottom: 0%;
  right: -2%;
  color: ${white2};
  `}
  ${media.mobile`
  width: ${p => p.mobile && rem(175)};
  font-size: ${rem(18)};
  `}
`

const MobileImageWrapper = styled.div`
  position: relative;
`

const IntervieweeWrapper = styled.div`
  display: none;

  ${media.mobile`
  display: inline-block;
  `}
`


export default class About extends Component {
  static getInitialProps({ query: { id } }) {
    return { id }
  }

  render() {
    // console.log(this.props.id)
    return (
      <Layout title="about">
        <Wrapper>
          <TextWrapper hero>
            <TextContent>
              <CenterWrapper>
                <TitleWrapper hero>
                  {/* <img src={titleImg} alt="aboutTitleImg" /> */}
                  <Title hero>IMPACT THE WORLD</Title>
                </TitleWrapper>
                <DescriptionWrapper hero>
                  <Description hero>페오펫 팀은 이 세상에 긍정적인 영향을 미칩니다.</Description>
                  <Description hero>아직 어두운 곳에 존재하는 강아지 공장의 문제를 해결하는 것.</Description>
                  <Description hero>이 불편하고 부당한 반려동물 입양 문화를 페오펫 팀이 바꾸려 합니다.</Description>
                  <Description hero>페오펫 팀에는 이 꿈에 가슴이 뛰는 사람들이 모여있습니다.</Description>
                  <Description hero>반려견 입양에서 행복함을 느끼는 서비스를 만들고자 합니다.</Description>
                </DescriptionWrapper>
                <MobileDescriptionWrapper hero>
                  <Description hero>페오펫은 이 세상에 긍정적인 영향을 미칩니다. 아직 어두운 곳에 존재하는 강아지 공장의 문제를 해결하는 것. 이 불편하고 부당한 반려동물 입양 문화를 페오펫 팀이 바꾸려 합니다. 페오펫 팀에는 이 꿈에 가슴이 뛰는 사람들이 모여있습니다. 누구에게나 반려견 입양에서 행복함을 느끼는 서비스를 만들고자 합니다.</Description>
                </MobileDescriptionWrapper>
              </CenterWrapper>
              <BeatWrapper>
                <Beat src={HomeSearchUrl} alt=".." />
              </BeatWrapper>
            </TextContent>
          </TextWrapper>
          <ImageWrapper img="long" height={1288}>
            <ImageDiv>
              <Image src={longImg} alt="10000KM" />
              <InnerText>
                <TitleWrapper img>
                  <Title img>현재까지 10,000km</Title>
                </TitleWrapper>
                <DescriptionWrapper img>
                  <Description>페오펫은 전국의 모든 전문 견사를 방문하고자 1만km를 달려왔습니다.</Description>
                  <Description>전문적이고 윤리적인 브리더들을 직접 만나며 강아지가 태어나 자라는</Description>
                  <Description>환경을 직접 눈으로 확인하고 예비견주와 만날 수 있도록 합니다.</Description>
                </DescriptionWrapper>
              </InnerText>
            </ImageDiv>
          </ImageWrapper>
          <MobileImageWrapper>
            <Image mobile src={longMobileImg} alt="10000KM" />
            <MobileDescriptionWrapper mobile long>
              <Title img mobile>현재까지 10,000km</Title>
              <Description>페오펫은 전국의 모든 전문 견사를 방문하고자 1만Km를 달려왔습니다. 전문적이고 윤리적인 브리더들을 직접 만나며 강아지가 태어나 자라는 환경을 직접 눈으로 확인하고 예비견주와 만날 수 있도록 합니다.</Description>
            </MobileDescriptionWrapper>
          </MobileImageWrapper>
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
            </TextContent>
          </TextWrapper>
          <ImageWrapper img="interview" height={1260}>
            <ImageDiv>
              <Image src={interviewImg} alt="interview" />
              <InnerText>
                <TitleWrapper img>
                  <Title img>페오펫을 어떻게 창립하게 되었나요?</Title>
                </TitleWrapper>
                <DescriptionWrapper img>
                  <Description>가족을 새롭게 맞이하려는 예비 반려인들이 이익에 눈이 먼 일부</Description>
                  <Description>업체들에 의해 피해를 당하는 것을 방지하고, 비윤리적인</Description>
                  <Description>강아지 공장 문제를 개선하고자 이 같은 정보 제공 서비스를</Description>
                  <Description>만들게 되었습니다. 행복한 가족을 만드는 중간다리 역할을</Description>
                  <Description>페오펫이 합께 할 수 있길 바랍니다.</Description>
                </DescriptionWrapper>
              </InnerText>
              <Interviewee>페오펫 최현일 대표(CEO & Co-founder)</Interviewee>
            </ImageDiv>
          </ImageWrapper>
          <MobileImageWrapper>
            <Image mobile src={interviewMobileImg} alt="interview" />
            <IntervieweeWrapper>
              <Interviewee mobile>페오펫 최현일 대표(CEO & Co-founder)</Interviewee>
            </IntervieweeWrapper>
          </MobileImageWrapper>
          <TextWrapper mobile>
            <TextContent mobile>
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

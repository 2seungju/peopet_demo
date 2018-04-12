import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Layout from 'components/Layout'
import { fetchServerConfig } from 'config/config'
import Link from 'components/Link'
import rem from 'utils/rem'
import { warmGrey2, black, white2, white, peacockBlue } from 'utils/colors'
import Bar from 'components/Bar'
import Category from 'components/Category'
import media from 'utils/media'
import { DetailColorIcon, DetailLocationIcon, DetailKannelIcon, DetailDogNameIcon } from 'components/Icons'
import ImageSlider from 'components/ImageSlider'

const splitText = (text) => (
  text.split('<br/>').map(p => p)
)

const Wrapper = styled.div`
  width: ${rem(1000)};
  padding-top: ${rem(150)};
  margin: 0 auto;
  text-align: center;
  background: ${white};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100%;

  ${media.wide`
    width: 90%;
  `};

  ${media.pc`
    width: 100%;
  `};

  ${media.mobile`
    padding-top: ${rem(70)};
    display: inline-block;
    background: ${white2};
  `}
`

const DetailWrapper = styled.div`
  background: ${white2};
  margin-top: ${rem(10)};
  flex: 4;
  height: 100%;
  ${media.mobile`
    width: 100%;
    margin: 0 auto;
  `}
`

const NotImageWrapper = styled.div`
  width: 100%;

  ${media.mobile`
    width: 85%;
    margin: 0 auto;
  `}
`

const KannelImage = styled.img`
  width: 100%;
`

const BreederWrapper = styled.div`
  display: flex;
  flex-direction: column;  
`

const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: ${p => rem(p.padding)};
  justify-content: space-around;

  ${media.mobile`
    flex-wrap: ${p => p.breederDetail && 'wrap'};
    padding-top: ${p => p.mobilePadding && rem(p.mobilePadding)};
    padding-bottom: ${p => p.mobilePadding && rem(p.mobilePadding)};
    flex-direction: ${p => p.breeder && 'column'};
    display: ${p => p.label && 'none'};
    padding-left: 0;
    padding-right: 0;
  `}
`

const BreederImageNameWrapper = styled.div`
  display: flex;
  flex: 4;
  justify-content: center;
  ${media.mobile`
    flex-direction: row;
    justify-content: center;
  `}
`

const BreederDetailWrapper = styled.div`
  display: flex;
  flex-direction: row;
  ${media.mobile`
    flex: 0 1 50%;
    justify-content: left;
    margin-top: ${rem(5)};
    margin-bottom: ${rem(5)};
  `}
`

const Nav = styled.p`
  font-size: ${rem(20)};
  color: ${black};
  margin: 0;
  font-weight: bold;
`

const BreederImage = styled.img`
  width: ${rem(80)};
  height: ${rem(80)};
  border-radius: 50%;
  margin: auto 0;
`

const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  color: ${black};
  margin-left: ${rem(20)};
`

const Name = styled.p`
  font-size: ${rem(20)};
  ${'' /* margin-top: 0; */}
  ${'' /* margin-bottom: 2px; */}
  margin-top: 0;
  margin-bottom: 5px;
  font-weight: bold;
  margin-top: 0;
`

const Introduce = styled.p`
  font-size: ${rem(15)};
  margin-top: 0;
  margin-bottom: 0;
  ${'' /* margin: 0; */}
`

const SupportWrapper = styled.div`
  margin-left: ${rem(30)};
  flex: 4;

  ${media.mobile`
    margin: 0;
  `}
`

const SupportDescription = styled.p`
  font-size: ${rem(12)};
  opacity: 0.5;
`

const Support = styled(Link)`
  background: ${peacockBlue};
  color: ${white2};
  font-size: ${rem(18)};
  padding: ${rem(10)};
  width: ${rem(200)};
  margin: 0 auto;
  border-radius: ${rem(3)};

  ${media.mobile`
    padding-left: 0;
    padding-right: 0;
    width: 100%;
  `}
`

const Title = styled.p`
  font-size: ${rem(25)};
  color: ${black};
  text-align: left;
  font-weight: bold;
  
  ${media.mobile`
    padding-top: ${rem(15)};
  `}
`

const Description = styled.p`
  font-size: ${rem(15)};
  color: ${black};
  text-align: left;
  margin-top: ${rem(15)};
  margin-bottom: ${rem(20)};
  margin-top: ${p => p.breederDetail && 'auto'};
  margin-bottom: ${p => p.breederDetail && 'auto'};
  margin-left: ${p => p.breederDetail && '5px'};
`

const InterviewWrapper = styled.div`
  padding: ${rem(40)};
  ${media.mobile`
    padding: 0;
  `}
`

const KannelInfoWrapper = styled.div`
  padding: ${rem(40)};

  ${media.mobile`
    padding: 0;
  `}
`

const Image = styled.img`
  width: 100%;
`

export default class Breederdetail extends Component {
  static async getInitialProps({ query: { id } }) {
    return { id }
  }

  state = {
    breederData: []
  }

  componentDidMount() {
    const { id } = this.props
    axios.get(`${fetchServerConfig.ip}/api/breeder/${id}`)
      .then(res => this.setState({
        breederData: res.data
      }))
      .catch(err => console.log(err))
  }

  render() {
    const { breederData } = this.state
    const {
      kannelImage,
      dogImage,
      puppyImage,
      breederImage,
      breederName,
      kannelBreed,
      kannelLocation,
      kannelName,
      kannelColor,
      question_start,
      question_mind,
      question_word
    } = breederData
    let images = []
    images.push(kannelImage, dogImage, puppyImage)
    images = images.reduce((a, b) => a.concat(b), [])
    return (
      <Layout
        title={kannelBreed}
        description={`${kannelBreed}, ${kannelBreed}분양, ${kannelBreed}브리더`}
        location="detail"
        image={images.length > 0 && images[0]}
      >
        <Wrapper>
          <Category />
          <DetailWrapper>
            <ImageSlider images={images} />
            {/* <KannelImage src={data.kannelImage && data.kannelImage[0]} /> */}
            <NotImageWrapper>
              <BreederWrapper>
                <NavWrapper padding={20} label="true">
                  <Nav>브리더 인터뷰</Nav>
                  <Nav>견사 정보</Nav>
                </NavWrapper>
                <Bar borderColor={warmGrey2} mobileHide />
                <NavWrapper padding={25} breeder>
                  <BreederImageNameWrapper>
                    <BreederImage src={breederImage} />
                    <NameWrapper>
                      <Name>{breederName} 브리더</Name>
                      <Introduce>안녕하세요. {kannelBreed}<br />브리더 {breederName} 입니다.</Introduce>
                    </NameWrapper>
                  </BreederImageNameWrapper>
                  <SupportWrapper>
                    <SupportDescription>분양에 대한 자세한 상담을 나누고 싶다면?</SupportDescription>
                    <Support href="/support">문의하기</Support>
                  </SupportWrapper>
                </NavWrapper>
                <Bar borderColor={warmGrey2} />
                <NavWrapper padding={20} mobilePadding={10} breederDetail>
                  <BreederDetailWrapper>
                    <DetailLocationIcon /><Description breederDetail>{kannelLocation}</Description>
                  </BreederDetailWrapper>
                  <BreederDetailWrapper>
                    <DetailDogNameIcon /><Description breederDetail>{kannelBreed}</Description>
                  </BreederDetailWrapper>
                  <BreederDetailWrapper>
                    <DetailKannelIcon /><Description breederDetail>{kannelName}</Description>
                  </BreederDetailWrapper>
                  <BreederDetailWrapper>
                    {/* <DetailColorIcon /><Description breederDetail>{kannelColor}</Description> */}
                  </BreederDetailWrapper>
                </NavWrapper>
                <Bar borderColor={warmGrey2} />
              </BreederWrapper>
              <InterviewWrapper>
                <Title>브리더 인터뷰</Title>
                <Description>{question_start}</Description>
                <Description>{question_mind}</Description>
                <Description>{question_word}</Description>
              </InterviewWrapper>
              {/* <!-- 라이브리 시티 설치 코드 --> */}
              <div id="lv-container" data-id="city" data-uid="MTAyMC8zNTYxNy8xMjE1Mw==">
                <script
                  type="text/javascript"
                  dangerouslySetInnerHTML={{
                    __html: `{
                      (function(d, s) {
                        var j, e = d.getElementsByTagName(s)[0];
                        if (typeof LivereTower === 'function') { return; }
                        j = d.createElement(s);
                        j.src = 'https://cdn-city.livere.com/js/embed.dist.js';
                        j.async = true;
                        e.parentNode.insertBefore(j, e);
                      })(document, 'script');
                    }`
                  }}
                />

              </div>
              {/* <Bar borderColor={warmGrey2} />
              <KannelInfoWrapper>
                <Title>견사 정보</Title>
                { data.dogImage && data.dogImage.map((image, i) => <Image key={`dog-${i}`} src={image} />)}
                { data.puppyImage && data.puppyImage.map((image, i) => <Image key={`puppy-${i}`} src={image} />)}
                { data.kannelImage && data.kannelImage.map((image, i) => <Image key={`kannel-${i}`} src={image} />)}
              </KannelInfoWrapper> */}
            </NotImageWrapper>
          </DetailWrapper>
        </Wrapper>
      </Layout>
    )
  }
}


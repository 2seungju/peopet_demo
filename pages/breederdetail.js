import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Layout from 'components/Layout'
import { fetchServerConfig } from 'config/config'
import Link from 'components/Link'
import rem from 'utils/rem'
import { warmGrey2, black, white2, white, peacockBlue } from 'utils/colors'
import Bar from 'components/Bar'
import media from 'utils/media'
import {
  DetailColorIcon,
  DetailLocationIcon,
  DetailKannelIcon,
  DetailDogNameIcon
} from 'components/Icons'
import ImageSlider from 'components/ImageSlider'

const splitText = text => text.split('<br/>').map(p => p)

const Wrapper = styled.div`
  padding: ${rem(200)} 0;
  margin: 0 auto;
  text-align: center;
  background: ${white};
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  ${media.pc`
  padding: ${rem(100)} 0;
  `};

  ${media.mobile`
    width: 95%;
  `};
`

const DetailWrapper = styled.div`
  margin: auto;
  height: 100%;
  width: 60%;
  ${media.mobile`
    width: 100%;
    
    margin: 0 auto;
  `};
`

const SliderWrapper = styled.div`
  width: 55%;
  ${media.wide`
    width: 65%;
  `};
  ${media.pc`
    width: 100%;
  `};
`

// const NotImageWrapper = styled.div`
//   width: 100%;
//   display: flex;

//   ${media.mobile`
//     width: 85%;
//     margin: 0 auto;
//   `};
// `

const BreederWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: space-between;

  ${media.pc`
  flex-direction: column;  
  `};
`

const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: ${rem(20)};
  width: 60%;

  justify-content: space-between;
  ${media.pc`
    width: 100%;
    margin: 0;
    margin-top: 3%;
  `};
`

const BreederImageNameWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 2%;
  background: ${white2};
  ${media.pc`
    padding: 3%;
  `};
`

const BreederImage = styled.img`
  width: ${rem(80)};
  height: ${rem(80)};
  border-radius: 50%;
  margin: auto 0;
  box-shadow: 0 ${rem(2)} ${rem(4)} 0 rgba(0, 0, 0, 0.5);
`

const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  color: ${black};
  margin: auto 0;
  margin-left: ${rem(20)};
`

const Name = styled.p`
  font-size: ${rem(22)};
  margin-top: 0;
  margin-bottom: 5px;
  font-weight: bold;
  ${media.wide`
  font-size: ${rem(17)};
  `};
`

const Introduce = styled.p`
  font-size: ${rem(15)};
  margin-top: 0;
  margin-bottom: 0;
  ${media.wide`
  font-size: ${rem(13)};
  `};
`

const SupportWrapper = styled.div`
  width: 100%;
  flex: 4;
  margin-top: 6%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 1%;
  max-height: ${rem(200)};
  background: ${white2};
  ${media.wide`
    margin-top: 3%;
  `};
  ${media.pc`
    padding: 3%;
  `};
`

const SupportDescription = styled.p`
  font-size: ${p => (p.down ? rem(12) : rem(20))};
  opacity: ${p => p.down && 0.5};
  width: 80%;
  margin: 0 auto;
  display: ${p => p.pc && 'none'};
  ${media.wide`
    font-size: ${p => (p.down ? rem(10) : rem(15))};
  `};
  ${media.pc`
    display: ${p => p.down && 'none'};
    margin-bottom: 4%;
  display: ${p => p.pc && 'inline-block'};
  display: ${p => p.wide && 'inline-block'};    
      
  `};
`

const Support = styled(Link)`
  background: ${peacockBlue};
  color: ${white2};
  font-size: ${rem(18)};
  padding: ${rem(10)};
  width: ${rem(220)};
  margin: 0 auto;
  border-radius: ${rem(3)};

  ${media.mobile`
    padding-left: 0;
    padding-right: 0;
    width: 100%;
  `};
`

const Title = styled.p`
  font-size: ${rem(25)};
  color: ${black};
  text-align: left;
  font-weight: bold;

  ${media.mobile`
    padding-top: ${rem(15)};
  `};
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

const ContentWrapper = styled.div`
  padding: 5%;
  background: ${white2};
  margin-top: 3%;
`

const Content = styled.div`
  margin-bottom: 10%;
  ${media.mobile`
    padding: 0;
  `};
`

const KannelInfoWrapper = styled.div`
  padding: ${rem(40)};

  ${media.mobile`
    padding: 0;
  `};
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
    axios
      .get(`${fetchServerConfig.ip}/api/breeder/${id}`)
      .then(res =>
        this.setState({
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
      question_word,
      dogDescription
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
          <DetailWrapper>
            <BreederWrapper>
              <SliderWrapper>
                <ImageSlider images={images} />
              </SliderWrapper>
              {/* <KannelImage src={data.kannelImage && data.kannelImage[0]} /> */}
              <NavWrapper padding={25} breeder>
                <BreederImageNameWrapper>
                  <BreederImage src={breederImage} />
                  <NameWrapper>
                    <Name>{breederName} 브리더</Name>
                    <Introduce>
                      안녕하세요. {kannelBreed}을 브리딩하는 브리더 {breederName} 입니다.
                    </Introduce>
                  </NameWrapper>
                </BreederImageNameWrapper>
                {/* <Bar borderColor={warmGrey2} mobileHide /> */}
                <SupportWrapper>
                  <SupportDescription up wide>
                    페오펫은 국내의 윤리적인 <br /> 브리더들을 엄선하여 함께합니다.
                  </SupportDescription>
                  <SupportDescription up pc>
                    페오펫은 국내의 윤리적인 브리더들을 엄선하여 함께합니다.
                  </SupportDescription>

                  <Support href="/support">문의하기</Support>
                </SupportWrapper>
              </NavWrapper>
            </BreederWrapper>
            <ContentWrapper>
              <Content>
                <Title>브리더 인터뷰</Title>
                <Description>{question_start}</Description>
                <Description>{question_mind}</Description>
                <Description>{question_word}</Description>
              </Content>
              <Content>
                <Title>이런 분들께 추천합니다!</Title>
                <Description>{dogDescription}</Description>
              </Content>
            </ContentWrapper>
          </DetailWrapper>
        </Wrapper>
      </Layout>
    )
  }
}

import React from 'react'
import styled, { keyframes } from 'styled-components'
import axios from 'axios'

import { warmGrey, black, sky, white, white2, scarlet, red, grey } from 'utils/colors'
import rem from 'utils/rem'
import media from 'utils/media'

// 클릭시 어두운 뒷배경
const Overlay = styled.div`
  display: ${p => p.display}; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.5); /* Black w/ opacity */
`

const Wrapper = styled.div`
  display: flex;
`

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin: 7% 2%;
  width: ${rem(247)};
  height: ${rem(234)};
  position: relative;
  :hover {
    opacity: 0.7;
  }
`

const Button = styled.img`
  width: 100%;
  min-width: ${p => p.button && rem(200)};
  min-height: ${p => p.button && rem(200)};
  height: ${p => p.modal && '75%'};
`

const ButtonText = styled.div`
  text-align: center;
`

const ModalWrapper = styled.div`
  display: ${p => p.display}; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  justify-content: center;
  align-items: center;
`

const ModalContent = styled.div`
  position: relative;
  background-color: ${white};
  margin-top: ${rem(70)};
  margin-right: 10%;

  border: 1px solid #888;
  width: 60%;
  height: 90%;
  max-width: ${rem(1100)};
  min-width: ${rem(840)};
  min-height: ${rem(800)};
  z-index: 9999;
  align-content: center;
  overflow-y: auto;
  padding: ${rem(50)};

  ${media.wide`
  min-width: 65%;
  `}

  ${media.tablet`
  min-width: 60%;
  `} ${media.mobile`
    padding: 5%;
    min-height: 40%;
    height: 55%;
    min-width: ${rem(330)};
    width: 85%;
    padding-top: 0;
    padding-bottom: 50px;
    margin: auto;
  `};
`

const DetailWrapperWrapper = styled.div`
  display: flex;
  position: relative;

  margin: auto;
  ${media.mobile`
    display: none;
  `};
`
const Partition = styled.div`
  display: flex;
  flex-direction: column;
  width: ${p => (p.left ? '100%' : '15%')};
  height: ${p => !p.left && '70%'};
  position: ${p => !p.left && 'fixed'};
  right: 6%;
  top: 8.4%;

  ${media.pc`
    right: 2%;
  width: ${p => !p.left && '18%'};
    
  `};

  ${media.mobile`
    display: ${p => !p.left && 'none'};
  `};
`
// overflow-y: auto;

const BreederLink = styled.a`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const DetailWrapper = styled.div`
  position: relative;
  background-color: ${white2};
  display: flex;
  flex-direction: ${p => p.info && 'column'};
  justify-content: space-around;
  margin-top: ${p => !p.info && rem(10)};
  align-items: center;
  width: 100%;
  height: ${p => (p.info ? '75%' : '100%')};
`

const Detail = styled.div`
  display: flex;
  flex-direction: ${p => p.info && 'column'};
  align-items: ${p => !p.info && 'center'};
  width: ${p => p.breeder && '65%'};
  position: relative;
`

const CallMe = styled.div`
  background-color: ${sky};
  color: ${white2};
  display: flex;
  flex-direction: column;
  height: 23%;
  justify-content: center;
  width: 100%;
`

const TextWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin: ${rem(10)} 0;
  width: ${p => p.mobile && '90%'};
`

const Text = styled.div`
  text-align: ${p => (p.call || p.breeder ? 'center' : 'left')};
  font-size: ${rem(17)};
  font-size: ${p => rem(p.size)};
  color: ${p => p.color};
  margin: ${p => p.center && 'auto '};
  margin-bottom: ${p => p.bottom};

  ${media.wide`
    font-size: ${rem(14)};
  `};
  ${media.tablet`
    font-size: ${rem(12)};
  `};
`

const BreederImg = styled.img`
  width: ${rem(90)};
  height: ${rem(90)};
  border-radius: 50%;
  margin: auto 0;
  margin-right: 5%;
  box-shadow: 0 ${rem(2)} ${rem(4)} 0 rgba(0, 0, 0, 0.5);
  ${media.tablet`
  width: ${rem(60)};
  height: ${rem(60)};
  `};
`

const AdoptionImgWrapper = styled.div`
  margin-top: ${rem(10)};
  text-align: left;
`

const AdoptionImg = styled.img`
  width: 100%;
`

const Close = styled.span`
  color: #aaaaaa;
  position: absolute;
  right: 1.5%;
  top: 0;
  font-size: 38px;
  font-weight: bold;

  :hover,
  :focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }

  @media screen and (max-height: 770px) {
  }
  ${media.mobile`
    display: none;
  `};
`

const MobileWrapper = styled.div`
  display: none;
  flex-direction: column;
  position: relative;
  ${media.mobile`
    display:flex;
  `};
`

const Notice = styled.div`
  margin-top: 14%;
  font-size: ${rem(13)};
  color: ${white2};
  position: fixed;
  bottom: 5%;
  text-align: left;
`

const SrcollAni = keyframes`
  0% {
    opacity: 1;
    top: 29%;
  }
  15% {
    opacity: 1;
    top: 50%;
  }
  50% {
    opacity: 0;
    top: 50%;
  }
  100% {
    opacity: 0;
    top: 29%;
  }
`

const MouseScroll = styled.div`
  display: inline-block;
  line-height: 18px;
  width: 100%;
  font-size: 13px;
  font-weight: normal;
  color: ${sky};
  letter-spacing: 2px;
  margin-top: 40px;
  margin-bottom: 2px;
  text-decoration: none;
  overflow: hidden;
`

const Mouse = styled.span`
  position: relative;
  display: block;
  width: 46px;
  height: 73px;
  margin: 0 auto 20px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  border: 3px solid ${sky};
  border-radius: 23px;
`

const MouseMovement = styled.span`
  position: absolute;
  display: block;
  top: 29%;
  left: 50%;
  width: 8px;
  height: 8px;
  margin: -4px 0 0 -4px;
  background: ${sky};
  border-radius: 50%;
  -webkit-animation: ${SrcollAni} 2s linear infinite;
  -moz-animation: ${SrcollAni} 2s linear infinite;
  animation: ${SrcollAni} 2s linear infinite;
`

const MouseMessage = styled.span`
  float: left;
  margin-top: ${rem(80)};
  padding: 0;
  -webkit-animation: ${SrcollAni} 2s linear infinite;
  -moz-animation: ${SrcollAni} 2s linear infinite;
  animation: ${SrcollAni} 2s linear infinite;
  color: ${sky};
`

export default class Modal extends React.Component {
  state = {
    display: 'none',
    breederData: []
  }

  componentDidMount() {
    axios
      .get('DB서버')
      .then(res => {
        this.setState({
          breederData: res.data
        })
      })
      .catch(err => console.log(err))
  }

  render() {
    const { display, breederData } = this.state
    const {
      id,
      location,
      puppyimage,
      breeder,
      breed,
      sex,
      birth,
      detail,
      description,
      parents,
      footerimage
    } = this.props
    const none = '없음'
    const { _id, breederImage } = breederData
    console.log(footerimage)
    return (
      <Wrapper>
        <ButtonWrapper onClick={() => this.setState({ display: 'flex' })}>
          <Button button src={puppyimage} alt="puppy" />
          <ButtonText>{breed}</ButtonText>
        </ButtonWrapper>
        <ModalWrapper display={display}>
          <Overlay onClick={() => this.setState({ display: 'none' })} />
          <ModalContent>
            <DetailWrapperWrapper>
              <Partition left>
                <Button modal src={puppyimage} alt="puppy" />
                <DetailWrapper breeder>
                  <BreederLink href="DB 서버" as="url">
                    <TextWrapper>
                      <Text center size={33} color={sky}>
                        브리더
                      </Text>
                      <Detail breeder>
                        <BreederImg src={breederImage} />
                        <Text intro>
                          안녕하세요. <br />
                          {breed}를(을) 브리딩하는 브리더 {breeder} 입니다.
                        </Text>
                      </Detail>
                    </TextWrapper>
                  </BreederLink>
                </DetailWrapper>
              </Partition>
              <Partition right>
                <DetailWrapper info>
                  <Detail info>
                    <Text center size={33} color={sky} bottom="20%">
                      입양정보
                    </Text>
                    <Text>
                      <b>견종</b>: {breed}
                    </Text>
                    <Text>
                      <b>성별</b>: {sex}
                    </Text>
                    <Text>
                      <b>출생일</b>: {birth}
                    </Text>
                    <Text>
                      <b>특징</b>: {description === '' ? none : description}
                    </Text>
                    <Text>
                      <b>특이사항</b>: {detail === '' ? none : detail}
                    </Text>
                    <Text>
                      <b>견사위치</b>: {location}
                    </Text>
                  </Detail>
                </DetailWrapper>
                <CallMe>
                  <Text call>
                    상담번호: <br />010. 2069. 5988
                  </Text>
                </CallMe>
              </Partition>
            </DetailWrapperWrapper>
            <MobileWrapper>
              <Text>
                <b>WANTED</b>
              </Text>
              <Button modal src={puppyimage} alt="puppy" />
              <TextWrapper mobile>
                <Text center size={17} color={sky}>
                  입양정보
                </Text>
                <Detail info>
                  <Text size={14}>견종: {breed}</Text>
                  <Text size={14}>성별: {sex}</Text>
                  <Text size={14}>출생일: {birth}</Text>
                </Detail>
              </TextWrapper>
              <Notice>
                * PC화면으로 보시면 더욱 많은 정보를 <br />확인하실 수 있습니다.
                <Text size={13}>상담번호: 010. 2069. 5988</Text>
              </Notice>
            </MobileWrapper>
            <MouseScroll>
              <Mouse>
                <MouseMovement />
                <MouseMessage>scroll</MouseMessage>
              </Mouse>
            </MouseScroll>
            <AdoptionImgWrapper>
              <AdoptionImg src={footerimage} alt="peopet" />
            </AdoptionImgWrapper>
            <Close mobile onClick={() => this.setState({ display: 'none' })}>
              &times;
            </Close>
          </ModalContent>
        </ModalWrapper>
      </Wrapper>
    )
  }
}

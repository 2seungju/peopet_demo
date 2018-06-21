import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Link from 'components/Link'

import { fetchServerConfig } from 'config/config'
import { warmGrey, black, sky, white, white2, scarlet, red, grey } from 'utils/colors'
import rem from 'utils/rem'
import Bar from 'components/Bar'
import media from 'utils/media'

// const Overlay = styled.div`
//   display: ${p => p.display}; /* Hidden by default */
//   position: fixed; /* Stay in place */
//   z-index: 1; /* Sit on top */
//   left: 0;
//   top: 0;
//   width: 100%; /* Full width */
//   height: 100%; /* Full height */
//   overflow: auto; /* Enable scroll if needed */
//   background-color: rgb(0, 0, 0); /* Fallback color */
//   background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
// `

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
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.5); /* Black w/ opacity */
  justify-content: center;
  align-items: center;
`

const ModalContent = styled.div`
  position: relative;
  display: flex;
  background-color: ${white};
  margin-top: ${rem(70)};
  padding: ${rem(30)};
  border: 1px solid #888;
  width: 100%;
  height: 90%;
  max-width: ${rem(1100)};
  min-height: ${rem(800)};
  z-index: 9999;
  align-content: center;

  ${media.mobile`
    min-height: 40%;
    height: 50%;
    width: 85%;
    padding-top: 0;
    padding-bottom: 50px;
  `};
`

const DetailWrapperWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 80%;
  margin: auto;
  ${media.mobile`
    display: none;
  `};
`
const Partition = styled.div`
  display: flex;
  flex-direction: column;
  width: ${p => (p.left ? '60%' : '20%')};
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
  margin-top: ${p => p.breeder && rem(10)};
  margin-left: ${p => p.info && rem(10)};
  margin-bottom: ${p => p.info && rem(10)};
  align-items: center;
  width: 100%;
  height: ${p => (p.info ? '75%' : '100%')};
`

const Detail = styled.div`
  display: flex;
  flex-direction: ${p => p.info && 'column'};
  align-items: ${p => !p.info && 'center'};
  width: ${p => p.breeder && '65%'};
`

const CallMe = styled.div`
  background-color: ${sky};
  color: ${white2};
  margin-left: ${rem(10)};
  display: flex;
  flex-direction: column;
  height: 23%;
  justify-content: center;
  width: 100%;
`

const TextWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`

const Text = styled.div`
  text-align: ${p => (p.call || p.breeder ? 'center' : 'left')};
  font-size: ${rem(17)};
  font-size: ${p => rem(p.size)};
  color: ${p => p.color};
  margin: ${p => p.breeder && 'auto 0'};
  margin-bottom: ${p => p.bottom};
`

const BreederImg = styled.img`
  width: ${rem(80)};
  height: ${rem(80)};
  border-radius: 50%;
  margin: auto 0;
  margin-right: 5%;
  box-shadow: 0 ${rem(2)} ${rem(4)} 0 rgba(0, 0, 0, 0.5);
`

const Close = styled.span`
  color: #aaaaaa;
  position: absolute;
  right: 0.3%;
  top: 0;
  font-size: 28px;
  font-weight: bold;

  :hover,
  :focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }

  ${media.mobile`
    font-size: 22px;
    right: 1%;
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
`

export default class Modal extends React.Component {
  state = {
    display: 'none',
    none: '없음',
    breederData: []
  }

  componentDidMount() {
    // axios
    //   .get(`http://localhost:3000/api/breeder/breeder/${this.props.breeder}`)
    //   .then(res => {
    //     this.setState({
    //       breederData: res.data
    //     })
    //   })
    //   .catch(err => console.log(err))
    axios
      .get(`${fetchServerConfig.ip}/api/breeder/breeder/${this.props.breeder}`)
      .then(res => {
        this.setState({
          breederData: res.data
        })
        console.log(this.state.breederData)
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
      parents
    } = this.props
    // const BreederData = breederData.find(data => data.breederName === breeder)
    const none = '없음'
    const { _id, breederImage } = breederData
    return (
      // TODO:modal 브리더 이미지 디비작업 해야함
      <Wrapper>
        <ButtonWrapper onClick={() => this.setState({ display: 'flex' })}>
          <Button src={puppyimage} alt="puppy" />
          <ButtonText>{breed}</ButtonText>
        </ButtonWrapper>
        <ModalWrapper display={display}>
          <ModalContent>
            <DetailWrapperWrapper>
              <Partition left>
                <Button modal src={puppyimage} alt="puppy" />
                <DetailWrapper breeder>
                  <BreederLink
                    href={`${fetchServerConfig.ip}/breederdetail/${_id}`}
                    as={`/breederdetail/${_id}`}
                  >
                    <TextWrapper>
                      <Text breeder size={33} color={sky}>
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
                    <Text size={33} color={sky} bottom="20%">
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
              <Text>
                <b>견종</b>: {breed}
              </Text>
              <Text>
                <b>성별</b>: {sex}
              </Text>
              <Text>
                <b>출생일</b>: {birth}
              </Text>

              <Notice>
                * PC화면으로 보시면 더욱 많은 정보를 <br />확인하실 수 있습니다.
                <Text size={14}>상담번호: 010. 2069. 5988</Text>
              </Notice>
            </MobileWrapper>
            <Close onClick={() => this.setState({ display: 'none' })}>&times;</Close>
          </ModalContent>
        </ModalWrapper>
      </Wrapper>
    )
  }
}

import React from 'react'
import styled from 'styled-components'

import { warmGrey, black, sky, white, white2, scarlet, red, grey } from 'utils/colors'
import rem from 'utils/rem'
import Bar from 'components/Bar'
import media from 'utils/media'

const CautionImg = '/static/images/caution.png'

const Wrapper = styled.div`
  display: flex;
`

const Button = styled.img`
  width: 20px;
  height: 20px;
  margin: auto;
`

const ButtonText = styled.div`
  color: ${sky};
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
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
`

const ModalContent = styled.div`
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 60%;
  z-index: 9999;

  ${media.mobile`
    width: 85%;
  `};
`

const Close = styled.span`
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;

  :hover,
  :focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }
`

const Detail = styled.div`
  width: 80%;
  margin: auto;
`

export default class Modal extends React.Component {
  state = {
    display: 'none'
  }

  render() {
    const { display } = this.state
    console.log(display)
    return (
      <Wrapper>
        <Button src={CautionImg} alt="caution" onClick={() => this.setState({ display: 'flex' })} />
        <ButtonText onClick={() => this.setState({ display: 'flex' })}>알아두세요!</ButtonText>
        <ModalWrapper display={display} onClick={() => this.setState({ display: 'none' })}>
          <ModalContent>
            <Close onClick={() => this.setState({ display: 'none' })}>&times;</Close>
            <Detail>
              * 페오펫은 강아지의 건강을 최우선으로, 브리더의&nbsp;
              <b>체계적인 혈통관리, 사회화 기간인 두 달 동안의 양육비, 윤리적인 양육시설</b>&nbsp;
              금액이 합산 되어 일반 펫샵보다 입양비용이 높을 수 있습니다.
            </Detail>
          </ModalContent>
        </ModalWrapper>
      </Wrapper>
    )
  }
}

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
  position: relative;
  background-color: #fefefe;
  margin: auto;
  padding: ${rem(100)} ${rem(20)};
  border: 1px solid #888;
  width: 64%;
  z-index: 9999;
  display: flex;
  align-content: center;
  ${media.mobile`
    width: 85%;
    padding: ${rem(20)};
  `};
`

const Close = styled.span`
  color: #aaaaaa;
  position: absolute;
  right: 2%;
  top: 1%;
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
  font-size: ${p => rem(p.size)};

  ${media.mobile`
    font-size: ${p => rem(p.mobilesize)};
  `};
`

export default class Modal extends React.Component {
  state = {
    display: 'none'
  }

  render() {
    const { display } = this.state
    return (
      <Wrapper>
        <Button src={CautionImg} alt="caution" onClick={() => this.setState({ display: 'flex' })} />
        <ButtonText onClick={() => this.setState({ display: 'flex' })}>
          &nbsp;알아두세요!
        </ButtonText>
        <ModalWrapper display={display} onClick={() => this.setState({ display: 'none' })}>
          <ModalContent>
            <Detail size={20} mobilesize={15}>
              * 페오펫은 강아지의 건강을 최우선으로 생각하기 때문에, 비윤리적인 환경에서 자란 공장
              강아지들보다 입양 비용이 다소 높을 수 있습니다.
            </Detail>
            <Close onClick={() => this.setState({ display: 'none' })}>&times;</Close>
          </ModalContent>
        </ModalWrapper>
      </Wrapper>
    )
  }
}

// 브리더 디테일 페이지에서 이미지 슬라이더에 사용하는 컴포넌트

import React, { Component } from 'react'
import styled from 'styled-components'
import { LeftArrowIcon, RightArrowIcon } from 'components/Icons'
import media from 'utils/media'
import { white2, peacockBlue } from 'utils/colors'
import rem from 'utils/rem'

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
`

// 애니메이션을 통한 슬라이더 구현
const SlideWrapper = styled.div`
  position: relative;
  width: 100%;
  transform: translateX(${p => p.translateValue}%);
  transition: transform ease-out 0.6s;
  @keyframes slide-in {
    100% {
      transform: translateX(${p => p.translateValue}%);
    }
  }

  @-webkit-keyframes slide-in {
    100% {
      -webkit-transform: translateX(${p => p.translateValue}%);
    }
  }

  @keyframes slide-out {
    0% {
      transform: translateX(${p => p.translateValue}%);
    }
    100% {
      transform: translateX(${p => p.translateValue - 100}%);
    }
  }

  @-webkit-keyframes slide-out {
    0% {
      -webkit-transform: translateX(${p => p.translateValue}%);
    }
    100% {
      -webkit-transform: translateX(${p => p.translateValue - 100}%);
    }
  }
`

const Slide = styled.img`
  width: 100%;
  max-height: ${rem(350)};
`

const Dots = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  z-index: 10;
  padding: 5px 0;
`

const Dot = styled.button`
  background: ${p => (p.active ? white2 : white2)};
  opacity: ${p => (p.active ? 0.3 : 0.9)};
  display: inline-block;
  padding: 3px;
  margin-left: 5px;
  cursor: pointer;
  outline: none;
  border-width: 1.5px;
  border-radius: 50%;

  ${media.mobile`
    margin-left: 10px;
    padding: 7px;
  `};
`

export default class ImageSlider extends Component {
  state = {
    index: 0,
    translateValue: 0
  }

  goToPreviousSlide = () => {
    const { index, translateValue } = this.state
    if (index === 0) return

    this.setState({
      translateValue: translateValue + 100,
      index: index - 1
    })
  }

  goToNextSlide = () => {
    const { index, translateValue } = this.state
    const { images } = this.props

    if (index === images.length - 1) {
      return this.setState({
        translateValue: 0,
        index: 0
      })
    }

    this.setState({
      translateValue: translateValue - this.slideWidth(),
      index: index + 1
    })
  }

  handleDotClick = i => {
    const { index, translateValue } = this.state
    if (i === index) return
    if (i > index) {
      this.setState({
        translateValue: -(i * this.slideWidth()),
        index: i
      })
    } else {
      this.setState({
        translateValue: translateValue + (index - i) * this.slideWidth(),
        index: i
      })
    }
  }

  slideWidth = () => 100

  render() {
    const { images } = this.props
    const { index, translateValue } = this.state
    return (
      <Wrapper>
        <SlideWrapper translateValue={translateValue}>
          {images.map((image, i) => <Slide key={i} src={images[i]} />)}
        </SlideWrapper>
        <Dots>
          {images.map((image, i) => (
            <Dot key={i} active={i === index} onClick={() => this.handleDotClick(i)} />
          ))}
        </Dots>
        <LeftArrowIcon goToPreviousSlide={this.goToPreviousSlide} />
        <RightArrowIcon goToNextSlide={this.goToNextSlide} />
      </Wrapper>
    )
  }
}

import React from 'react'
import styled from 'styled-components'
import rem from 'utils/rem'
import { darkSkyBlue, white2, black } from 'utils/colors'
import media from 'utils/media'

const Wrapper = styled.div`
  position: absolute;
  ${''} z-index: 1000;
  top: ${rem(100)};
  left: ${rem(20)};
  ${media.tablet`
    width: 100%;
    height: 100%;
    left: 0;
  `};
`

const CenterWrapper = styled.div`
  position: relative;
  width: 60%;
  
  ${media.tablet`
    width: 80%;
    height: auto;
    margin: auto;
  `}
  ${''}
  ${''}
`

const Content = styled.img`
  width: 100%;
  height: 100%;
  ${media.tablet`
    display: none;
  `};
`

const MobileContent = styled.img`
  display: none;
  ${media.tablet`
    display: inline-block;
    width: 100%;
    height: 100%;
  `};
`

const A = styled.a`
  ${media.tablet`
    display: none;
  `};
`

const LinkWrapper = styled.div`
  display: none;
  ${media.tablet`
    display: inline-block;
    width: 100%;
    background: ${white2};
    text-align: center;
    padding-bottom: ${rem(20)};
  `};
`
const Link = styled.a`
  background: ${darkSkyBlue};
  color: ${white2};
  font-size: ${rem(12)};
  font-weight: 200;
  padding: ${rem(6)} ${rem(20)};
  border-radius: 20px;
`

const CloseWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  ${''}
  background: ${white2};
`

const Button = styled.button`
  background: ${black};
  color: ${white2};
  font-weight: 200;
  font-size: ${rem(14)};
  padding-top: ${rem(10)};
  padding-bottom: ${rem(10)};
  border-right: ${p => (p.borderRight ? `1px solid ${white2}` : 0)};
  border-left: 0;
  border-top: 0;
  border-bottom: 0;
  outline: none;
  cursor: pointer;
  text-align: center;
  flex: ${p => (p.long ? 4 : 2)};
`

const AdPopup = ({ isOpenPopup, onClosePopup, onHideToday, content, mobileContent, url }) => (
  <Wrapper>
    <CenterWrapper>
      <A href={url}>
        <Content src={content} />
      </A>
      <MobileContent src={mobileContent} />
      <LinkWrapper>
        <Link href={url}>인스타로 신청하러 가기</Link>
      </LinkWrapper>
      <CloseWrapper>
        <Button borderRight long onClick={onHideToday}>
          오늘 하루 보지 않기
        </Button>
        <Button onClick={onClosePopup}>창닫기</Button>
      </CloseWrapper>
    </CenterWrapper>
  </Wrapper>
)

export default AdPopup

import React from 'react'
import styled from 'styled-components'
import rem from 'utils/rem'
import { white, black } from 'utils/colors'
import { FooterLogo, FacebookIcon, InstaIcon, BlogIcon, YellowIcon } from 'components/Icons'
import Link from 'components/Link'
import media from 'utils/media'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  background: ${white};
  padding-top: ${rem(100)};
  padding-bottom: ${rem(100)};
  justify-content: space-around;
  display: ${p => p.isSideMenuFolded && 'none'};
  ${media.mobile`
    flex-direction: column;
  `}
`

const Content = styled.div`
  flex-direction: column;
  ${media.mobile`
    width: 70%;
    margin: auto;
  `}
`

const Text = styled.div`
  font-size: ${rem(15)};
  color: ${black};
`

const ImageWrapper = styled.div`
`

const Logo = styled.p`
`

const IconLink = styled.a`
  display: flex;
  align-items: center;
  margin: ${rem(10)}
`

const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: ${rem(20)};
  margin-bottom: ${rem(20)};
  ${media.mobile`
    justify-content: center;
  `}
`

const Footer = ({ isSideMenuFolded }) => (
  <Wrapper isSideMenuFolded={isSideMenuFolded}>
    <Content>
      <Text>사업자등록번호 354-88-00899 | 법인명(주)코스모스이펙트 | 대표 최현일</Text>
      <Text>통신판매업 신고 2017-서울강남-04764호 | 주소 서울시 강남구 테헤란로 69길 5, 12층 </Text>
      <Text>동물판매업 신고 110111-6571388 | 법인명(주)코스모스이펙트 | 대표 최현일</Text>
      <FooterLogo mobileOpen />
      <IconWrapper>
        <IconLink href="https://www.facebook.com/peopleNpet/">
          <FacebookIcon />
        </IconLink>
        <IconLink href="https://www.instagram.com/peo_pet/">
          <InstaIcon />
        </IconLink>
        <IconLink href="https://blog.naver.com/peopet">
          <BlogIcon />
        </IconLink>
        <IconLink href="https://pf.kakao.com/_pUyTd">
          <YellowIcon />
        </IconLink>
      </IconWrapper>
      <Text>2017 © Peopet, Inc. All Rights Reserved</Text>
    </Content>
    <FooterLogo mobileHidden />
  </Wrapper>
)

export default Footer

// 네비게이션 바 레이아웃

import React from 'react'
import styled from 'styled-components'
import NavLinks from 'components/Nav/NavLinks'
import media from 'utils/media'
import Button from 'components/Button'
import { backgroundColor } from 'utils/nav'
import { white2, peacockBlue } from 'utils/colors'
import {
  LeftDropIcon,
  CloseIcon,
  RightDropIcon,
  FacebookIcon,
  InstaIcon,
  BlogIcon,
  YellowIcon,
  HeadLogo
} from 'components/Icons'
import rem from 'utils/rem'

const Wrapper = styled.div`
  width: 100%;
  ${backgroundColor(white2)};
`

const SubWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  ${media.mobile`
    justify-content: space-between;
  `} margin: 0 auto;
  height: 60px;
  padding: 5px 20px;
  width: 90%;
  box-shadow: 0 2px 6px -5px rgba(0, 0, 0, 0.5);
`

const IconLink = styled.a`
  display: flex;
  align-items: center;
  margin: ${rem(5)};
  position: relative;
  max-height: ${p => p.icon && rem(30)};
  ${media.pc`
    margin: auto;
  `};
`

const NavWrapper = styled.div`
  display: flex;

  ${media.pc`
    display: none;
  `};
`

const DropButton = styled(Button).attrs({
  active: true,
  color: 'transparent'
})`
  display: none;
  border-radius: 0;
  position: absolute;
  top: 30%;
  left: 0;
  ${media.pc`
    display: flex;
  `};
`

const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  ${media.pc`
    display: none;
  `};
`

const Navbar = ({
  onDropMenuToggle,
  isDropMenuFolded,
  isSideMenuFolded,
  showDropMenu,
  isScrolled,
  location,
  onSideMenuToggle
}) => (
  <Wrapper isScrolled={isScrolled} location={location}>
    <SubWrapper>
      <DropButton onClick={onDropMenuToggle}>
        {isDropMenuFolded ? <CloseIcon /> : <LeftDropIcon />}
      </DropButton>
      <IconLink href="/">
        <HeadLogo />
      </IconLink>
      <NavWrapper>
        <NavLinks />
      </NavWrapper>
      <IconWrapper>
        <IconLink icon href="https://www.facebook.com/peopleNpet/">
          <FacebookIcon />
        </IconLink>
        <IconLink icon href="https://www.instagram.com/peopet_official/">
          <InstaIcon />
        </IconLink>
        <IconLink icon href="https://blog.naver.com/peopet">
          <BlogIcon />
        </IconLink>
        <IconLink icon href="https://pf.kakao.com/_pUyTd">
          <YellowIcon />
        </IconLink>
      </IconWrapper>
    </SubWrapper>
  </Wrapper>
)

export default Navbar

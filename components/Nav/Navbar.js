import React from 'react'
import styled, { css } from 'styled-components'
import Logo from 'components/Nav/Logo'
import Link from 'components/Link'
import { navbarHeight } from 'utils/sizes'
import NavLinks from 'components/Nav/NavLinks'
import media from 'utils/media'
import { FoldIcon } from 'components/Nav/DropbarIcons'
import Button from 'components/Button'
import { backgroundColor } from 'utils/nav'
import { white2, peacockBlue } from 'utils/colors'
import { LeftDropIcon, CloseIcon, RightDropIcon, FacebookIcon, InstaIcon, BlogIcon, YellowIcon, HeadLogo } from 'components/Icons'
import rem from 'utils/rem'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  ${media.mobile`
    justify-content: space-between;
  `}
  margin: 0 auto;
  height: 60px;
  padding: 5px 20px;
  ${backgroundColor(white2)};
  ${'' /* ${p => {
    if (p.location === '/') {
      return p.isScrolled ? backgroundColor(white2) : backgroundColor('transparent')
    }
    return p.isScrolled ? backgroundColor('yellow') : backgroundColor('red')
  }} */}
`

const IconLink = styled.a`
  display: flex;
  align-items: center;
  margin: ${rem(10)}
`

const NavWrapper = styled.div`
  display: flex;

  ${media.tablet`
    display: none;
  `}
`

const DropButton = styled(Button).attrs({
  active: true,
  color: 'transparent'
})`
  display: none;
  border-radius: 0;
  ${media.tablet`
    display: flex;
  `}
`

const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;

  ${media.tablet`
    display: none;
  `}
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
    <DropButton onClick={onSideMenuToggle}>
      {isSideMenuFolded ? <CloseIcon /> : <LeftDropIcon />}
    </DropButton>
    <IconLink href="/">
      <HeadLogo />
    </IconLink>
    <NavWrapper>
      <NavLinks />
    </NavWrapper>
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
    <DropButton onClick={onDropMenuToggle}>
      {isDropMenuFolded ? <CloseIcon /> : <RightDropIcon />}
    </DropButton>
  </Wrapper>
)

export default Navbar

import React from 'react'
import styled, { css } from 'styled-components'
import Navbar from 'components/Nav/Navbar'
import Dropbar from 'components/Nav/Dropbar'
import { navbarHeight } from 'utils/sizes'
import rem from 'utils/rem'
import SideNav from 'components/Nav/SideNav'
import AutoComplete from 'components/AutoComplete'
import { peacockBlue } from 'utils/colors'
import media from 'utils/media'

const Wrapper = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 9999;
  transition: display 0.2s;
  /* opacity: 0.5;

  :hover {
    opacity: 1;
  } */
`

const BlueBackground = styled.div`
  width: 100%;
  height: ${rem(100)};
  position: fixed;
  top: ${rem(60)};
  background: ${peacockBlue};
  ${media.mobile`
    height: ${rem(90)};
  `};
`

const Nav = ({
  transparent,
  onDropMenuToggle,
  isDropMenuFolded,
  showDropMenu,
  isScrolled,
  location,
  isMobile,
  onSideMenuToggle,
  isSideMenuFolded,
  onChangeBreeder,
  activeDogId,
  handleClickSuggestion
}) => (
  <Wrapper>
    {/* <SideNav
      isSideMenuFolded={isSideMenuFolded}
      onSideMenuToggle={onSideMenuToggle}
      location={location}
      onChangeBreeder={onChangeBreeder}
      activeDogId={activeDogId}
    /> */}
    <Navbar
      onDropMenuToggle={onDropMenuToggle}
      isDropMenuFolded={isDropMenuFolded}
      isSideMenuFolded={isSideMenuFolded}
      showDropMenu={showDropMenu}
      location={location}
      isScrolled={isScrolled}
      onSideMenuToggle={onSideMenuToggle}
    />
    {location === 'breeder' && <BlueBackground />}
    {location === 'breeder' && (
      <AutoComplete handleClickSuggestion={handleClickSuggestion} location={location} />
    )}
    <Dropbar isDropMenuFolded={isDropMenuFolded} onDropMenuToggle={onDropMenuToggle} />
  </Wrapper>
)

export default Nav

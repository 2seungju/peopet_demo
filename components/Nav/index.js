// 네비게이션 바 index

import React from 'react'
import styled, { css } from 'styled-components'
import Navbar from 'components/Nav/Navbar'
import Dropbar from 'components/Nav/Dropbar'
import rem from 'utils/rem'
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
    {/* 브리더 페이지 일때 자동완성 컴포넌트까지 네비게이션 바와 같이 나옴 */}
    {location === 'breeder' && (
      <AutoComplete handleClickSuggestion={handleClickSuggestion} location={location} />
    )}
    <Dropbar isDropMenuFolded={isDropMenuFolded} onDropMenuToggle={onDropMenuToggle} />
  </Wrapper>
)

export default Nav

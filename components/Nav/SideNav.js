import React from 'react'
import styled, { css } from 'styled-components'
import NavLinks from 'components/Nav/NavLinks'
import media from 'utils/media'
import { MobileCategory } from 'components/Category'

const Wrapper = styled.section`
  display: none;
  ${media.tablet`
    display: inline-block;
  `};
  position: absolute;
  top: 50px;
  left: 0;
  right: 0;
  width: 70%;
  ${'' /* height: 1000px; */}
  z-index: 10;

  ${p => p.open ? css`
    height: 1000px;
    ${'' /* max-height: 500px; */}
  ` : css`
    height: 0;
  `}
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  transition: all 0.3s ease-in;
  user-select: none;
  -webkit-overflow-scrolling: touch;
  ${'' /* overflow-x: hidden; */}
  overflow-y: scroll;
  background: white;
  ${'' /* display: none; */}
`

const SideNav = ({
  isSideMenuFolded,
  onSideMenuToggle,
  location,
  onChangeBreeder,
  activeDogId
}) => (
  <Wrapper open={isSideMenuFolded}>
    {/* <RightDropIcon mobileOpen />     */}
    <MobileCategory
      onSideMenuToggle={onSideMenuToggle}
      location={location}
      onChangeBreeder={onChangeBreeder}
      activeDogId={activeDogId}
    />
  </Wrapper>
)

export default SideNav

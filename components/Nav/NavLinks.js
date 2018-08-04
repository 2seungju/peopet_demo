import React from 'react'
import styled, { css } from 'styled-components'

import rem from 'utils/rem'
import { peacockBlue, black } from 'utils/colors'
import Link from '../Link'

// 드랍바가 false or true에 따라 css가 다름
// 드랍바가 true일 때 글자가 늦게 나타나는 애니메이션
const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  flex: 0 0 auto;
  ${p =>
    p.dropbar
      ? css`
          margin-top: 20%;
          flex-direction: column;
          padding-top: 30px;
          padding-left: 30px;
          padding-bottom: 30px;
          width: 60%;
          animation-duration: 2s;
          animation-name: fade;

          @keyframes fade {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
        `
      : css``};
`

const NavLink = styled(Link)`
  flex: 0 0 auto;
  display: inline-block;
  transition: opacity 0.2s, transform 0.2s;
  cursor: pointer;
  color: ${black};
  font-size: ${rem(20)};
  padding-left: ${rem(20)};
  padding-right: ${rem(20)};
  font-weight: 500;
  opacity: 0.8;

  &:hover,
  &:focus {
    color: ${peacockBlue};
  }

  &:active {
    transform: scale(0.95);
    opacity: 0.4;
    color: ${peacockBlue};
    font-weight: bold;
  }
  ${p =>
    p.dropbar &&
    css`
      width: 100%;
      margin-top: 5px;
    `};
`

const NavSeparator = styled.span`
  ${p =>
    p.dropbar &&
    css`
      display: none;
    `};
`

const NavLinks = ({ dropbar }) => (
  <Wrapper dropbar={dropbar}>
    <NavLink dropbar={dropbar} href="/about">
      페오펫
    </NavLink>
    <NavSeparator dropbar={dropbar} />
    <NavLink dropbar={dropbar} href="/breeder">
      브리더
    </NavLink>
    <NavSeparator dropbar={dropbar} />
    <NavLink dropbar={dropbar} href="/puppy">
      자견입양
    </NavLink>
    <NavSeparator dropbar={dropbar} />
    <NavLink dropbar={dropbar} href="/partner">
      제휴업체
    </NavLink>
    <NavSeparator dropbar={dropbar} />
    <NavLink dropbar={dropbar} href="/support">
      분양문의
    </NavLink>
  </Wrapper>
)

export default NavLinks

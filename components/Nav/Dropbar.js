import React from 'react'
import styled, { css } from 'styled-components'
import NavLinks from 'components/Nav/NavLinks'

const Wrapper = styled.section`
  position: absolute;
  top: 50px;
  left: 0;
  height: 100vh;
  ${p =>
    p.open
      ? css`
          width: 85%;
        `
      : css`
          width: 0;
        `} display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: space-between;
  transition: all 0.2s ease-in;
  user-select: none;
  -webkit-overflow-scrolling: touch;
  background: white;
`

const Dropbar = ({ isDropMenuFolded }) => (
  <Wrapper open={isDropMenuFolded}>
    {isDropMenuFolded && <NavLinks dropbar={isDropMenuFolded} />}
  </Wrapper>
)

export default Dropbar

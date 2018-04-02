import React from 'react'
import styled, { css } from 'styled-components'
import NavLinks from 'components/Nav/NavLinks'

const Wrapper = styled.section`
  position: absolute;
  top: 50px;
  right: 0;
  width: 70%;
  ${p => p.open ? css`
    ${'' /* height: 300px; */}
    max-height: 500px;
  ` : css`
    height: 0;
  `}
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  transition: all 0.3s ease-in;
  user-select: none;
  -webkit-overflow-scrolling: touch;
  background: white;
`

const Dropbar = ({
  isDropMenuFolded
}) => (
  <Wrapper open={isDropMenuFolded}>
    {
      isDropMenuFolded && <NavLinks dropbar={isDropMenuFolded} />
    }
  </Wrapper>
)

export default Dropbar

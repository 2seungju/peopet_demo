import styled, { css } from 'styled-components'

import resetInput from 'utils/form'

const Button = styled.button`
  ${resetInput} flex: 0 0 auto;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  ${p => css`
    color: ${p.color};
  `} &:focus {
    outline: none !important;
    text-decoration: none;
    border: none;
    box-shadow: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0) !important;
  }
`

export default Button

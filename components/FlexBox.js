import styled, { css } from 'styled-components'
import flexDirection from 'utils/flex'

const FlexBox = styled.section`
  display: flex;
  ${p => p.reverse ? flexDirection('row') : flexDirection('row-reverse')}
`

export default FlexBox

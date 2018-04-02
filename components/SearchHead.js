import React from 'react'
import styled from 'styled-components'
import AutoComplete from 'components/AutoComplete'
import { peacockBlue } from 'utils/colors'

const Wrapper = styled.div`
  ${'' /* background: ${peacockBlue} */}
`

const SearchHead = ({ location }) => (
  <Wrapper location={location}>
    <AutoComplete location={location} />
  </Wrapper>
)

export default SearchHead

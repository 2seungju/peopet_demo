import React from 'react'
import { PropagateLoader } from 'react-spinners'
import styled from 'styled-components'

const Wrapper = styled.div`
  height: 600px;
  width: 100 %;
  display: flex;
  background: transparent;
  justify-content: center;
  text-align: center;
`

const SpinnerWrapper = styled.div`
  margin: auto;
  text-align: center;
  justify-content: center
`

const Spinner = ({ loading }) => (
  <Wrapper>
    <SpinnerWrapper>
      <PropagateLoader
        color="#123abc"
        loading={loading}
        size={20}
      />
    </SpinnerWrapper>
  </Wrapper>
)

export default Spinner

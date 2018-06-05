import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
`

const CardWrapper = styled.div`
  display: flex;
`

const Breed = styled.p``

const Img = styled.img``

export default class AdoptionCard extends React.Component {
  render() {
    const Puppy = this.props.puppies
    return (
      <Wrapper>
        <CardWrapper>{Puppy.map(puppy => <Breed>{puppy.breed}</Breed>)}</CardWrapper>
      </Wrapper>
    )
  }
}

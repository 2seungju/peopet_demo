import React from 'react'
import styled from 'styled-components'

import Link from 'components/Link'

import { warmGrey2, squash, black, pooBrown, peacockBlue, white, white2, dark } from 'utils/colors'
import rem from 'utils/rem'
import Bar from 'components/Bar'
import media from 'utils/media'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 1%;
`

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 7% 1%;

  :hover {
    opacity: 0.7;
  }
`

const AdoptionLink = styled(Link)`
  width: ${rem(247)};
  height: ${rem(234)};
  position: relative;
`

const Img = styled.img`
  width: 100%;
`

const Breed = styled.p`
  color: ${black};
`

const AdoptionCard = ({
  id,
  location,
  puppyimage,
  breeder,
  breed,
  sex,
  birth,
  detail,
  description,
  parents
}) => (
  <Wrapper>
    <CardWrapper>
      <AdoptionLink href={{ pathname: '/puppydetail', query: { id } }} as={`/puppydetail/${id}`}>
        <Img src={puppyimage} alt="puppy" />
        <Breed>{breed}</Breed>
      </AdoptionLink>
    </CardWrapper>
  </Wrapper>
)

export default AdoptionCard

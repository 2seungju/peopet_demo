import React from 'react'
import styled from 'styled-components'
import FlexBox from 'components/FlexBox'

import BreederCardLong from 'components/Breeder/BreederCardLong'
import rem from 'utils/rem'
import media from 'utils/media'
import AdoptionCard from './AdoptionCard'

const Wrapper = styled(FlexBox)`
  padding-top: ${rem(20)};
  padding-bottom: ${rem(20)};
  /* height: 500px; */
  ${media.mobile`
    width: 100%;
  `} margin: auto;
  flex-flow: row wrap;
  justify-content: center;
  flex: 0 1 auto;
  /* flex: auto; */
  display: flex;
  height: 100%;
`

const AdoptionCardList = ({ puppies }) => (
  // let data

  // if (location === '/' && position === 'vertical') {
  //   data = breederData.slice(0, 3)
  // }

  // if (location === '/' && position === 'horizontal') {
  //   data = breederData.slice(4, 10)
  // }

  <Wrapper>
    {puppies.map((puppy, i) => (
      <AdoptionCard
        key={i}
        id={puppy._id}
        location={puppy.kannelLocation}
        puppyimage={puppy.puppyimage}
        breeder={puppy.breeder}
        breed={puppy.breed}
        sex={puppy.sex}
        birth={puppy.birth}
        detail={puppy.detail}
        description={puppy.description}
        parents={puppy.parents}
      />
    ))}
    {/* <TextWrapper>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </TextWrapper>
      <Image src={image} /> */}
  </Wrapper>
)

export default AdoptionCardList

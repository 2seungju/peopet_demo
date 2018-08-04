// 입양 가능자견 카드

import React from 'react'
import styled from 'styled-components'
import FlexBox from 'components/FlexBox'

import rem from 'utils/rem'
import media from 'utils/media'
import Modal from './Modal'

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
  <Wrapper>
    {puppies.map((puppy, i) => (
      <Modal
        key={i}
        id={puppy._id}
        location={puppy.location}
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
  </Wrapper>
)

export default AdoptionCardList

import React from 'react'
import styled from 'styled-components'
import FlexBox from 'components/FlexBox'

import BreederCardLong from 'components/Breeder/BreederCardLong'
import flexDirection from 'utils/flex'
import rem from 'utils/rem'
import media from 'utils/media'
import BreederCard from './BreederCard'

const Wrapper = styled(FlexBox)`
  padding-top: ${rem(20)};
  padding-bottom: ${rem(20)};
  /* height: 500px; */
  ${p => p.position === 'horizontal' && flexDirection('column')};
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

const TextWrapper = styled.section`
  margin: 0 auto;
`

const Title = styled.h3`
  font-size: 20px;
`

const Description = styled.p`
  font-size: 14px;
`

const Image = styled.img`
  width: 100px;
  height: 100px;
`

const BreederList = ({ breederData, location, position }) => (
  // let data

  // if (location === '/' && position === 'vertical') {
  //   data = breederData.slice(0, 3)
  // }

  // if (location === '/' && position === 'horizontal') {
  //   data = breederData.slice(4, 10)
  // }

  <Wrapper position={position}>
    {breederData.map((breeder, i) => (
      <BreederCardLong
        key={i}
        position={position}
        id={breeder._id}
        kannelImage={breeder.kannelImage}
        kannelBreed={breeder.kannelBreed}
        kannelLocation={breeder.kannelLocation}
        breederImage={breeder.breederImage}
        breederName={breeder.breederName}
      />
    ))}
    {/* <TextWrapper>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </TextWrapper>
      <Image src={image} /> */}
  </Wrapper>
)

export default BreederList

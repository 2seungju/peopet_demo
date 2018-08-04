// 브리더 페이지 왼쪽에 있는 카테고리 컴포넌트

import React from 'react'
import styled from 'styled-components'
import Link from 'components/Link'
import { white2, black, peacockBlue } from 'utils/colors'
import rem from 'utils/rem'
import media from 'utils/media'
import { filterDogData } from '../dogData'

const MobileWrapper = styled.div`
  display: none;
  flex: 1;
  flex-direction: column;
  height: ${rem(1400)};
  background: ${white2};
  text-align: left;
  width: ${rem(240)};
  padding: 0 ${rem(20)};
  ${''} ${media.tablet`
    display: flex;
  `};
`

const Wrapper = styled.div`
  display: flex;
  // flex:1;
  flex-direction: column;
  background: ${white2};
  text-align: left;
  padding: 0 ${rem(20)};
  margin: ${rem(10)};
  ${media.wide`
    flex:none;
    width: ${rem(280)};
  `} ${media.tablet`
    display: none;
  `};
`

const Label = styled.p`
  font-size: ${rem(25)};
  padding: ${rem(10)} 0;
  color: ${black};
  font-size: ${p => p.mobile && rem(20)};
  font-weight: bold;
`

const SubLabelWrapper = styled.div`
  display: flex;
  align-items: center;
`

const Arrow = styled.div`
  width: ${rem(16)};
  height: ${rem(10)};
  margin-right: ${rem(5)};
  border-left: solid ${rem(16)} #333333;
  border-bottom: solid 10px transparent;
  border-top: solid 10px transparent;
`

const SubLabel = styled.p`
  font-size: ${rem(20)};
  font-weight: bold;
  margin-top: 5px;
  margin: auto 0;
  ${media.tablet`
    font-size: ${rem(15)};
  `};
`

const NavLink = styled(Link)`
  font-size: ${rem(20)};
  padding: ${rem(10)};
  color: ${black};
  font-size: ${p => p.mobile && rem(15)};
  color: ${p => (p.activeDogId === p.dogId ? peacockBlue : black)};
  &:hover {
    color: ${peacockBlue};
  }
`

const BreederQueryButton = styled.button`
  font-size: ${rem(18)};
  padding: ${rem(10)};
  color: ${p => (p.activeDogId === p.dogId ? peacockBlue : black)};
  font-size: ${p => p.mobile && rem(15)};
  background: ${white2};
  border: 0;
  text-align: left;
  ${''} cursor: pointer;
  outline: none;
  &:hover {
    color: ${peacockBlue};
  }
  &:active {
    font-weight: bold;
  }
`

const Category = ({ mobile, pc, location, onChangeBreeder, activeDogId }) => (
  <Wrapper mobile={mobile} pc={pc}>
    <Label mobile={mobile}>견종별 브리더</Label>
    <SubLabelWrapper>
      <Arrow />
      <SubLabel>카테고리</SubLabel>
    </SubLabelWrapper>
    {filterDogData.map(dog => {
      const { dogName, id } = dog
      const dogId = id

      if (location === 'breeder') {
        return (
          <BreederQueryButton
            dogId={dogId}
            activeDogId={activeDogId}
            onClick={() => onChangeBreeder(dogId, dogName)}
            key={dogId}
          >
            {dogName}
          </BreederQueryButton>
        )
      }

      return (
        <NavLink
          dogId={dogId}
          activeDogId={activeDogId}
          pc={pc}
          href={{ pathname: '/breeder', query: { dogId } }}
          as={`/breeder/${dogId}`}
          key={dogId}
        >
          {dogName}
        </NavLink>
      )
    })}
  </Wrapper>
)

export const MobileCategory = ({ onSideMenuToggle, location, onChangeBreeder, activeDogId }) => (
  <MobileWrapper>
    <Label mobile>견종별 브리더</Label>
    {filterDogData.map(dog => {
      const { dogName, id } = dog
      const dogId = id

      if (location === 'breeder') {
        return (
          <BreederQueryButton
            onClick={() => {
              onChangeBreeder(dogId, dogName)
              onSideMenuToggle()
            }}
            dogId={dogId}
            activeDogId={activeDogId}
            key={dogId}
            mobile
          >
            {dogName}
          </BreederQueryButton>
        )
      }

      return (
        <NavLink
          handleClick={onSideMenuToggle}
          dogId={dogId}
          activeDogId={activeDogId}
          mobile
          href={{ pathname: '/breeder', query: { dogId } }}
          as={`/breeder/${dogId}`}
          key={dogId}
        >
          {dogName}
        </NavLink>
      )
    })}
  </MobileWrapper>
)

export default Category

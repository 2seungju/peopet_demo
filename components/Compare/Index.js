// 파이어베이스에 저장된 데이터 값을 이용해 강아지를 비교하는 컴포넌트
// 실제로 상용화 하진 않았음.

import React, { Component } from 'react'
import styled from 'styled-components'

import firebase from 'components/Compare/firebase'
import { peacockBlue, white2 } from 'utils/colors'
import Autocomplete from './Autocomplete'
import Compare from './Compare'

// 파이어베이스 연결
const database = firebase.database()

const Wrapper = styled.div`
  text-align: center;
  margin: auto;
  display: flex;
  flex-direction: column;
  width: 90%;
  color: #333333;
`

const Caution = styled.div`
  display: absolute;
  bottom: 0;
  opacity: 0.5;
  margin-left: 75%;
`

// 그리드 레이아웃을 이용함
const ComparisonGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 10% 35% 20% 35%;
  border: 0.5px solid ${peacockBlue};
  border-radius: 5px;
  > div {
    border: 0.5px solid #333333;
    padding: 1em;
  }
`

const Comparison = styled.div`
grid-column: 3
grid-row: ${p => p.row};
font-size: 35px;
`

const Empty = styled.div`
  grid-column: ${p => p.column};
  grid-row: ${p => p.row};
`

class Index extends Component {
  state = {
    selected: false,
    compareData: {},
    dog: {},
    data: []
  }

  componentDidMount = () => {
    firebase
      .database()
      .ref()
      .once('value')
      .then(snapshot => {
        this.setState({
          data: snapshot.val()
        })
      })
  }

  handleClick = () => {
    this.setState({
      selected: !this.state.selected
    })
  }

  fetchData = dog => {
    this.setState({
      dog
    })
  }

  fetchCompare = dog => {
    this.setState({
      compareData: dog
    })
  }

  render() {
    const { selected, dog, compareData } = this.state
    console.log(this.state.data)

    const Breed = styled.div`
      grid-column: ${p => p.column};
      grid-row: 2;
      font-weight: bold;
    `

    const Height = styled.div`
      grid-column: ${p => p.column};
      grid-row: 3;
    `

    const Weight = styled.div`
      grid-column: ${p => p.column};
      grid-row: 4;
    `

    const DefultInput = styled.div`
      position: relative;
      grid-column: 2;
      grid-row: 1;
    `
    const Add = styled.div`
      cursor: pointer;
      grid-column: 3;
      grid-row: 1;
    `
    const AddInput = styled.div`
      position: relative;
      grid-column: 4;
      grid-row: 1;
    `

    return (
      <Wrapper>
        <ComparisonGrid>
          <Empty column={1} row={1} />
          <DefultInput>
            <Autocomplete fetchData={this.fetchData} kannelBreed={this.props.kannelBreed} />
          </DefultInput>
          <Add onClick={this.handleClick}>{selected === false ? '다른 품종과 비교' : '감추기'}</Add>
          <AddInput>{selected === true && <Compare fetchCompare={this.fetchCompare} />}</AddInput>
          <Breed column={1}>
            <b>품종</b>
          </Breed>
          <Breed column={2}>
            {dog.kr_Breed !== undefined && `${dog.kr_Breed}`}
            <br />
            {dog.kr_Breed !== undefined && `(${dog.Breed})`}
          </Breed>
          <Empty />
          <Breed column={4}>
            {compareData.kr_Breed !== undefined && `${compareData.kr_Breed}`}
            <br />
            {compareData.kr_Breed !== undefined && `(${compareData.Breed})`}
          </Breed>
          <Height column={1}>
            <b>길이</b>
          </Height>
          <Height column={2}>
            {dog.kr_Breed !== undefined && `${dog.height_low_cm}cm ~ ${dog.height_high_cm}cm`}
          </Height>
          <Comparison row={3}>
            {(dog.kr_Breed && compareData.kr_Breed) !== undefined &&
              (dog.height_high_cm > compareData.height_high_cm
                ? '>'
                : dog.height_high_cm === compareData.height_high_cm
                  ? '='
                  : '<')}
          </Comparison>
          <Height column={4}>
            {compareData.kr_Breed !== undefined &&
              `${compareData.height_low_cm}cm ~ ${compareData.height_high_cm}cm`}
          </Height>
          <Weight column={1}>
            <b>무게</b>
          </Weight>
          <Weight column={2}>
            {dog.kr_Breed !== undefined && `${dog.weight_low_kg}kg ~ ${dog.weight_high_kg}kg`}
          </Weight>
          <Comparison row={4}>
            {(dog.kr_Breed && compareData.kr_Breed) !== undefined &&
              (dog.weight_high_kg > compareData.weight_high_kg
                ? '>'
                : dog.weight_high_kg === compareData.weight_high_kg
                  ? '='
                  : '<')}
          </Comparison>
          <Weight column={4}>
            {compareData.kr_Breed !== undefined &&
              `${compareData.weight_low_kg}kg ~ ${compareData.weight_high_kg}kg`}
          </Weight>
        </ComparisonGrid>
        <Caution>※ 오류가 있다면 신고해주세요</Caution>
      </Wrapper>
    )
  }
}

export default Index

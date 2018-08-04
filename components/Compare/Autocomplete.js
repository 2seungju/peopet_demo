// 파이어베이스에 있는 정보에 대한 자동완성 기능을 지원함

import React, { Component } from 'react'
import Autosuggest from 'react-autosuggest'
import styled from 'styled-components'

import { DogBreeds } from 'utils/DogBreeds'
// import 'components/Compare/styles.css'

const Wrapper = styled.div``

const Breed = styled.p`
  cursor: pointer;
`

const SuggestionWrapper = styled.div`
  text-align: left;
  border-width: 0;
  :hover (
    cursor: pointer;
  )
`

// const Img = styled.img``;

// const ClickIcon = styled.div``;

const InputWrapper = styled.div`
  position: relative;
  :hover span {
    display: inline-block;
  }
`

const Delete = styled.span`
  display: none;
  position: absolute;
  cursor: pointer;
  left: 78%;
  top: 0;
  opacity: 0.6;
`

const Input = styled.input`
  height: 30px;
  font-size: 20px;
`

const Data = DogBreeds

const getSuggestions = value => {
  const inputValue = value.trim()
  const inputLength = inputValue.length
  return inputLength === 0 ? [] : Data.filter(dog => dog.kr_Breed.includes(value))
}

const getSuggestionValue = suggestion => suggestion.kr_Breed

const renderSuggestion = suggestion => (
  <SuggestionWrapper>
    <Breed>{suggestion.kr_Breed}</Breed>
  </SuggestionWrapper>
)

class Autocomplete extends Component {
  state = {
    value: '',
    suggestions: [],
    data: []
  }

  // componentDidMount = () => {
  //   firebase
  //     .database()
  //     .ref()
  //     .once('value')
  //     .then(snapshot => {
  //       this.setState({
  //         data: snapshot.val()
  //       })
  //       // var username = (snapshot.val() && snapshot.val().username) || "Anonymous";
  //       // console.log(username);
  //     })
  // }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    })
  }

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    })
  }

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    })
  }

  onSuggestionSelected = (event, { suggestion }) => {
    this.props.fetchData(suggestion)
  }

  handleClick = () => {
    this.setState({
      value: ''
    })
  }

  renderInputComponent = inputProps => (
    <InputWrapper>
      <Input compare {...inputProps} />
      <Delete onClick={this.handleClick}>&times;</Delete>
    </InputWrapper>
  )

  render() {
    const { value, suggestions } = this.state
    const inputProps = {
      placeholder: 'Select a Breed',
      value,
      onChange: this.onChange
    }

    return (
      <Wrapper>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
          onSuggestionSelected={this.onSuggestionSelected}
          renderInputComponent={this.renderInputComponent}
        />
        {/* {this.state.selected === true && (
          <BreedBox>
            <Breed>
              {dog.kr_Breed}
              <br />({dog.Breed})
            </Breed>
            <Height>
              크기: {dog.height_low_cm}cm ~ {dog.height_high_cm}cm
            </Height>
            <Weight>
              무게: {dog.weight_low_kg}kg ~ {dog.weight_high_kg}kg
            </Weight>
          </BreedBox>
        )} */}
      </Wrapper>
    )
  }
}

export default Autocomplete

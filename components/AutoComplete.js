import React, { Component } from 'react'
import Autosuggest from 'react-autosuggest'
import update from 'react-addons-update'
import rem from 'utils/rem'
import { white2, black, grey, peacockBlue } from 'utils/colors'
import Link from 'components/Link'
import styled, { css } from 'styled-components'
import { SearchIcon } from 'components/Icons'
import '../static/styles.scss'
import { dogData, suggestDogData } from '../dogData'
import media from 'utils/media'
// search icon 위치가 안맞음
const searchImgUrl = 'static/images/wt_main_home_search.svg'

function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

const Wrapper = styled.div`
  width: ${p => p.location !== '/' && '50%'};
  margin: ${p => p.location !== '/' && 'auto'};

  ${media.pc`
    width: ${p => p.location !== '/' && '60%'};
  `};

  ${media.tablet`
    width: ${p => p.location !== '/' && '70%'};
  `};

  ${media.mobile`
    width: ${p => p.location !== '/' && '90%'}
  `}
`


const Icon = styled(SearchIcon)`
  position: absolute;
  width: 200px;
  top: 0;
`

const SuggestionButton = styled.button`
  width: 95%;
  height: 100%;
  margin: 0 2.5%;
  padding: ${rem(20)} 0 ${rem(20)} 0;
  ${'' /* padding: ${rem(40)}; */}
  background: ${white2};
  font-size: ${rem(20)};
  text-align: left;
  border-width: 0;
  &:hover {
    background: ${peacockBlue};
    color: ${white2}
  };

  ${media.mobile`
    font-size: ${rem(13)};
    margin: 0 ${rem(15)};
    padding: ${rem(5)} 0;
  `}
`

const SuggestionLink = styled(Link)`
  width: 95%;
  height: 100%;
  margin: 0 2.5%;
  padding: ${rem(20)} 0 ${rem(20)} ${rem(15)};
  ${'' /* padding: ${rem(40)}; */}
  background: ${white2};
  font-size: ${rem(20)};
  
  &:hover {
    background: ${peacockBlue};
    color: ${white2}
  };

  ${media.mobile`
    font-size: ${rem(13)};
    margin: 0 ${rem(15)};
    padding: ${rem(5)} 0;
  `}
`

const SuggestionLabel = styled.div`
  color: ${black};
  font-size: ${rem(30)};
  ${'' /* background: ${grey}; */}
  text-align: left;
  margin: ${rem(20)} 2.5%;
  font-weight: bold;

  ${media.mobile`
    font-size: ${rem(15)};
    margin: ${rem(10)} ${rem(15)};
  `}
`

// const Input = styled.input`
// width: 600px;
// :placeholder {
//   opacity: 0.1;
// }
// `

class AutoComplete extends Component {

  state = {
    value: '',
    suggestions: [],
    defaultSuggestionLabel: '주간 인기 검색어',
    defaultSuggestions: [],
    noSuggestions: false,
    placeholder: '찾고 싶은 견종을 검색하세요.'
  }

  componentDidMount() {
    const { defaultSuggestions } = this.state

    this.setState({
      defaultSuggestions: update(
        defaultSuggestions,
        {
          $push: suggestDogData
        }
      )
    })
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    })
  }

  onSuggestionsFetchRequested = ({ value }) => {
    const suggestions = this.getSuggestions(value)
    const isInputBlank = value.trim() === ''
    const noSuggestions = !isInputBlank && suggestions.length === 0
    console.log(suggestions)
    this.setState({
      suggestions,
      noSuggestions,
      placeholder: '' // 클릭시 placeholder blank
    })
  }

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
      placeholder: '찾고 싶은 견종을 검색하세요.'
    })
  }

  renderInputComponent = inputProps => {
    const { location } = this.props
    const inputClassName = location === '/' ? 'react-autosuggest__input' : 'react-autosuggest__input__breeder'
    const imgClassName = location === '/' ? 'search-img' : 'search-img__breeder'
    const wrapperClassName = location === '/' ? 'input-wrapper' : 'input-wrapper-breeder'
    return (
      <div className={wrapperClassName}>
        <img className={imgClassName} src={searchImgUrl} alt="searchImg" />
        <input {...inputProps} className={inputClassName} />
      </div>
    )
  }

  renderSuggestion = (suggestion, { query }) => {
    const { dogName, id } = suggestion
    const { location, handleClickSuggestion } = this.props
    const dogId = id

    if (location === '/') {
      return (
        <SuggestionLink href={{ pathname: '/breeder', query: { dogId } }} as={`/breeder/${dogId}`}>
          {dogName}
        </SuggestionLink>
      )
    }

    return (
      <SuggestionButton
        type="submit"
        onClick={() =>
        // {
        handleClickSuggestion(dogId)
        
        // }
        }
      >
        {dogName}
      </SuggestionButton>
    )
  }

  // renderSuggestion = suggestion => suggestion.dogName

  renderSuggestionsContainer = ({ containerProps, children, query }) => {
    const { defaultSuggestionLabel } = this.state
    const { location } = this.props
    const isDefaulted = this.state.value.length > 0
    // const className = location === '/' ? 'react-autosuggest__suggestions-container--open' : 'react-autosuggest__suggestions-container--open__breeder'
    return (
      <div {...containerProps}>
        {!isDefaulted && <SuggestionLabel>{defaultSuggestionLabel}</SuggestionLabel> }
        {children}
      </div>
    )
  }

  shouldRenderSuggestions = () => true

  getSuggestions = value => {
    const { defaultSuggestions } = this.state
    const escapedValue = escapeRegexCharacters(value.trim())
    const regex = new RegExp('^' + escapedValue, 'i')

    return value.length === 0
      ? defaultSuggestions
      : dogData.filter(dog => regex.test(dog.dogName))
  }

  getSuggestionValue = suggestion => suggestion.dogName

  render() {
    const { value, suggestions, noSuggestions, placeholder } = this.state
    const { location } = this.props
    const inputProps = {
      placeholder: placeholder,
      value,
      onChange: this.onChange
    }

    return (
      <Wrapper location={location}>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={this.getSuggestionValue}
          shouldRenderSuggestions={this.shouldRenderSuggestions}
          renderSuggestion={this.renderSuggestion}
          inputProps={inputProps}
          renderSuggestionsContainer={this.renderSuggestionsContainer}
          renderInputComponent={this.renderInputComponent}
          focusInputOnSuggestionClick={false}
        />
        {
          noSuggestions &&
            <div className="no-suggestions">
              준비중입니다.
            </div>
        }
      </Wrapper>
    )
  }
}

export default AutoComplete

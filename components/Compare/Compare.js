import React, { Component } from 'react'
import Autocomplete from './Autocomplete'

export default class Compare extends Component {
  state = {
    dog: {}
  }

  fetchData = dog => {
    this.setState({
      dog
    })
    this.props.fetchCompare(dog)
  }
  render() {
    console.log(this.state.dog)
    return (
      <div>
        <Autocomplete fetchData={this.fetchData} kannelBreed="" />
      </div>
    )
  }
}

import React, { Component } from 'react'
import Layout from 'components/Layout'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  text-align: center;
  max-width: 100%;
  height: 100%;
`


export default class Blog extends Component {
  static getInitialProps({ query: { id } }) {
    return { id }
  }

  state = {
    windowWidth: null
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions)
    this.updateDimensions()
  }

  updateDimensions = () => {
    const width = window.innerWidth
    // console.log(width)
    this.setState({
      windowWidth: width,
    })
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions)
  }


  render() {
    // console.log(this.state.windowWidth)
    return (
      <Layout title="support">
        <Wrapper>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSegmy62B_MihUSFd0Ov7OdmqsMkNaU1byJeWbKdK6SexeSgMA/viewform?embedded=true"
            width={`${this.state.windowWidth}px`}
            minwidth="100%"
            height="6000"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="google-form"
            scrolling="no"
          >
            로드 중...
          </iframe>
        </Wrapper>
      </Layout>
    )
  }
}

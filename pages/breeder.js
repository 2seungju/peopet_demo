import React, { Component } from 'react'
import axios from 'axios'
import Layout from 'components/Layout'
import BreederCard from 'components/Breeder/BreederCard'
import { fetchServerConfig } from 'config/config'
import styled from 'styled-components'
import { grey } from 'utils/colors'
import rem from 'utils/rem'
import Category from 'components/Category'
import media from 'utils/media'
import Spinner from 'components/Spinner'
import ErrorPage from '../pages/_error'

const Wrapper = styled.div`
  width: 90%;
  margin: auto;
  padding-top: ${rem(160)};
  padding-bottom: ${rem(100)};
  display: flex;
  flex-direction: row;
  ${'' /* overflow-x: hidden; */}
  ${'' /* justify-content: space-around; */}
  ${'' /* background: ${white}; */}
  ${'' /* background: yellow; */}
  
  ${media.wide`
    width: 100%;
  `};
  ${media.mobile`
    width: 80%;
    padding-top: ${rem(90)};
  `}
`

const BreederList = styled.div`
  ${'' /* display: flex; */}
  flex-wrap: wrap;
  flex: 4;
  ${media.tablet`
    text-align: center;
  `};
  ${media.mobile`
    width: 90%;
    display: inline-block;
    text-align: center;
  `}
  ${'' /* flex-direction: column; */}
`

export default class Breeder extends Component {
  static async getInitialProps({ query }) {
    const { dogId } = query
    const fetchQuery = dogId ? `/dog/${dogId}` : ''
    const res = await axios.get(`https://${fetchServerConfig.ip}:3000/api/breeder${fetchQuery}`)

    if (res.data.statusCode === 404) {
      return { statusCode: 404 }
    }
    // console.log(res.data)
    return { data: res.data }
    // const res = await axios.get(`http://${fetchServerConfig.ip}:4000/api/breeder`)    
  }

  state = {
    errorFound: false,
    loading: true,
    filterDogData: [],
    isFiltered: false,
    activeDogId: '',
    fetchError: false
  }

  componentDidCatch(error, info) {
    /* here is where the magic happens.
       code inside here is executed if an error
       itn thrown from children */
    this.setState({ errorFound: true })
    // do some other logics if needed
  }

  onChangeBreeder = (id) => {
    // const res = await axios.get(`http://${fetchServerConfig.ip}:4000/api/breeder/dog/${id}`)
    // return this.setState({
    //   isFiltered: true,
    //   filterDogData: res.data
    // })
    // console.log(id, 'iidd')
    return this.setState({
      loading: true,
      activeDogId: id
    }, () => {
      return axios.get(`https://${fetchServerConfig.ip}:3000/api/breeder/dog/${id}`)
        .then(res => {
          return this.setState({
            filterDogData: res.data,
            isFiltered: true,
            loading: false,
          })
        })
        .catch(error => console.log(error))
          // return this.setState({
          //   fetchError: true
          // })
    })
  }

  handleClickSuggestion = (id) => {
    // console.log(id, 'iidd')
    return this.setState({
      loading: true,
      activeDogId: id
    }, () => {
      return axios.get(`https://${fetchServerConfig.ip}:3000/api/breeder/dog/${id}`)
        .then(res => {
          return this.setState({
            filterDogData: res.data,
            isFiltered: true,
            loading: false,
          })
        })
        .catch(error => console.log(error))
      // return this.setState({
      //   fetchError: true
      // })
    })
  }


  render() {
    const { loading, errorFound, dogData, isFiltered, filterDogData, activeDogId, fetchError } = this.state
    const { data, isMobileCategorySelected, mobileCategorySelectedId, statusCode } = this.props
    const { onChangeBreeder, handleClickSuggestion } = this
    const breederData = isFiltered ? filterDogData : data
    // return isFiltered && loading ? <Spinner loading={loading} /> : (
    // return (
    return statusCode === '404' ? <ErrorPage statusCode={404} /> : (
      <Layout
        title="breeder"
        background={grey}
        location="breeder"
        onChangeBreeder={onChangeBreeder}
        handleClickSuggestion={handleClickSuggestion}
        activeDogId={activeDogId}
        loading={loading}
        isFiltered={isFiltered}
      >
        <Wrapper>
          <Category
            location="breeder"
            onChangeBreeder={onChangeBreeder}
            activeDogId={activeDogId}
          />
          {
            isFiltered && loading ? <Spinner loading={loading} /> :
            <BreederList>
              {
                !breederData ? <Spinner loading={loading} /> :
                breederData.map((breeder, i) => (
                  <BreederCard
                    key={i}
                    id={breeder._id}
                    position="breeder"
                    kannelImage={breeder.kannelImage}
                    kannelBreed={breeder.kannelBreed}
                    kannelLocation={breeder.kannelLocation}
                    breederImage={breeder.breederImage}
                    breederName={breeder.breederName}
                  />
                ))
              }
            </BreederList>
          }
        </Wrapper>
      </Layout>
    )
  }
}
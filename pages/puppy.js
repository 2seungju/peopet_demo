import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

import Layout from 'components/Layout'
import Link from 'components/Link'
import AdoptionCardList from 'components/Adoption/AdoptionCardList'
import Spinner from 'components/Spinner'

import { warmGrey2, squash, black, pooBrown, peacockBlue, white, white2, dark } from 'utils/colors'
import rem from 'utils/rem'
import Bar from 'components/Bar'
import media from 'utils/media'

const Wrapper = styled.div`
  width: 60%;
  margin: auto;
  position: relative;
`

const TitleWrapper = styled.div`
  width: 100%;
  margin-top: ${rem(30)};
  height: ${rem(250)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`
const Title = styled.p`
  font-size: ${rem(36)};
  font-weight: 300;
`
const AdoptionWrapper = styled.div`
  display: flex;
`

export default class Puppy extends React.Component {
  state = {
    errorFound: false,
    loading: true,
    filterDogData: [],
    isFiltered: false,
    activeDogId: '',
    fetchError: false,
    puppies: []
  }

  componentDidMount() {
    const { puppyId } = this.props
    const fetchQuery = puppyId ? `/puppy/${puppyId}` : ''

    // axios
    // .get(`${fetchServerConfig.ip}/api/review`)
    // .then(res => {
    //   this.setState({
    //     reviews: res.data
    //   })
    // })
    // .catch(err => console.log(err))
    axios
      .get('http://localhost:3000/api/puppy')
      .then(res => {
        this.setState({
          puppies: res.data
        })
      })
      .catch(err => console.log(err))
  }

  render() {
    const { puppies } = this.state
    console.log(puppies)
    return (
      <Layout
        background
        title="입양가능자견"
        description="전문 브리더, 브리더, 자견 입양, 강아지 분양"
      >
        <Wrapper>
          <TitleWrapper>
            <Title>
              페오펫과 함께하는 윤리적인 <br />브리더들의 자견을 분양합니다.
            </Title>
          </TitleWrapper>
          <AdoptionWrapper>
            <AdoptionCardList puppies={puppies} />
          </AdoptionWrapper>
        </Wrapper>
      </Layout>
    )
  }
}

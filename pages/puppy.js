// 입양 가능 자견 페이지

import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

import Layout from 'components/Layout'
// 입양가능한 강아지리스트 컴포넌트 호출
import AdoptionCardList from 'components/Adoption/AdoptionCardList'
import { fetchServerConfig } from 'config/config'

import { warmGrey2, squash, black, pooBrown, peacockBlue, white, white2, dark } from 'utils/colors'
import rem from 'utils/rem'
import media from 'utils/media'

const Wrapper = styled.div`
  width: 67%;
  margin: auto;
  position: relative;
`

const TitleWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: ${rem(30)};
  height: ${rem(250)};
  flex-direction: column;
  justify-content: center;
  text-align: center;
  ${media.mobile`
  display: none;
`};
`

const MobileTitleWrapper = styled.div`
  display: none;
  width: 100%;
  margin-top: ${rem(30)};
  height: ${rem(250)};
  flex-direction: column;
  justify-content: center;
  text-align: center;
  ${media.mobile`
    display: flex;
  `};
`

const Title = styled.p`
  font-size: ${rem(36)};
  font-weight: 300;
  ${media.mobile`
    font-size: ${rem(24)}
  `};
`
const AdoptionWrapper = styled.div`
  display: flex;
`

export default class Puppy extends React.Component {
  state = {
    puppies: []
  }

  componentDidMount() {
    axios
      .get('DB 서버')
      .then(res => {
        this.setState({
          puppies: res.data
        })
      })
      .catch(err => console.log(err))
  }

  render() {
    const { puppies } = this.state
    return (
      <Layout
        background
        title="입양가능자견"
        description="전문 브리더, 브리더, 자견 입양, 강아지 분양"
      >
        <Wrapper>
          <TitleWrapper>
            <Title>
              <b>페오펫과 함께하는 윤리적인 브리더들의 자견을 분양합니다.</b>
            </Title>
          </TitleWrapper>
          <MobileTitleWrapper>
            <Title>
              <b>
                페오펫과 함께하는 <br />윤리적인 브리더들의 <br />자견을 분양합니다.
              </b>
            </Title>
          </MobileTitleWrapper>
          <AdoptionWrapper>
            <AdoptionCardList puppies={puppies} />
          </AdoptionWrapper>
        </Wrapper>
      </Layout>
    )
  }
}

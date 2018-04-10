import React, { Component } from 'react'
import Layout from 'components/Layout'
import styled from 'styled-components'
import { BuildServiceIcon } from 'components/Icons'
import { peacockBlue, white2} from 'utils/colors'
import media from 'utils/media'

const Wrapper = styled.div`
  width: 100%;
  height: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${media.mobile`
    height: 800px;
  `}
`
const TitleWrapper = styled.div`
  margin-top: 30px;
`

const Title = styled.p`
  font-size: 30px;
  color: ${peacockBlue};
  text-align: center;
  margin: 0;
  font-weight: ${p => p.bold && 'bold'};

  ${media.mobile`
    font-size: 20px;
  `}
`

export default class Blog extends Component {
  static getInitialProps({ query: { id } }) {
    return { id }
  }

  render() {
    return (
      <Layout
        title="제휴업체"
        description="전문 브리더, 브리더, 입양 혜택, 강아지 분양"
      >
        <Wrapper>
          <BuildServiceIcon />
          <TitleWrapper>
            <Title>죄송합니다. 현재 서비스를 준비중 입니다.</Title>
            <Title bold>더 나은 서비스로 찾아뵙겠습니다.</Title>
          </TitleWrapper>
        </Wrapper>
      </Layout>
    )
  }
}

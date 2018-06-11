import React from 'react'
import styled from 'styled-components'
import rem from 'utils/rem'
import Link from 'components/Link'
import Bar from 'components/Bar'
import { scarlet, squash, white2, black } from 'utils/colors'
import media from 'utils/media'

const Wrapper = styled.div`
  width: 100%;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.09);
  margin: ${rem(10)} 0;
  background: ${white2};

  :hover,
  :focus,
  :active {
    filter: brightness(80%);
  }

  ${media.mobile`
    margin: 10% auto;
  `};
`

// ${media.tablet`
// width: ${rem(271)};
// margin: ${rem(10)} 0;
// `};
const BreederLink = styled(Link)`
  width: 100%;
`

const CardWrapper = styled.div`
  display: flex;
  ${media.mobile`
    flex-direction: column;
    `};
`

const ImageWrapper = styled.div`
  width: 27%;
  ${media.mobile`
    width: 100%;
    `};
`

const KannelImage = styled.img`
  width: 100%;
  height: 100%;
`

const Label = styled.p`
  padding: 0 ${rem(3)};
  position: absolute;
  width: ${rem(56)};
  top: 0;
  right: ${p => p.position !== 'horizontal' && 0};
  left: ${p => p.position === 'horizontal' && 0};
  background-color: ${p => (p.position === 'horizontal' ? squash : scarlet)};
  color: ${white2};
  font-size: ${rem(17)};
  margin: 0;
  font-weight: bold;
`

const BreederWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  text-align: left;
  margin-top: ${rem(6)};
  padding-bottom: ${rem(10)};

  ${media.mobile`
    margin: 0;
    flex-direction: row;
    justify-content: space-around;
  `};
`

const BreederImage = styled.div`
  width: ${rem(60)};
  height: ${rem(60)};
  border-radius: 50%;
  background-image: url(${p => p.img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  margin: auto 4%;
  margin-top: 3.3%;
  display: ${p => p.mobile && 'none'};

  ${media.mobile`
  display: ${p => (p.mobile ? 'inline-block' : 'none')};

  `};
`

const Breeder = styled.p`
  font-size: ${rem(15)};
  margin: ${rem(5)} 0;
  color: ${black};
  ${media.mobile`
    display: ${p => p.hello && 'none'};
    margin: auto 0;
  `};
`

const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 55%;
  ${media.mobile`
    width: 100%;
    text-align:left;
    `};
`

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 85%;
  ${media.wide`
    width: 99%;
    `};
  ${media.mobile`
  justify-content: space-around;

    `};
`

const Title = styled.p``

const BreederCardLong = ({
  kannelImage,
  kannelBreed,
  kannelLocation,
  kannelColor,
  breederImage,
  breederName,
  position,
  id
}) => (
  <Wrapper>
    <BreederLink
      href={{ pathname: '/breederdetail', query: { id } }}
      as={`/breederdetail/${id}`}
      position={position}
    >
      <CardWrapper>
        <ImageWrapper>
          <KannelImage src={kannelImage[0]} />
          {/* {position !== 'breeder' && <Label position={position}>BEST</Label>} */}
        </ImageWrapper>
        <BreederImage img={breederImage && breederImage} />
        <DetailWrapper>
          <TitleWrapper>
            <Title>
              <b>견종</b> : {kannelBreed}
            </Title>
            <Title>
              <b>위치</b> : {kannelLocation}
            </Title>
            {/* <Title><b>모색</b> : {kannelColor}</Title> */}
          </TitleWrapper>
          <Bar margin="none" mobilemargin={`${rem(5)} auto`} />
          <BreederWrapper>
            <BreederImage mobile img={breederImage && breederImage} />
            <Breeder>
              <b>{breederName} 브리더</b> <br />
            </Breeder>
            <Breeder hello>
              안녕하세요 {kannelBreed}를(을) 브리딩 하는 {breederName} 브리더 입니다.
            </Breeder>
          </BreederWrapper>
        </DetailWrapper>
      </CardWrapper>
    </BreederLink>
  </Wrapper>
)

export default BreederCardLong

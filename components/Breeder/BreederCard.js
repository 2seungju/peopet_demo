import React from 'react'
import styled from 'styled-components'
import rem from 'utils/rem'
import Link from 'components/Link'
import { scarlet, squash, white2, black } from 'utils/colors'
import media from 'utils/media'
// 이상복 브리더 카드 견종이 길어서 폭이 넓어야 안깨짐. width를 줄이려면 글씨를 줄이든 대책이 필요
const Wrapper = styled(Link)`
  width: ${rem(271)};
  height: ${rem(262)};
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.09);
  margin: ${rem(10)};
  background: ${white2};

  ${media.mobile`
    width: ${rem(271)};
    margin: ${rem(10)} 0;
  `}
`

const ImageWrapper = styled.div`
  width: 100%;
  height: ${rem(180)};
  position: relative;
`

const KannelImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${p => p.img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
`

const Label = styled.p`
  padding: 0 ${rem(8)};
  position: absolute;
  top: 0;
  right: ${p => p.position !== 'horizontal' && 0};
  left: ${p => p.position === 'horizontal' && 0};
  background-color: ${p => p.position === 'horizontal' ? squash : scarlet};
  color: ${white2};
  font-size: ${rem(20)};
  margin: 0;
`

const BreederWrapper = styled.div`
  position: absolute;
  bottom: ${rem(-50)};
  right: ${rem(15)};
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
  margin: 0 auto;
`

const BreederName = styled.p`
  height: 10px;
  font-size: ${rem(20)};
  margin: 5px 0;
  color: ${black};
`

const DetailWrapper = styled.div`
  text-align: left;
  margin-top: ${rem(15)};
  margin-left: ${rem(20)};
`

const Title = styled.p`
  margin: 0;
  font-size: ${rem(15)};
`

const BreederCard = ({
  kannelImage,
  kannelBreed,
  kannelLocation,
  kannelColor,
  breederImage,
  breederName,
  position,
  id
}) => (
  <Wrapper href={{ pathname: '/breederdetail', query: { id } }} as={`/breederdetail/${id}`} position={position}>
    <ImageWrapper position={position}>
      <KannelImage img={kannelImage && kannelImage[0]} />
      {
        position !== 'breeder' &&
          <Label position={position}>
            {position === 'horizontal' ? 'NEW' : 'BEST'}
          </Label>
      }
      <BreederWrapper>
        <BreederImage img={breederImage && breederImage} />
        <BreederName>{breederName}</BreederName>
      </BreederWrapper>
    </ImageWrapper>
    <DetailWrapper position={position}>
      <Title><b>견종</b> : {kannelBreed}</Title>
      <Title><b>위치</b> : {kannelLocation}</Title>
      {/* <Title><b>모색</b> : {kannelColor}</Title> */}
    </DetailWrapper>
  </Wrapper>
)

export default BreederCard

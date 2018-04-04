import styled from 'styled-components'
import media from 'utils/media'
import rem from 'utils/rem'
import { white2, dark } from 'utils/colors'

const url = 'static/images/wt_main_head_icon_facebook.svg'
const facebookImg = require('static/images/wt_main_head_icon_facebook.svg')
const instaImg = require('static/images/wt_main_head_icon_instagram.svg')
const blogImg = require('static/images/wt_main_head_icon_blog.svg')
const yellowImg = require('static/images/wt_main_head_icon_yellowid.svg')
const headImg = require('static/images/wt_main_head_logo.svg')
const footerImg = require('static/images/wt_main_footer_logo.svg')
const rightDropImg = require('static/images/wt_main_head_menu.svg')
const searchImg = require('static/images/wt_main_home_search.svg')
const homePartnerRightImg = require('static/images/wt_main_contact_arrow.svg')
const detailColorImg = require('static/images/breederdetail_color.svg')
const detailKannelImg = require('static/images/breederdetail_homename.svg')
const detailLocationImg = require('static/images/breederdetail_location.svg')
const detailDogNameImg = require('static/images/breederdetail_pet.svg')
const changeRotationImg = require('static/images/changeculture_icon.svg')
const buildServiceImg = require('static/images/wtm_buildserviece.svg')
const leftDropImg = require('static/images/m_head_listmenu.svg')
const closeImg = require('static/images/m_close.svg')
const LeftArrowImg = require('static/images/slider-left-arrow.svg')
const RightArrowImg = require('static/images/slider-right-arrow.svg')

const Img = styled.img`
  display: ${p => p.mobileOpen && 'none'};
  cursor: pointer;
  ${media.mobile`
    width: ${p => p.mobileWidth && rem(p.mobileWidth)};
    display: ${p => p.mobileHidden && 'none'};
    display: ${p => p.mobileOpen && 'flex'};
    margin-left: ${p => p.mobileOpen && 'auto'};
    margin-right: ${p => p.mobileOpen && 'auto'};
    margin-top: ${p => p.mobileOpen && rem(20)};
    margin-bottom: ${p => p.mobileOpen && rem(20)};
  `}
`

const HomePartnerRightImg = styled.img`
  width: 6px;
  height: 12px;
  border: solid 1px ${white2};
  color: ${white2};
`

const SearchImg = styled.img`
  position: absolute;
  top: ${rem(30)};
  right: ${rem(30)};
`

const ChangeRotationImg = styled.img`
  ${media.mobile`
    width: ${rem(85)};
    margin: 0 auto;
  `}
`

const ArrowWrapper = styled.button`
  position: absolute;
  top: 50%;
  left: ${p => p.left && '25px'};
  right: ${p => p.right && '25px'};
  z-index: 10;
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${'' /* background: ${white2}; */}
  background: transparent;
  ${'' /* border-radius: 50%; */}
  border-width: 0;
  cursor: pointer;
  transition: transform ease-in .1s;
  outline: none;

  &:hover {
    transition: transform ease-in .1s;
    transform: scale(1.1)
  };

  ${media.mobile`
    width: 25px;
    height: 25px;
    left: ${p => p.left && '15px'};
    right: ${p => p.right && '15px'};
    top: 45%;
  `}
`

export const FacebookIcon = () => (
  <Img src={url} alt="facebookImg" />
)

export const InstaIcon = () => (
  <Img src={url} alt="instaImg" />
)

export const BlogIcon = () => (
  <Img src={url} alt="blogImg" />
)

export const YellowIcon = () => (
  <Img src={url} alt="yellowImg" />
)

export const HeadLogo = () => (
  <Img src={url} alt="headImg" mobileWidth={110} />
)

export const FooterLogo = ({ mobileHidden, mobileOpen }) => (
  <Img src={url} alt="headImg" mobileHidden={mobileHidden} mobileOpen={mobileOpen} />
)

export const RightDropIcon = () => (
  <Img src={url} alt="rightDropImg" />
)

export const SearchIcon = (...rest) => (
  <SearchImg src={url} alt="searchImg" {...rest} />
)

export const HomePartnerRightIcon = (...rest) => (
  <HomePartnerRightImg src={url} alt="homePartnerRightImg" {...rest} />
)

export const DetailColorIcon = () => (
  <Img src={url} alt="detailColorImg" />
)

export const DetailDogNameIcon = () => (
  <Img src={url} alt="detailDogNameImg" />
)

export const DetailLocationIcon = () => (
  <Img src={url} alt="detailLocationImg" />
)

export const DetailKannelIcon = () => (
  <Img src={url} alt="detailKannelImg" />
)

export const ChangeRotationIcon = () => (
  <ChangeRotationImg src={url} alt="changeRotationImg" />
)

export const BuildServiceIcon = () => (
  <Img src={url} alt="buildServiceImg" />
)

export const LeftDropIcon = () => (
  <Img src={url} alt="leftDropImg" />
)

export const CloseIcon = () => (
  <Img src={url} alt="cloeImg" />
)

export const LeftArrowIcon = ({ goToPreviousSlide }) => (
  <ArrowWrapper onClick={goToPreviousSlide} left>
    <Img src={url} alt="leftArrowImg" mobileWidth={20} />
  </ArrowWrapper>
)

export const RightArrowIcon = ({ goToNextSlide }) => (
  <ArrowWrapper onClick={goToNextSlide} right>
    <Img src={url} alt="rightArrowImg" mobileWidth={20} />
  </ArrowWrapper>
)

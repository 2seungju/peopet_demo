import styled from 'styled-components'
import media from 'utils/media'
import rem from 'utils/rem'
import { white2, dark } from 'utils/colors'

const facebookUrl = 'static/images/wt_main_head_icon_facebook.svg'
const instaUrl = 'static/images/wt_main_head_icon_instagram.svg'
const blogUrl = 'static/images/wt_main_head_icon_blog.svg'
const yellowUrl = 'static/images/wt_main_head_icon_yellowid.svg'
const headUrl = 'static/images/wt_main_head_logo.svg'
const footerUrl = 'static/images/wt_main_footer_logo.svg'
const rightDropUrl = 'static/images/wt_main_head_menu.svg'
const searchUrl = 'static/images/wt_main_home_search.svg'
const homePartnerRightUrl = 'static/images/wt_main_contact_arrow.svg'
const detailColorUrl = 'static/images/breederdetail_color.svg'
const detailKannelUrl = 'static/images/breederdetail_homename.svg'
const detailLocationUrl = 'static/images/breederdetail_location.svg'
const detailDogNameUrl = 'static/images/breederdetail_pet.svg'
const changeRotationUrl = 'static/images/changeculture_icon.svg'
const buildServiceUrl = 'static/images/wtm_buildserviece.svg'
const leftDropUrl = 'static/images/m_head_listmenu.svg'
const closeUrl = 'static/images/m_close.svg'
const leftArrowUrl = 'static/images/slider-left-arrow.svg'
const rightArrowUrl = 'static/images/slider-right-arrow.svg'

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
  <Img src={facebookUrl} alt="facebookImg" />
)

export const InstaIcon = () => (
  <Img src={instaUrl} alt="instaImg" />
)

export const BlogIcon = () => (
  <Img src={blogUrl} alt="blogImg" />
)

export const YellowIcon = () => (
  <Img src={yellowUrl} alt="yellowImg" />
)

export const HeadLogo = () => (
  <Img src={headUrl} alt="headImg" mobileWidth={110} />
)

export const FooterLogo = ({ mobileHidden, mobileOpen }) => (
  <Img src={footerUrl} alt="headImg" mobileHidden={mobileHidden} mobileOpen={mobileOpen} />
)

export const RightDropIcon = () => (
  <Img src={rightDropUrl} alt="rightDropImg" />
)

export const SearchIcon = (...rest) => (
  <SearchImg src={searchUrl} alt="searchImg" {...rest} />
)

export const HomePartnerRightIcon = (...rest) => (
  <HomePartnerRightImg src={homePartnerRightUrl} alt="homePartnerRightImg" {...rest} />
)

export const DetailColorIcon = () => (
  <Img src={detailColorUrl} alt="detailColorImg" />
)

export const DetailDogNameIcon = () => (
  <Img src={detailDogNameUrl} alt="detailDogNameImg" />
)

export const DetailLocationIcon = () => (
  <Img src={detailLocationUrl} alt="detailLocationImg" />
)

export const DetailKannelIcon = () => (
  <Img src={detailKannelUrl} alt="detailKannelImg" />
)

export const ChangeRotationIcon = () => (
  <ChangeRotationImg src={changeRotationUrl} alt="changeRotationImg" />
)

export const BuildServiceIcon = () => (
  <Img src={buildServiceUrl} alt="buildServiceImg" />
)

export const LeftDropIcon = () => (
  <Img src={leftDropUrl} alt="leftDropImg" />
)

export const CloseIcon = () => (
  <Img src={closeUrl} alt="cloeImg" />
)

export const LeftArrowIcon = ({ goToPreviousSlide }) => (
  <ArrowWrapper onClick={goToPreviousSlide} left>
    <Img src={leftArrowUrl} alt="leftArrowImg" mobileWidth={20} />
  </ArrowWrapper>
)

export const RightArrowIcon = ({ goToNextSlide }) => (
  <ArrowWrapper onClick={goToNextSlide} right>
    <Img src={rightArrowUrl} alt="rightArrowImg" mobileWidth={20} />
  </ArrowWrapper>
)

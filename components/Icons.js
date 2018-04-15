import styled from 'styled-components'
import media from 'utils/media'
import rem from 'utils/rem'
import { white2, dark } from 'utils/colors'

const facebookImgUrl = '/static/images/wt_main_head_icon_facebook.svg'
const instaImgUrl = '/static/images/wt_main_head_icon_instagram.svg'
const blogImgUrl = '/static/images/wt_main_head_icon_blog.svg'
const yellowImgUrl = '/static/images/wt_main_head_icon_yellowid.svg'
const headImgUrl = '/static/images/wt_main_head_logo.svg'
const footerImgUrl = '/static/images/wt_main_footer_logo.svg'
const rightDropImgUrl = '/static/images/wt_main_head_menu.svg'
const searchImgUrl = '/static/images/wt_main_home_search.svg'
const homePartnerRightImgUrl = '/static/images/wt_main_contact_arrow.svg'
const detailColorImgUrl = '/static/images/breederdetail_color.svg'
const detailKannelImgUrl = '/static/images/breederdetail_homename.svg'
const detailLocationImgUrl = '/static/images/breederdetail_location.svg'
const detailDogNameImgUrl = '/static/images/breederdetail_pet.svg'
const changeRotationImgUrl = '/static/images/changeculture_icon.svg'
const buildServiceImgUrl = '/static/images/wtm_buildserviece.svg'
const leftDropImgUrl = '/static/images/m_head_listmenu.svg'
const closeImgUrl = '/static/images/m_close.svg'
const LeftArrowImgUrl = '/static/images/slider-left-arrow.svg'
const RightArrowImgUrl = '/static/images/slider-right-arrow.svg'

const Img = styled.img`
  display: ${p => p.mobileOpen && 'none'};
  cursor: ${p => !(p.banner || p.footer) && 'pointer'};
  width: ${p => p.footer && rem(77)};
  height: ${p => p.footer && rem(65)};
  margin-top: ${p => p.footer && rem(74)};
  width: ${p => p.content === 'navbar' && '90%'};
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
  width: ${rem(152)};
  height: ${rem(107)};
  margin: 0 auto;
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
  <Img content="navbar" src={facebookImgUrl} alt="facebookImg" />
)

export const InstaIcon = () => (
  <Img content="navbar" src={instaImgUrl} alt="instaImgUrl" />
)

export const BlogIcon = () => (
  <Img content="navbar" src={blogImgUrl} alt="blogImg" />
)

export const YellowIcon = () => (
  <Img content="navbar" src={yellowImgUrl} alt="yellowImg" />
)

export const HeadLogo = () => (
  <Img content="navbar" src={headImgUrl} alt="headImg" mobileWidth={110} />
)

export const FooterLogo = ({ mobileHidden, mobileOpen }) => (
  <Img footer src={footerImgUrl} alt="headImg" mobileHidden={mobileHidden} mobileOpen={mobileOpen} />
)

export const RightDropIcon = () => (
  <Img src={rightDropImgUrl} alt="rightDropImg" />
)

export const SearchIcon = (...rest) => (
  <SearchImg src={searchImgUrl} alt="searchImg" {...rest} />
)

export const HomePartnerRightIcon = (...rest) => (
  <HomePartnerRightImg src={homePartnerRightImgUrl} alt="homePartnerRightImg" {...rest} />
)

export const DetailColorIcon = () => (
  <Img src={detailColorImgUrl} alt="detailColorImg" />
)

export const DetailDogNameIcon = () => (
  <Img src={detailDogNameImgUrl} alt="detailDogNameImg" />
)

export const DetailLocationIcon = () => (
  <Img src={detailLocationImgUrl} alt="detailLocationImg" />
)

export const DetailKannelIcon = () => (
  <Img src={detailKannelImgUrl} alt="detailKannelImg" />
)

export const ChangeRotationIcon = () => (
  <ChangeRotationImg src={changeRotationImgUrl} alt="changeRotationImg" />
)

export const BuildServiceIcon = () => (
  <Img src={buildServiceImgUrl} alt="buildServiceImg" />
)

export const LeftDropIcon = () => (
  <Img src={leftDropImgUrl} alt="leftDropImg" />
)

export const CloseIcon = () => (
  <Img src={closeImgUrl} alt="cloeImg" />
)

export const LeftArrowIcon = ({ goToPreviousSlide }) => (
  <ArrowWrapper onClick={goToPreviousSlide} left>
    <Img src={LeftArrowImgUrl} alt="leftArrowImg" mobileWidth={20} />
  </ArrowWrapper>
)

export const RightArrowIcon = ({ goToNextSlide }) => (
  <ArrowWrapper onClick={goToNextSlide} right>
    <Img src={RightArrowImgUrl} alt="rightArrowImg" mobileWidth={20} />
  </ArrowWrapper>
)

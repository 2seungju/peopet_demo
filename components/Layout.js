// 모든 페이지의 기초가 되는 레이아웃 컴포넌트

import React, { Component } from 'react'
import styled from 'styled-components'
import SeoHead from 'components/SeoHead'
import Nav from 'components/Nav'
import { marginTop } from 'utils/nav'
import Footer from 'components/Footer'
import rem from 'utils/rem'
import { white } from 'utils/colors'
import Spinner from 'components/Spinner'

const LayoutWrapper = styled.div`
  position: relative;
  height: 100%;
`

const Wrapper = styled.div`
  position: relative;
  ${p => p.location === 'breeder' && marginTop('70px')};

  background: ${p => (p.background ? p.background : white)};

  opacity: ${p => p.isSideMenuFolded && 0.76};
`

class Layout extends Component {
  state = {
    isDropMenuFolded: false,
    transparent: false,
    isScrolled: false,
    isSideMenuFolded: false,
    isMobileCategorySelected: false,
    mobileCategorySelectedId: ''
  }

  componentDidMount() {
    // Learn more about how { passive: true } improves scrolling performance
    // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Improving_scrolling_performance_with_passive_listeners
    // window.addEventListener('scroll', this.onScroll, { passive: true })
    window.addEventListener('scroll', this.onScroll)
    // TODO:
    // scrollTo ... !!!!
    // const agent = navigator.userAgent.toLowerCase()
    // if ((navigator.appName === 'Netscape' && navigator.userAgent.search('Trident') !== -1) || (agent.indexOf('msie') !== -1)) {
    //   alert('인터넷 익스플로러 브라우저로 접속하셨습니다.\n* 이 사이트는 크롬 브라우저에 최적화 되어 있습니다. *')
    // } else {
    //   document.getElementById('__next').scrollTo(0, 0)
    // }
  }

  // componentDidUpdate(prevProps) {
  //   console.log(prevProps.location, this.props.location)
  //   if (this.props.location !== prevProps.location) {
  //     this.onScroll()
  //   }
  //   const elem = document.getElementById('root')
  //   elem.scrollTop = elem.scrollHeight;
  // }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll)
  }

  onScroll = () => {
    document.getElementById('root').scrollTo(0, 0)
  }

  // onScroll = () => {
  //   const isScrolled = (window.pageYOffset || document.body.scrollTop) > 0

  //   if (isScrolled !== this.state.isScrolled) {
  //     this.setState({ isScrolled })
  //   }
  // }

  // 드랍바 컨트롤
  onDropMenuToggle = () => {
    const { isDropMenuFolded, isSideMenuFolded } = this.state
    this.setState({
      isDropMenuFolded: !isDropMenuFolded,
      isSideMenuFolded: !isSideMenuFolded && false
    })
  }

  onSideMenuToggle = () => {
    // console.log('??')
    const { isDropMenuFolded, isSideMenuFolded } = this.state
    this.setState({
      isSideMenuFolded: !isSideMenuFolded,
      isDropMenuFolded: !isDropMenuFolded && false
    })
  }

  // onChangeBreeder = (dogId) => {
  //   console.log(dogId)
  //   this.setState({
  //     isMobileCategorySelected: true,
  //     mobileCategorySelectedId: dogId
  //   })
  // }

  render() {
    const {
      title,
      description,
      children,
      location,
      handleClickSuggestion,
      background,
      breeder,
      onChangeBreeder,
      activeDogId,
      loading,
      isFiltered,
      mobile,
      image
    } = this.props
    const {
      isDropMenuFolded,
      transparent,
      isScrolled,
      isSideMenuFolded,
      isMobileCategorySelected,
      mobileCategorySelectedId
    } = this.state
    const { onDropMenuToggle, onSideMenuToggle } = this
    return (
      <LayoutWrapper>
        <SeoHead
          title={`페오펫${title ? `-${title}` : ''}`}
          description={description}
          image={image}
        />
        <Nav
          transparent={transparent}
          isDropMenuFolded={isDropMenuFolded}
          onDropMenuToggle={onDropMenuToggle}
          isScrolled={isScrolled}
          location={location}
          onSideMenuToggle={onSideMenuToggle}
          isSideMenuFolded={isSideMenuFolded}
          onChangeBreeder={onChangeBreeder}
          activeDogId={activeDogId}
          handleClickSuggestion={handleClickSuggestion}
          // showDropMenu={showDropMenu}
        />
        {isFiltered && loading ? (
          <Spinner loading={loading} />
        ) : (
          <Wrapper
            id="layout"
            location={location}
            background={background}
            isSideMenuFolded={isSideMenuFolded}
            onChangeBreeder={onChangeBreeder}
            handleClickSuggestion={handleClickSuggestion}
            isMobileCategorySelecte={isMobileCategorySelected}
            mobileCategorySelectedId={mobileCategorySelectedId}
          >
            {children}
          </Wrapper>
        )}
        <Footer isSideMenuFolded={isSideMenuFolded} />
      </LayoutWrapper>
    )
  }
}

export default Layout

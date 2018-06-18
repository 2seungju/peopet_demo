import React from 'react'
import styled from 'styled-components'
import modal from 'react-modal'

import Link from 'components/Link'

import { warmGrey2, squash, black, pooBrown, peacockBlue, white, white2, dark } from 'utils/colors'
import rem from 'utils/rem'
import Bar from 'components/Bar'
import media from 'utils/media'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 1%;
`

const Modal = styled(modal)`
  height: 100%;
  :focus {
    outline: 0;
  }
`

const ModalCard = styled.div`
  display: flex;
  width: 70%;
  height: 70%;

  align-items: center;
  position: absolute;
  z-index: 9999;
  top: 15%;
  left: 15%;
  background: ${white2};
`

const ModalBackground = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  z-index: 0;
`

const ModalTitle = styled.p``

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin: 7% 1%;
  width: ${rem(247)};
  height: ${rem(234)};
  position: relative;
  :hover {
    opacity: 0.7;
  }
`

const ImgWrapper = styled.div``

const Img = styled.img`
  width: ${p => (p.modal ? '50%' : '100%')};
`

const Breed = styled.p`
  color: ${black};
`

class AdoptionCard extends React.Component {
  state = {
    modalIsOpen: false
  }

  openModal = () => {
    this.setState({ modalIsOpen: true })
  }

  afterOpenModal = () => {
    // references are now sync'd and can be accessed.
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false })
  }

  render() {
    const {
      id,
      location,
      puppyimage,
      breeder,
      breed,
      sex,
      birth,
      detail,
      description,
      parents
    } = this.props

    return (
      <Wrapper>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="puppy"
          ariaHideApp={false}
        >
          <ModalCard>
            <Img modal src={puppyimage} alt="puppy" />
            <ModalTitle>{breed}</ModalTitle>
          </ModalCard>
          <ModalBackground onClick={() => this.setState({ modalIsOpen: false })} />
        </Modal>
        <CardWrapper onClick={() => this.setState({ modalIsOpen: true })}>
          <Img src={puppyimage} alt="puppy" />
          <Breed>{breed}</Breed>
        </CardWrapper>
      </Wrapper>
    )
  }
}

export default AdoptionCard

import React, { Component } from 'react'
import axios from 'axios'
import { fetchServerConfig } from 'config/config'
import Spinner from 'components/Spinner'
import styled from 'styled-components'
import update from 'react-addons-update'
import AdminForm from 'components/AdminInfo/AdminForm'

const Wrapper = styled.div`
  width: 100%;
`

const ButtonWrapper = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
`

const SelectButton = styled.button`
  ${'' /* width: 20%; */}
  height: 50px;
  background: ${p => p.color};
  margin-left: 10px;
  margin-right: 10px;
  outline: none;
  cursor: pointer;
`

const ContentWrapper = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  flex-direction: row;
  flex: 1;
`

const Label = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  flex-direction: column;
  flex: 1;
`

const Value = styled.div`
  flex: 3;
  ${'' /* flex-direction: column; */}
`

class AdminInfo extends Component {
  state = {
    dogData: [],
    breederData: [],
    loading: true,
    selectCategory: null,
    selectDetailData: null,
  }

  componentDidMount() {
    axios.get(`${fetchServerConfig.ip}/api/admin`)
      .then((res) => {
        const { dogData, breederData } = res.data
        this.setState({
          dogData,
          breederData,
          loading: false
        })
      })
      .catch(err => console.log(err))
  }

  handleSelect = (value) => {
    this.setState({
      selectCategory: value
    })
  }

  handleShowDetail = (id) => {
    const { selectCategory } = this.state
    const selectCategoryData = this.state[`${selectCategory}Data`]
    const selectDetailDataFiltered = selectCategoryData.filter(detail => detail._id === id)
    const selectDetailData = selectDetailDataFiltered[0]
    this.setState({
      selectDetailData
    })
  }

  handleUpdateText = (e, category, valueLabel, index) => {
    console.log(this.state.selectDetailData)
    this.setState({
      selectDetailData: update(
        this.state.selectDetailData,
        {
          [valueLabel]: {
            $set: valueLabel === 'rank' ? Number(e.target.value) : e.target.value
          }
        }
      )
    })
  }

  handleDeleteImage = (e, index) => {
    this.setState(prevState => ({
      photo: update(prevState.photo, {
        $splice: [[index, 1]]
      })
    }), () => {
      axios.post(`https://${fetchServerConfig.ip}:4000/api/breeder`, {
        data: this.state.photo,
      })
        .then((res) => console.log(res))
        .catch(err => console.log(err))
    })
  }


  render() {
    const { loading, dogData, breederData, selectCategory, selectDetailData } = this.state
    const { handleSelect, handleShowDetail, handleDeleteImage, handleUpdateText } = this

    return loading ? <Spinner /> : (
      <Wrapper>
        <ButtonWrapper>
          <SelectButton color="yellow" onClick={() => handleSelect('dog')}>
            견종
          </SelectButton>
          <SelectButton color="yellow" onClick={() => handleSelect('breeder')}>
            브리더
          </SelectButton>
          {/* <SelectButton onClick={() => handleSelect('partnerData')}>
            제휴업체
          </SelectButton> */}
        </ButtonWrapper>
        {
          selectCategory !== null &&
          <ContentWrapper>
            <Label>
              {
                selectCategory !== null && this.state[`${selectCategory}Data`].map(data => {
                  const selectCategoryName = `${selectCategory}Name`
                  const id = data._id
                  
                  return (
                    <SelectButton color="skyblue" onClick={() => handleShowDetail(id)}>
                      {data[selectCategoryName]}
                    </SelectButton>
                  )
                })
              }
            </Label>
            <Value>
              {
                selectDetailData &&
                  <AdminForm
                    category={selectCategory}
                    data={selectDetailData}
                    onDeleteImage={handleDeleteImage}
                    onUpdateText={handleUpdateText}
                  />
              }
            </Value>
          </ContentWrapper>
        }

      </Wrapper>
    )
  }
}

export default AdminInfo

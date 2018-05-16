import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const FormWrapper = styled.div`
  width: 100%;
  ${'' /* text-align: center; */}
  justify-content: center;
  display: flex;
`

const Label = styled.label`
  width: 20%;
`

const TextArea = styled.textarea`
  width: 70%;
  margin-left: 50px;
`

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
`

const Image = styled.img`
  width: 200px;
  height: 200px;
`

class AdminForm extends Component {

  render() {
    const formData = this.props.data
    const { onUpdateText, category } = this.props
    return (
      <Wrapper>
        {
          Object.keys(formData).map((data, index) => {
            if (data.indexOf('Image') === -1 && data !== '_id' && data !== 'isShowed' && data !== '__v' && data !== 'puppyList') {
              const valueLabel = data
              const value = formData[data]

              return (
                <FormWrapper>
                  <Label>{valueLabel}</Label>
                  <TextArea
                    name={valueLabel}
                    value={value}
                    onChange={e => onUpdateText(e, category, valueLabel, index)}
                    // type={valueLabel === 'rank' ? 'number' : 'text'}
                  />
                </FormWrapper>
              )
            }

            if (data.indexOf('Image') !== -1) {
              const valueLabel = data
              const value = formData[data]
              console.log(typeof value)
              return (
                <FormWrapper>
                  <Label>{valueLabel}</Label>
                  {
                    typeof value === 'object' && value.length > 0
                      ?
                        <ImageWrapper>
                          {
                            value.map(image => (<Image src={image} />))
                          }
                        </ImageWrapper>
                      :
                        <Image src={value} />
                  }
                
                <input disabled={data.isSelected} type="file" onChange={e => onUpdatePhoto(e, index)} />
                <input  type="submit" value="upload" />
                </FormWrapper>
              )
            }
          })
        }
        
      </Wrapper>
    )
  }
}

export default AdminForm

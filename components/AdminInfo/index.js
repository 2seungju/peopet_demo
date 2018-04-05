import React, { Component } from 'react'
import axios from 'axios'
import { fetchServerConfig } from 'config/config'
import Spinner from 'components/Spinner'

class AdminInfo extends Component {
  state = {
    dogData: [],
    breederData: [],
    loading: true
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

  render() {
    const { loading, dogData, breederData } = this.state

    return loading ? <Spinner /> : (
      <div>
        {
          dogData.map(dog => <div>{dog.dogName}</div>)
        }
      </div>
    )
  }
}

export default AdminInfo

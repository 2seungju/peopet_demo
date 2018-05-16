import React, { Component } from 'react'
import { login } from 'helpers/auth'
import AdminInfo from 'components/AdminInfo'

export default class Admin extends Component {
  state = {
    email: '',
    password: '',
    isAuthentication: false,
    loginError: '',
  }

  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    })
  }

  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value,
    })
  }

  handleAuthentication = (e) => {
    const { email, password } = this.state
    login(email, password)
      .then(() => {
        this.setState({
          isAuthentication: true
        })
      })
      .catch((err) => {
        console.log(err)
        this.setState({
          loginError: err.message,
        })
      })
    e.preventDefault()
  }

  render() {
    const {
      isAuthentication,
      loginError,
      email,
      password,
    } = this.state

    return (
      <div style={{ minHeight: '500px', paddingBottom: '50px' }}>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <input
            type="text"
            style={{ margin: '20px' }}
            onChange={this.handleEmailChange}
            value={email || ''}
            placeholder="email"
          />
          <input
            type="password"
            style={{ margin: '20px' }}
            onChange={this.handlePasswordChange}
            value={password || ''}
            placeholder="password"
          />
          {
            loginError
              ?
                <span>
                  <p style={{ color: 'red' }}>{this.state.loginError}</p>
                </span>
              :
              false
          }
          <button onClick={this.handleAuthentication} style={{ marginLeft: '20px' }}>
            로그인
          </button>
        </div>
        {
          !isAuthentication
            ? false
            :
            <AdminInfo />
        }
      </div>
    )
  }
}

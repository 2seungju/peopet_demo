// import React, { Component } from 'react'
// import axios from 'axios'
// import firebase from 'firebase'
// import { login, db } from 'helpers/auth'

// class Admin extends Component {

//   click = () => {
//     login('peopet@gmail.com', 'peo_pet123#')
//       .then(res => console.log(res)) 
//       .catch(err => console.log(err))
//     // ref('messages').once('value')
//     //   .then((snapshot) => {
//     //     const key = { key }
//     //     // const childKey = snapshot.child('name/last').key

//     //     console.log(key, snapshot)
//     //   })
//   }

//   add = () => {
//     console.log(db)
//     db.ref.child(`users/1/info`)
//       .set({
//         email: 123,
//         password: 0
//       })
//   }

//   render() {
//     return (
//       <div>
//         <button onClick={this.click}>
//           1
//         </button>
//         <button onClick={this.add}>
//           add
//         </button>
//       </div>
//     )
//   }
// }

// export default Admin


// // class Admin extends Component {
// //   state = {
// //     email: '',
// //     password: '',
// //     isAuthentication: false,
// //     loginError: '',
// //     dogList: [],
// //     breederList: [],
// //     // changeData: {},
// //     // loading: true,
// //   }

// //   handleEmailChange = (e) => {
// //     this.setState({
// //       email: e.target.value,
// //     })
// //   }

// //   handlePasswordChange = (e) => {
// //     this.setState({
// //       password: e.target.value,
// //     })
// //   }

// //   handleAuthentication = (e) => {
// //     const { email, password } = this.state
// //     login(email, password)
// //       .then(() => {
// //         axios.get('http://localhost:4000/api/admin')
// //           .then((data) => {
// //             this.setState({
// //               dogList: data.data[0],
// //               breederList: data.data[1],
// //               loginError: null,
// //               isAuthentication: true,
// //               // loading: false,
// //             })
// //           })
// //           .catch(err => console.log(err))
// //       })
// //       .catch((err) => {
// //         console.log(err)
// //         this.setState({
// //           loginError: err.message,
// //         })
// //       })
// //     e.preventDefault()
// //   }

// //   render() {
// //     const {
// //       isAuthentication,
// //       loginError,
// //       email,
// //       password,
// //       dogList,
// //       breederList,
// //     } = this.state

// //     return (
// //       <div style={{ minHeight: '500px', paddingBottom: '50px' }}>
// //         <div style={{ textAlign: 'center', marginTop: '20px' }}>
// //           <input
// //             type="text"
// //             style={{ margin: '20px' }}
// //             onChange={this.handleEmailChange}
// //             value={email || ''}
// //             placeholder="email"
// //           />
// //           <input
// //             type="password"
// //             style={{ margin: '20px' }}
// //             onChange={this.handlePasswordChange}
// //             value={password || ''}
// //             placeholder="password"
// //           />
// //           {
// //             loginError
// //               ?
// //               <span>
// //                 <p style={{ color: 'red' }}>{this.state.loginError}</p>
// //               </span>
// //               :
// //               false
// //           }
// //           <Button onClick={this.handleAuthentication} style={{ marginLeft: '20px' }}>
// //             로그인
// //           </Button>
// //         </div>
// //         {
// //           !isAuthentication
// //             ? false
// //             :
// //             <Admin
// //               dogList={dogList}
// //               breederList={breederList}
// //             />
// //         }
// //       </div>
// //     )
// //   }
// // }

// // export default Admin

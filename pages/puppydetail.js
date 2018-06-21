// import React from 'react'
// import styled from 'styled-components'
// import axios from 'axios'

// import { fetchServerConfig } from 'config/config'
// import Layout from 'components/Layout'
// import Link from 'components/Link'
// // import AdoptionCardList from 'components/Adoption/AdoptionCardList'

// import { warmGrey2, squash, black, pooBrown, peacockBlue, white, white2, dark } from 'utils/colors'
// import rem from 'utils/rem'
// import Bar from 'components/Bar'
// import media from 'utils/media'

// const Wrapper = styled.div`
//   display: flex;
// `

// const Img = styled.img`
//   width: 100%;
// `

// export default class Puppydetail extends React.Component {
//   static async getInitialProps({ query: { id } }) {
//     return { id }
//   }

//   state = {
//     puppy: []
//   }

//   componentDidMount() {
//     // axios
//     // .get(`${fetchServerConfig.ip}/api/review`)
//     // .then(res => {
//     //   this.setState({
//     //     reviews: res.data
//     //   })
//     // })
//     // .catch(err => console.log(err))
//     axios
//     const { id } = this.props
//     axios
//       .get(`http://localhost:3000/api/puppy/${id}`)
//       .then(res => {
//         this.setState({
//           puppy: res.data
//         })
//       })
//       .catch(err => console.log(err))
//   }

//   render() {
//     const { puppy } = this.state
//     console.log(puppy, this.props.id)
//     const {
//       id,
//       location,
//       puppyimage,
//       breeder,
//       breed,
//       sex,
//       birth,
//       detail,
//       description,
//       parents
//     } = puppy
//     return (
//       <Layout title="입양가능자견정보">
//         <Wrapper>
//           <Img src={puppyimage} alt="puppy" />
//         </Wrapper>
//       </Layout>
//     )
//   }
// }

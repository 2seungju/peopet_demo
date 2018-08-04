// 파이어베이스 설정

import * as firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyB-43g6n3WNQW1Mcq7kr5-nMBsu6rv_4YA',
  authDomain: 'dog-comparison.firebaseapp.com',
  databaseURL: 'https://dog-comparison.firebaseio.com',
  projectId: 'dog-comparison',
  storageBucket: 'dog-comparison.appspot.com',
  messagingSenderId: '690924004066'
}
// server side rendering issue complete
export default (!firebase.apps.length ? firebase.initializeApp(config) : firebase.app())

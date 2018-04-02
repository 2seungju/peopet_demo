import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyBAiKMiKUv2EPaRL7t0iikK8Urp2c2Botw',
  authDomain: 'peopet-c1d63.firebaseapp.com',
  databaseURL: 'https://peopet-c1d63.firebaseio.com',
  projectId: 'peopet-c1d63',
  storageBucket: 'peopet-c1d63.appspot.com',
  messagingSenderId: '524375475424',
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

firebase.app()

export const db = firebase.database()
export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth

export function saveUser(user) {
  return ref.child(`users/${user.uid}/info`)
    .set({
      email: user.email,
      uid: user.uid,
    })
    .then(() => user)
}

export function auth(email, password) {
  return firebaseAuth().createUserWithEmailAndPassword(email, password)
    .then(saveUser)
}

export function login(email, password) {
  return firebaseAuth().signInWithEmailAndPassword(email, password)
}

export function logout() {
  localStorage.removeItem('userId')
  return firebaseAuth().signOut()
}

export function resetPassword(email) {
  return firebaseAuth().sendPasswordResetEmail(email)
}

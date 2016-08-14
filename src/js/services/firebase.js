/* @flow */
'use strict'

// import firebase from 'firebase/app'
// import 'firebase/auth'
let firebase
const options = {
  apiKey: 'AIzaSyCTf3mxrfvE8E1W7HCMhUmyH5Ep4mC0irk',
  // apiKey: '130585767691-e8rk5b3r1uj2sr5og683vgkvod1ge35r.apps.googleusercontent.com',
  authDomain: 'udacity-67253.firebaseapp.com'
}

if (process.env.NODE_ENV !== 'test') {
  firebase = require('firebase/app')
  require('firebase/auth')

  var app = firebase.initializeApp(options)
  const provider = new firebase.auth.GoogleAuthProvider()
  provider.addScope('https://www.googleapis.com/auth/plus.login')
}

// console.log(app)

const Fire = {
  signIn: () => {
    return firebase.auth().signInWithPopup(provider)
  },
  signOut: () => {
    return firebase.auth().signOut()
  },
  getUser: () => {
    return firebase.auth().currentUser
  }
}

export default Fire

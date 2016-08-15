/* @flow */
'use strict'

let firebase
const options = {
  apiKey: 'AIzaSyCTf3mxrfvE8E1W7HCMhUmyH5Ep4mC0irk',
  authDomain: 'udacity-67253.firebaseapp.com'
}
let provider

if (process.env.NODE_ENV !== 'test') {
  firebase = require('firebase/app')
  require('firebase/auth')

  var app = firebase.initializeApp(options)
  provider = new firebase.auth.GoogleAuthProvider()
  provider.addScope('https://www.googleapis.com/auth/plus.login')
}

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

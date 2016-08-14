/* @flow */
'use strict'

import firebase from 'firebase/app'
import 'firebase/auth'

const options = {
  apiKey: 'AIzaSyCTf3mxrfvE8E1W7HCMhUmyH5Ep4mC0irk',
  // apiKey: '130585767691-e8rk5b3r1uj2sr5og683vgkvod1ge35r.apps.googleusercontent.com',
  authDomain: 'udacity-67253.firebaseapp.com'
}

var app = firebase.initializeApp(options)

// console.log(app)

const provider = new firebase.auth.GoogleAuthProvider()
provider.addScope('https://www.googleapis.com/auth/plus.login')

const Fire = {
  signIn: () => {
    console.log(firebase.auth())
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

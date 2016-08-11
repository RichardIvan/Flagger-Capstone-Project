/* @flow */
'use strict'

import m from 'mithril'

import buttonComponent from '../../components/menu-button'

import {
  signIn,
  signOut
} from '../../actions'

import {
  isUserSignedIn
} from '../../selectors/user'

export function authButtonBySignedInStatus(store: Object) {
  const isSignedIn = isUserSignedIn(store.getState())
  return isSignedIn ? signOutButton(store) : signInButton(store)
}

export function signInButton(store: Object) {
  return constructButtonBySignedInStatus(false, store)
}

export function signOutButton(store: Object) {
  return constructButtonBySignedInStatus(true, store)
}

export function constructButtonBySignedInStatus(isSignedIn: bool, store: Object) {
  return m(buttonComponent, {
    buttonText: isSignedIn ? 'Sign Out' : 'Sign In',
    buttonAttrs: {
      class: 'settings',
      id: 'oauth',
      onclick: () => isSignedIn ? signOut(store) : signIn(store)
    }
  })
}

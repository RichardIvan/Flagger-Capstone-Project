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
  return constructButtonBySignedInStatus(isSignedIn, store)
}

export function constructButtonBySignedInStatus(isSignedIn: bool, store: Object) {
  return m(buttonComponent, {
    buttonText: isSignedIn ? 'Logout' : 'Sign In',
    buttonAttrs: {
      class: 'settings',
      id: 'oauth',
      onclick: () => isSignedIn ? signOut(store) : signIn(store)
    }
  })
}

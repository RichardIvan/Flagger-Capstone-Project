/* @flow */
'use strict'

import m from 'mithril'

import buttonComponent from '../../components/menu-button'

import {
  signIn,
  signOut
} from '../../actions/user'

import {
  isUserSignedIn
} from '../../selectors/user'

export function authButtonBySignedInStatus(state: Object, dispatch) {
  const isSignedIn = isUserSignedIn(state)
  return constructButtonBySignedInStatus(isSignedIn, dispatch)
}

export function constructButtonBySignedInStatus(isSignedIn: bool, dispatch: Object) {
  return m(buttonComponent, {
    buttonText: isSignedIn ? 'Logout' : 'Sign In',
    buttonAttrs: {
      class: 'settings',
      id: 'oauth',
      onclick: () => dispatch(isSignedIn ? signOut() : signIn()),
      onkeyup: (e) => {
        if (e.keyCode === 13 || e.keyCode === 32) {
          dispatch(isSignedIn ? signOut() : signIn())
        }
      }
    }
  })
}

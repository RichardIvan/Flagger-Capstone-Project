/* @flow */
'use strict'

export function isUserSignedIn(state: Object) {
  return state.user.get('isSignedIn')
}

/* @flow */
'use strict'

export function isMobile (state: Object) {
  return state.responsiveState.get('state')
}

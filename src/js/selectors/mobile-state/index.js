/* @flow */
'use strict'

export function isMobile (state: Object) {
  return state.componentsState.applicationState.get('isMobile')
}

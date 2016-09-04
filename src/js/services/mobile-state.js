/* @flow */
'use strict'

import {
  isMobile
} from '../selectors'

import {
  setMobileState
} from '../actions'

const determineMobileState = (store) => {
  const currentState = isMobile(store.getState())
  const width = document.documentElement.clientWidth
  if (!currentState && width <= 680) {
    store.dispatch(setMobileState(true))
  } else if (currentState && width > 680) {
    store.dispatch(setMobileState(false))
  }
}

export function startResponsiveStateService (store: Object) {
  determineMobileState(store)
  window.onresize = (e) => {
    determineMobileState(store)
  }
}

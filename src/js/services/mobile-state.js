/* @flow */
'use strict'

import {
  isMobile
} from '../selectors'

import {
  setMobileState
} from '../actions'

export function startResponsiveStateService (store: Object) {
  window.onresize = (e) => {
    const state = isMobile(store.getState())
    const width = document.documentElement.clientWidth
    if (!state && width <= 680) {
      store.dispatch(setMobileState(true))
    } else if (state && width > 680) {
      store.dispatch(setMobileState(false))
    }
  }
}

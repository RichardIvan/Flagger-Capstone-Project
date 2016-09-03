/* @flow */
'use strict'

import {
  isGameInProgress,
  isNavigationComponentOpen
} from '../selectors'

import {
  closeNavigation,
  submitGuess
} from '../actions'

const P1 = 0
const P2 = 1

export function setupKeyBoardControls(store: Object) {
  window.addEventListener('keyup', (e) => {
    const state = store.getState()
    switch (e.keyCode) {
      case 27: {
        if(isNavigationComponentOpen(state)) {
          store.dispatch(closeNavigation())
        }
        break
      }
      case 49: {
        if (isGameInProgress(state)) {
          store.dispatch(submitGuess(0, P1))
        }
        break
      }
      case 50:
        if (isGameInProgress(state)) {
          store.dispatch(submitGuess(1, P1))
        }
        break
      case 51:
        if (isGameInProgress(state)) {
          store.dispatch(submitGuess(2, P1))
        }
        break
      case 56:
        if (isGameInProgress(state)) {
          store.dispatch(submitGuess(0, P2))
        }
        break
      case 57:
        if (isGameInProgress(state)) {
          store.dispatch(submitGuess(1, P2))
        }
        break
      case 48:
        if (isGameInProgress(state)) {
          store.dispatch(submitGuess(2, P2))
        }
        break
      default:
        return
    }

  })
}

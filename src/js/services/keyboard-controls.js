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

const clickButton = (index) => {
  const controlsEl = document.getElementById('controls')
  const button = controlsEl.getElementsByTagName('button')[index]
  button.click()
}

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
          // clickButton(0)
          store.dispatch(submitGuess(0))
        }
        break
      }
      case 50:
        if (isGameInProgress(state)) {
          // clickButton(1)
          store.dispatch(submitGuess(1))
        }
        break
      case 51:
        if (isGameInProgress(state)) {
          // clickButton(2)
          store.dispatch(submitGuess(2))
        }
      default:
        return
    }

  })
}

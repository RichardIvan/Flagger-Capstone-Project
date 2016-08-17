/* @flow */
'use strict'

import {
  START_GAME
} from '../constants'

export function startGame() {
  return {
    type: START_GAME
  }
  
  return (dispatch, state) => {
    // start game sets everything up
    // sets status
    // resets scores
    dispatch({
      type: START_GAME
    })

    const checkGameReadyStateAndStartFirstRound = function() {
      if (state.currectGame.gameState.get('state') === 'ready') {
        dispatch({

        })
      } else {
        setTimeout(() => {
          checkGameReadyState()
        }, 500)
      }
    }
    // set time out for the duration of the startign animation
    // before dispatching
    console.log('settings timeout for the initial animations')
    setTimeout(() => {
      checkGameReadyStateAndStartFirstRound()
    }, 500)
  }
}

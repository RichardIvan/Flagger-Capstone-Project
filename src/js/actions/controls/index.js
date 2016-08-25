/* @flow */
'use strict'

import {
  SUBMIT_GUESS,
  SWITCH_CONTROL_STATE
} from '../constants'

export function submitGuess(guessAsStyleObject: Object) {
  return {
    type: SUBMIT_GUESS,
    payload: {
      answer: guessAsStyleObject,
      end: new Date()
    }
  }
}

function setControlState(status: boolean) {
  return () => {
    return {
      type: SWITCH_CONTROL_STATE,
      payload: {
        disabled: status
      }
    }
  }
}

export const disableControls = setControlState(true)

export const enableControls = setControlState(false)

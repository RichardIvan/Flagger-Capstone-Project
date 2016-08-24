/* @flow */
'use strict'

import {
  SUBMIT_GUESS
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

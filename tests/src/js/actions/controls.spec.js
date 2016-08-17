/* @flow */
'use strict'

import { describe, it, beforeEach } from 'mocha'
import expect from 'expect'

import {
  isFSA
} from 'flux-standard-action'

import {
  submitGuess
} from '../../../../src/js/actions/controls'

describe('Submit Guess Action Creator', () => {
  it('should be FSA comliant', () => {
    expect(isFSA(submitGuess({
      rotateY: 0,
      rotateZ: 90
    }))).toBe(true)
  })
  it('should return correct actoin', () => {
    expect(submitGuess({
      rotateY: 0,
      rotateZ: 90
    })).toEqual({
      type: 'SUBMIT_GUESS',
      payload: {
        rotateY: 0,
        rotateZ: 90
      }
    })
  })
})

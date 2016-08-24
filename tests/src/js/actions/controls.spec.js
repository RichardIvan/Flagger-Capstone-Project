/* @flow */
'use strict'

import { describe, it, beforeEach } from 'mocha'
import expect from 'expect'

import has from 'lodash/has'

import {
  isFSA
} from 'flux-standard-action'

import {
  submitGuess
} from '../../../../src/js/actions/controls'

describe.only('Submit Guess Action Creator', () => {
  it('should be FSA comliant', () => {
    expect(isFSA(submitGuess({
      rotateY: 0,
      rotateZ: 90
    }))).toBe(true)
  })
  it('should have answer entry in payload', () => {
    expect(has(submitGuess({
      rotateY: 0,
      rotateZ: 90
    }).payload, 'answer')).toBe(true)
  })
  it('should have end entry in payload', () => {
    expect(has(submitGuess({
      rotateY: 0,
      rotateZ: 90
    }).payload, 'end')).toBe(true)
  })
  it('should end should be a number', () => {
    expect(submitGuess({
      rotateY: 0,
      rotateZ: 90
    }).payload.end).toBeA(Date)
  })
  it('should answer should reflect the passed in value', () => {
    expect(submitGuess({
      rotateY: 0,
      rotateZ: 90
    }).payload.answer).toEqual({
      rotateY: 0,
      rotateZ: 90
    })
  })
})

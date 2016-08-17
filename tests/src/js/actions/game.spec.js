/* @flow */
'use strict'

import { describe, it, beforeEach } from 'mocha'
import expect from 'expect'

import {
  isFSA
} from 'flux-standard-action'

import {
  startGame
} from '../../../../src/js/actions'

describe.only('Game Action Creator', () => {
  it('should create FSA compliant action', () => {
    expect(isFSA(startGame())).toBe(true)
  })
  it('should return correct action', () => {
    expect(startGame()).toEqual({
      type: 'START_GAME'
    })
  })
})

/* @flow */
'use strict'

import { describe, it, beforeEach } from 'mocha'
import expect from 'expect'

import {
  isFSA
} from 'flux-standard-action'

import {
  startGame,
  newRound,
  setGameLevel,
  resetLevel
} from '../../../../src/js/actions'

describe('Game Action Creator', () => {
  it('should create FSA compliant action', () => {
    expect(isFSA(startGame())).toBe(true)
  })
  it('should return correct action', () => {
    expect(startGame()).toEqual({
      type: 'START_GAME'
    })
  })
})

describe('#NEW_ROUND action creator', () => {
  it('should create FSA compliant action', () => {
    expect(isFSA(newRound())).toBe(true)
  })
  it('should return correct action', () => {
    expect(newRound()).toEqual({
      type: 'NEW_ROUND'
    })
  })
})

describe('#SET_GAME_LEVEL action creator', () => {
  it('should create FSA compliant action', () => {
    expect(isFSA(setGameLevel(1))).toBe(true)
  })
  it('should return correct action', () => {
    expect(setGameLevel(1)).toEqual({
      type: 'SET_GAME_LEVEL',
      payload: {
        level: 1
      }
    })
  })
  it('should set level to 1 of no level number provided', () => {
    expect(setGameLevel()).toEqual({
      type: 'SET_GAME_LEVEL',
      payload: {
        level: 1
      }
    })
  })
})

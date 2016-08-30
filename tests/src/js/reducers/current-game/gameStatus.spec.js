/* @flow */
'use strict'

import { describe, it, beforeEach } from 'mocha'
import expect from 'expect'

import {
  Map
} from 'immutable'

import {
  START_GAME,
  CHANGE_ROUTE,
  MENU_ROUTE,
  RESULTS_ROUTE
} from '../../../../../src/js/actions/constants'

import reducer, { initialState } from '../../../../../src/js/reducers/current-game'

describe.only('Game Status Entry in Current Game', () => {
  let state
  beforeEach(function () {
    state = Map({
      gameStatus: 'paused'
    })
  })

  it('should have initial state of "ended"', () => {
    expect(reducer().get('gameStatus')).toBe('ended')
  })
  it('#START_GAME should set gameStatus to "playing"', () => {

    expect(reducer(initialState, { type: START_GAME }).get('gameStatus')).toBe('playing')
  })
  it('#SHOW_GAME_RESULTS should set gameStatus to "ended"', () => {
    const action = {
      type: CHANGE_ROUTE,
      payload: {
        route: MENU_ROUTE
      }
    }
    expect(reducer(state, action).get('gameStatus')).toBe('ended')
    const nextAction = {
      type: CHANGE_ROUTE,
      payload: {
        route: RESULTS_ROUTE
      }
    }
    expect(reducer(state, nextAction).get('gameStatus')).toBe('ended')
  })
})

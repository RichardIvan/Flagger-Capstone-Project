/* @flow */
'use strict'

import { describe, it, beforeEach } from 'mocha'
import expect from 'expect'

import {
  fromJS,
  Map
} from 'immutable'

import {
  NEW_SINGLE_PLAYER_GAME
} from '../../../../../src/js/actions/constants'

import reducer, { initialState } from '../../../../../src/js/reducers/current-game'

describe('Scores Reducer', () => {
  it('should have initial state with empty players Map', () => {
    expect(reducer().get('scores')).toEqual(fromJS({
      players: {}
    }))
  })
  it('should return initial state when no state passed in', () => {
    expect(reducer()).toEqual(initialState)
  })
  it('should return initial state when no action passed in', () => {
    expect(reducer(initialState)).toEqual(initialState)
  })
  it('should return state if no action passed in', () => {
    const state = Map({
      hey: 'ho'
    })
    const newState = reducer(state)
    expect(newState).toEqual(fromJS({
      hey: 'ho'
    }))
  })
  it('should return state if no recognized action.type is passed in', () => {
    const state = Map({
      hey: 'ho'
    })
    const newState = reducer(state, { type: 'DUNNO'})
    expect(newState).toEqual(fromJS({
      hey: 'ho'
    }))
  })
  it('should create player entry on NEW_SINGLE_PLAYER_GAME action received', () => {
    const action = {
      type: NEW_SINGLE_PLAYER_GAME,
      payload: {
        player_id: 'uniqueid'
      }
    }
    const newState = reducer(initialState, action)
    expect(newState.get('scores')).toEqual(fromJS({
      players: {
        'uniqueid': 0
      }
    }))
  })
})

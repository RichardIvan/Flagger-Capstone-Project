/* @flow */
'use strict'

import { describe, it, beforeEach } from 'mocha'
import expect from 'expect'

import {
  fromJS,
  Map
} from 'immutable'

import {
  SET_GAME_LEVEL
} from '../../../../../src/js/actions/constants'

import reducer, { initialState } from '../../../../../src/js/reducers/current-game'

describe('Level Reducer', () => {
  it('should return initial state when no state passed in', () => {
    expect(reducer()).toEqual(initialState)
  })
  it('should return initial state when no action passed in', () => {
    expect(reducer(initialState)).toEqual(initialState)
  })
  it('should have initial state of one', () => {
    expect(reducer(initialState).get('level')).toEqual(1)
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
      type: SET_GAME_LEVEL,
      payload: {
        level: 2
      }
    }
    const newState = reducer(initialState, action)
    expect(newState.get('level')).toEqual(2)
  })
})
